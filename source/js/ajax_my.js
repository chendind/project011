// 获取用户信息
function getAllMyInfo() {
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
function getAllMyAddress() {
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
function getOneAddress(id) {
    var ajax = $.ajax({
        url: baseUrl + "/users/addresses/" + id,
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
function deleteOneAddress(id) {
    var ajax = $.ajax({
        url: baseUrl + "/users/addresses/" + id,
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
// 登出
function logout(id) {
    var ajax = $.ajax({
        url: baseUrl + "/users/logout/",
        type: "POST",
        headers: getAjaxHeader(),
        beforeSend: ajaxDataHandle,
        contentType: contentType,
        success: successHandle,
        error: errorHandle,
        crossDomain: true
    });
    return ajax;
}
// 获取学校
function getSchoolList() {
    var ajax = $.ajax({
        url: baseUrl + "/schools/"+currentCityId,
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
//获取宿舍
function getDormList(id) {
    var ajax = $.ajax({
        url: baseUrl + "/schools/"+id+"/dorms",
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
// 新增地址
function addAddress(data) {
    var ajax = $.ajax({
        url: baseUrl + "/users/addresses",
        type: "POST",
        data:data,
        headers: getAjaxHeader(),
        beforeSend: ajaxDataHandle,
        contentType: contentType,
        success: successHandle,
        error: errorHandle,
        crossDomain: true
    });
    return ajax;
}
// 修改性别
function editSex(sex) {
    var ajax = $.ajax({
        url: baseUrl + "/users/profile",
        data:{"type":3,"sex":sex},
        type: "PUT",
        headers: getAjaxHeader(),
        beforeSend: ajaxDataHandle,
        contentType: contentType,
        success: successHandle,
        error: errorHandle,
        crossDomain: true
    });
    return ajax;
}
// 修改用户名
function editUsername(name) {
    var ajax = $.ajax({
        url: baseUrl + "/users/profile",
        data:{"type":2,"username":name},
        type: "PUT",
        headers: getAjaxHeader(),
        beforeSend: ajaxDataHandle,
        contentType: contentType,
        success: successHandle,
        error: errorHandle,
    });
    return ajax;
}
// 修改手机号
function editPhoneNum(phone,verfityCode) {
    var ajax = $.ajax({
        url: baseUrl + "/users/profile",
        data:{"type":5,"phone":phone,"verfityCode":verfityCode},
        type: "PUT",
        headers: getAjaxHeader(),
        beforeSend: ajaxDataHandle,
        contentType: contentType,
        success: successHandle,
        error: errorHandle,
        crossDomain: true
    });
    return ajax;
}