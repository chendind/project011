// 配置项
var baseUrl = "http://120.26.94.240:8989";
var contentType = 'application/octet-stream';
function successHandle(data){
	if((data.resultCode!=200)&&data.message){
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



























