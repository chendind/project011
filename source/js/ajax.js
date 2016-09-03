// 配置项
var baseUrl = "http://120.26.94.240:8989";
var contentType = 'application/octet-stream';
var appId = "wx51e4e7ced9ff48f1";
function successHandle(data){
	if(data.resultCode == 402){
		// 登录超时
		window.location.href = "login.html";
		window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appId+
								"&redirect_uri="+
								"http://test.qess.me/wechat/getCookie?redirectUrl="+
								"http://www.chendind.com/project011/pages/indexPage.html"+
								"&response_type=code&scope=snsapi_userinfo&connect_redirect=1#wechat_redirect";
	}
	else if((data.resultCode!=200)&&data.message){
		mui.toast(data.message);

	}
}
function errorHandle(data){
	mui.toast("网络异常");
}
function ajaxDataHandle(){
	var data = this.data;
	if(data){
		var string = JSON.stringify(data);
		this.data = new TextEncoder().encode(string);
	}
}
function getAjaxHeader(){
	var token = window.localStorage.getItem("token"),
		version = window.localStorage.getItem("version"),
	    header = {};
	if(token){
		header.token = token;
		header.version = version;
		header.OriginType = "mp";
	}
	else{
		header.version = "1.0";
		header.OriginType = "mp";
	}
	header.token = "e53ef4ac5eb017417b17aa31c947d683";
	return header;
}
function dataFilter(data,dataType){
	if(typeof data == "string"){
		data = JSON.parse(data);
	}
	return data;
}
$.ajaxSetup({
	headers: getAjaxHeader(),
	beforeSend: ajaxDataHandle,
	contentType: contentType,
	processData: false,
	success: successHandle,
	error: errorHandle
});
// 获得验证码
function getVerifyCode(phone){
	var ajax = $.ajax({
		url: baseUrl + "/users/verify_code",
		type: "POST",
		data: {
			"phone": phone
		}
	});
	return ajax;
}
// 注册
function userRegister(phone,verifyCode){
	var ajax = $.ajax({
		url: baseUrl + "/users/register",
		type: "POST",
      	crossDomain: true,
		data: {
			"phone": phone,
			"verifyCode": verifyCode
		}
	});
	return ajax;
}
// 用户登陆
function userLogin(phone,verifyCode){
	var ajax = $.ajax({
		url: baseUrl + "/users/login",
		type: "POST",
      	crossDomain: true,
		data: {
			"phone": phone,
			"verifyCode": verifyCode
		}
	});
	return ajax;
}
// 用户登出
function userLogout(){
	var ajax = $.ajax({
		url: baseUrl + "/users/logout",
		type: "POST"
	});
	return ajax;
}

// 首页
// 按首字母获取城市
function getAllCity(){
	var ajax = $.ajax({
		url: baseUrl + "/home/cities",
		type: "GET"
	});
	return ajax;
}
// 获取城市列表
function getCityList(){
	var ajax = $.ajax({
		url: baseUrl + "/apply/cities",
		type: "GET"
	});
	return ajax;
}
// 搜索城市
function searchCity(cityName){
	var ajax = $.ajax({
		url: baseUrl + "/home/cities/"+cityName,
		type: "GET"
	});
	return ajax;
}
// 获取轮播图
function getBannersByCityId(cityId){
	var ajax = $.ajax({
		url: baseUrl + "/home/banners/"+cityId,
		type: "GET"
	});
	return ajax;
}
// 首页3+2推荐数据
function getRecommends(cityId){
	var ajax = $.ajax({
		url: baseUrl + "/home/recommends/"+cityId,
		type: "GET"
	});
	return ajax;
}
// 根据id获取推荐专题详情
function getRecommendThemeInfo(themeId){
	var ajax = $.ajax({
		url: baseUrl + "/imgTheme/" + themeId,
		type: "GET"
	});
	return ajax;
}
// 根据推荐列表id获取单品书籍列表
function getRecommendBooksByTypeAndId(type,id){
	var ajax = $.ajax({
		url: baseUrl + "/recommendbooks/"+type+"/"+id,
		type: "GET"
	});
	return ajax;
}
// 搜索书本
function searchBooks(keyword,cityId,page){
	var ajax = $.ajax({
		url: baseUrl + "/search",
		type: "POST",
		data: {
			"keyword": keyword,
			"cityId": cityId,
			"page": page
		}
	});
	return ajax;
}
// 根据城市id获取书库页面分类数据
function getCategoryByCityId(cityId){
	var ajax = $.ajax({
		url: baseUrl + "/categories/"+cityId,
		type: "GET"
	});
	return ajax;
}
// 根据parentId获取分类数据
function getCategoryChildrenByParentId(parentId){
	var ajax = $.ajax({
		url: baseUrl + "/categories/children/"+parentId,
		type: "GET",
		dataFilter: dataFilter
	});
	return ajax;
}
// 根据分类id获取书籍列表
function getBooksByCategoryId(categoryId, cityId, sort, page, pageSize){
	pageSize = pageSize?pageSize:"10";
	var ajax = $.ajax({
		url: baseUrl + "/categories/"+categoryId+"/books",
		type: "POST",
		data:{
			"cityId":cityId,
			"sort":sort,
			"page":page,
			"pageSize":pageSize
		}
	});
	return ajax;
}
function getCurrentCity(deferred){
    var _deferred = deferred?deferred:$.Deferred();
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            _deferred.resolve(r);
        }
        else {
            mui.toast("获取城市出错");
        }        
    },{enableHighAccuracy: true});
    return _deferred;
}
// 申请成为ceo
// 申请成为ceo发送验证码
function sendMessageForApplyCeo(phone){
	var ajax = $.ajax({
		url: baseUrl + "/apply/"+phone+"/message",
		type: "GET"
	});
	return ajax;
}
// 抢购详情接口
function getPanicBuy(){
	var ajax = $.ajax({
		url: baseUrl + "/panicBuy",
		type: "GET"
	});
	return ajax;
}
// webapp用户绑定手机号: 发送验证码
function sendMessageForBindPhone(phone){
	var ajax = $.ajax({
		url: baseUrl + "/users/webapp_bind",
		type: "POST",
		data:{
			"phone":phone
		}
	});
	return ajax;
}
// webapp用户绑定手机号: 检验验证码
function bindPhoneByVerifyCode(phone, verifyCode){
	var ajax = $.ajax({
		url: baseUrl + "/users/bind",
		type: "POST",
		data:{
			"phone":phone,
			"verifyCode":verifyCode
		}
	});
	return ajax;
}




// 获取微信分享参数
function getWechatShareConfig(url){
	var ajax = $.ajax({
		url: baseUrl + "/wxshare/jsapi",
		data: {
			"url": url
		},
		type: "POST"
	});
	return ajax;
}
// 刷新微信分享参数
function refreshWechatShareConfig(url){
	var ajax = $.ajax({
		url: baseUrl + "/wxshare/jsapi",
		data: {
			"url": url
		},
		type: "PUT"
	});
	return ajax;
}
// 设置微信分享参数
function setWechatShareConfig(title,desc,link,imgUrl){
	title||(title = '云书，一个免费送教材的平台');
	desc||(desc = '打破常规，突破垄断；定义教材，预见未来');
	link||(link = window.location.href);
	imgUrl||(imgUrl = "http://www.chendind.com/project011/source/images/ysdownload.png");

    var config = {
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl,
        success: function() {
            
        },
        cancel: function() {

        }
    };
    wx.ready(function(data) {
        // 朋友圈
        wx.onMenuShareTimeline(config);
        // 朋友
        wx.onMenuShareAppMessage(config);
        // QQ
        wx.onMenuShareQQ(config);
        // 腾讯微博
        wx.onMenuShareWeibo(config);
        // QQ空间
        wx.onMenuShareQZone(config);
    });
    // 如果失败那么刷新参数
    wx.error(function(res){
    	$.when(refreshWechatShareConfig(window.location.href)).done(function(data){
	        if(data.resultCode == 200){
	            wx.config({
	                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	                appId: appId, // 必填，公众号的唯一标识
	                timestamp: data.data.timestamp, // 必填，生成签名的时间戳
	                nonceStr: data.data.nonceStr, // 必填，生成签名的随机串
	                signature: data.data.signature,// 必填，签名，见附录1
	                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	            });
	            setWechatShareConfig("","","","");
	        }
	    });
    })
}
// 发起微信支付
// function getWechatPayParams(tradeNo,payType,change){
// 	var ajax = $.ajax({
// 		url: baseUrl + "/trade/wxPayParams",
// 		data: {
// 			"tradeNo": tradeNo,
// 			"payType": payType,
// 			"change": change
// 		},
// 		type: "POST"
// 	});
// 	return ajax;
// }























