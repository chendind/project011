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
		var arr = data.split("&");
		var obj = {};
		for(var i = 0, length = arr.length; i<length; i++){
			var o = arr[i].split("=");
			obj[o[0]] = o[1];
		}
		var string = JSON.stringify(obj);
		this.data = new TextEncoder().encode(string);
	}
}
function getAjaxHeader(){
	var token = window.localStorage.getItem("token"),
		version = window.localStorage.getItem("version"),
	    header = {};
	if(token&&version){
		header.token = token;
		header.version = version;
	}
	return header;
}
// 获得验证码
function getVerifyCode(phone){
	var ajax = $.ajax({
		url: baseUrl + "/users/verify_code",
		type: "POST",
		beforeSend: ajaxDataHandle,
		contentType: contentType,
		data: {
			"phone": phone
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 注册
function userRegister(phone,verifyCode){
	var ajax = $.ajax({
		url: baseUrl + "/users/register",
		type: "POST",
		beforeSend: ajaxDataHandle,
		contentType: contentType,
      	crossDomain: true,
		data: {
			"phone": phone,
			"verifyCode": verifyCode
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 用户登陆
function userLogin(phone,verifyCode){
	var ajax = $.ajax({
		url: baseUrl + "/users/login",
		type: "POST",
		beforeSend: ajaxDataHandle,
		contentType: contentType,
      	crossDomain: true,
		data: {
			"phone": phone,
			"verifyCode": verifyCode
		},
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 用户登出
function userLogout(){
	var ajax = $.ajax({
		url: baseUrl + "/users/logout",
		type: "POST",
		beforeSend: ajaxDataHandle,
		contentType: contentType,
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 用户修改个人资料
function userProfile(type, value){
	var params = {};
	if(type == 1){
		// 修改头像
		params.imgId = value;
	}
	else if(type == 2){
		// 修改用户名
		params.username = value;
	}
	else if(type == 3){
		params.sex = value;
	}
	else if(type == 4){
		// params.
	}
	var ajax = $.ajax({
		url: baseUrl + "/users/login",
		type: "POST",
		beforeSend: ajaxDataHandle,
		contentType: contentType,
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}




// 首页
// 获取城市
function getAllCity(){
	var ajax = $.ajax({
		url: baseUrl + "/home/cities",
		type: "GET",
		headers: getAjaxHeader(),
		beforeSend: ajaxDataHandle,
		contentType: contentType,
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 搜索城市
function searchCity(cityName){
	var ajax = $.ajax({
		url: baseUrl + "/home/cities/"+cityName,
		type: "GET",
		headers: getAjaxHeader(),
		beforeSend: ajaxDataHandle,
		contentType: contentType,
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 获取轮播图
function getBannersByCityId(cityId){
	var ajax = $.ajax({
		url: baseUrl + "/home/banners/"+cityId,
		type: "GET",
		headers: getAjaxHeader(),
		beforeSend: ajaxDataHandle,
		contentType: contentType,
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
// 首页3+2推荐数据
function getRecommends(cityId){
	var ajax = $.ajax({
		url: baseUrl + "/home/recommends/"+cityId,
		type: "GET",
		headers: getAjaxHeader(),
		beforeSend: ajaxDataHandle,
		contentType: contentType,
		success: successHandle,
		error: errorHandle
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
		},
		headers: getAjaxHeader(),
		beforeSend: ajaxDataHandle,
		contentType: contentType,
		success: successHandle,
		error: errorHandle
	});
	return ajax;
}
































