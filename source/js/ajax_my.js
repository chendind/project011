// 获取用户信息
function getAllMyInfo(){
	var ajax = $.ajax({
		url: baseUrl + "/users/",
		type: "GET",
		headers: getAjaxHeader(),
		beforeSend: ajaxDataHandle,
		contentType: contentType,
		success: successHandle,
		error: errorHandle,
		crossDomain: true
	});
	return ajax;
}
// 获取所有
function getAllMyAddress(){
	var ajax = $.ajax({
		url: baseUrl + "/users/addresses",
		type: "GET",
		headers: getAjaxHeader(),
		beforeSend: ajaxDataHandle,
		contentType: contentType,
		success: successHandle,
		error: errorHandle,
		crossDomain: true
	});
	return ajax;
}
// 获得一个地址
function getOneAddress(id){
		var ajax = $.ajax({
		url: baseUrl + "/users/addresses/"+id,
		type: "GET",
		headers: getAjaxHeader(),
		beforeSend: ajaxDataHandle,
		contentType: contentType,
		success: successHandle,
		error: errorHandle,
		crossDomain: true
	});
	return ajax;
}
// 删除一个地址
function deleteOneAddress(id){
		var ajax = $.ajax({
		url: baseUrl + "/users/addresses/"+id,
		type: "DELETE",
		headers: getAjaxHeader(),
		beforeSend: ajaxDataHandle,
		contentType: contentType,
		success: successHandle,
		error: errorHandle,
		crossDomain: true
	});
	return ajax;
}