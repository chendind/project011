// 获取用户信息
function getAllMyInfo() {
    var ajax = $.ajax({
        url: baseUrl + "/users/",
        type: "GET",
        cache:false
    });
    return ajax;
}
// 获取所有
function getAllMyAddress() {
    var ajax = $.ajax({
        url: baseUrl + "/users/addresses",
        type: "GET",
    });
    return ajax;
}
// 获得一个地址
function getOneAddress(id) {
    var ajax = $.ajax({
        url: baseUrl + "/users/addresses/" + id,
        type: "GET",
    });
    return ajax;
}
// 删除一个地址
function deleteOneAddress(id) {
    var ajax = $.ajax({
        url: baseUrl + "/users/addresses/" + id,
        type: "DELETE",
    });
    return ajax;
}
// 获取学校
function getSchoolList(cityId) {
    if (!cityId) {
        cityId = currentCityId;
    }
    var ajax = $.ajax({
        url: baseUrl + "/schools/" + cityId,
        type: "GET",
    });
    return ajax;
}
//获取宿舍
function getDormList(id) {
    var ajax = $.ajax({
        url: baseUrl + "/schools/" + id + "/dorms",
        type: "GET",
    });
    return ajax;
}
// 新增地址
function addAddress(data) {
    var ajax = $.ajax({
        url: baseUrl + "/users/addresses",
        type: "POST",
        data: data,
    });
    return ajax;
}
// 修改地址
function editAddress(id,data) {
    var ajax = $.ajax({
        url: baseUrl + "/users/addresses/"+id,
        type: "PUT",
        data: data,
    });
    return ajax;
}
// 修改性别
function editSex(sex) {
    var ajax = $.ajax({
        url: baseUrl + "/users/profile",
        data: { "type": 3, "sex": sex },
        type: "PUT",
    });
    return ajax;
}
// 修改用户名
function editUsername(name) {
    var ajax = $.ajax({
        url: baseUrl + "/users/profile",
        data: { "type": 2, "username": name },
        type: "PUT",
    });
    return ajax;
}
// 修改手机号
function editPhoneNum(phone, verifyCode) {
    var ajax = $.ajax({
        url: baseUrl + "/users/profile",
        data: { "type": 5, "phone": phone, "verifyCode": verifyCode },
        type: "PUT",
    });
    return ajax;
}
// 浏览历史
function getHistory(page, pageSize) {
    var ajax = $.ajax({
        url: baseUrl + "/histories",
        type: "POST",
        data: { "page": page, "pageSize": pageSize },
    });
    return ajax;
}
// 订单列表
function getOrderList(page, status) {
    var ajax = $.ajax({
        url: baseUrl + "/orders/list",
        type: "POST",
        data: { "page": page, "orderStatus": status },
    });
    return ajax;
}
// 获取零钱和积分
function getScore() {
    var ajax = $.ajax({
        url: baseUrl + "/users/profiles/infos",
        cache:false
    });
    return ajax;
}
// 积分兑换零钱
function scoreExchange(score) {
    var ajax = $.ajax({
        url: baseUrl + "/users/profiles/scores/exchange",
        type: "POST",
        data: { "score": score },
    });
    return ajax;
}
//积分记录列表
function scoreList(page) {
    var ajax = $.ajax({
        url: baseUrl + "/users/profiles/scores/records/" + page,
        type: "GET",
    });
    return ajax;
}
// 零钱记录列表
function moneyRecordList(page) {
    var ajax = $.ajax({
        url: baseUrl + "/users/profiles/moneys/records/" + page,
        type: "GET",
    });
    return ajax;
}
// 零钱记录详细
function moneyRecordDetail(id) {
    var ajax = $.ajax({
        url: baseUrl + "/users/profiles/moneys/records/jump/" + id,
        type: "GET",
    });
    return ajax;
}
// 书本详情
function bookDetail(id) {
    var ajax = $.ajax({
        url: baseUrl + "/books/" + id,
        type: "GET",
    });
    return ajax;
}
// 购物车列表
function cartList() {
    var ajax = $.ajax({
        url: baseUrl + "/shopping_carts",
        type: "POST",
        data: { "page": "1", "pageSize": "1000" },
    });
    return ajax;
}
// 增加到购物车
function addToCart(id) {
    var ajax = $.ajax({
        url: baseUrl + "/shopping_cart",
        type: "POST",
        data: { "relationId": id, "type": "0", "num": "1", "featureId": "0", "cityId": currentCityId },
    });
    return ajax;
}
// 删除到购物车
function deleteFromCart(id) {
    var ajax = $.ajax({
        url: baseUrl + "/shopping_carts/" + id,
        type: "DELETE",
    });
    return ajax;
}
// 生成订单
function createOrder(ids, num, type) {
    var ajax = $.ajax({
        url: baseUrl + "/orders",
        type: "POST",
        data: { "ids": ids, "type": type, "num": num, "featureId": "0", "cityId": currentCityId },
    });
    return ajax;
}
// 确认订单
function orderConfirm(tradeNo) {
    var ajax = $.ajax({
        url: baseUrl + "/orders/confirm/" + tradeNo + "/" + currentCityId,
        type: "GET",
    });
    return ajax;
}
// 获取订单详情
function orderDetail(tradeNo) {
    var ajax = $.ajax({
        url: baseUrl + "/orders/" + tradeNo,
        type: "GET",
    });
    return ajax;
}
// 微信支付
function wechatPay(tradeNo,change) {
    var ajax = $.ajax({
        url: baseUrl + "/trade/wxPayParams",
        type: "POST",
        data:{"tradeNo":tradeNo,"payType":"0","change":change},
    });
    return ajax;
}
// 修改留言
function changeMessage(tradeNo,message) {
    var ajax = $.ajax({
        url: baseUrl + "/orders/"+tradeNo+"/message",
        type: "PUT",
        data:{"message":message},
    });
    return ajax;
}
// 修改订单地址
function editOrderPlace(tradeNo,aid) {
    var ajax = $.ajax({
        url: baseUrl + "/orders/"+tradeNo+"/address/"+aid,
        type: "PUT",
    });
    return ajax;
}
// 取消订单
function cancelOrder(tradeNo) {
    var ajax = $.ajax({
        url: baseUrl + "/orders/"+tradeNo+"/close",
        type: "PUT",
    });
    return ajax;
}
//查询物流信息
function expressDetail(tradeNo,company,isYun,expressNo) {
    var ajax = $.ajax({
        url: baseUrl + "/orders/"+tradeNo+"/express",
        type: "POST",
        data:{"company":company,"isYunExpress":isYun,"expressNumber":expressNo},
    });
    return ajax;
}
// 申请退款
function applyRefund(tradeNo) {
    var ajax = $.ajax({
        url: baseUrl + "/orders/"+tradeNo+"/cancel",
        type: "PUT",
    });
    return ajax;
}                           
// 零钱支付
function changePay(tradeNo,change) {
    var ajax = $.ajax({
        url: baseUrl +"/changePay/success",
        type: "POST",
        data:{"change":change*100,"tradeNo":tradeNo}
    });
    return ajax;
}
// 获取优惠券
function getCouponsList(page){
    var ajax = $.ajax({
        url: baseUrl +"/users/coupons/page/"+page,
        type: "GET"
    });
    return ajax;
}





















