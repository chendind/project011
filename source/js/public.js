var currentCityId = window.localStorage.getItem("cityId");
var currentCityName = window.localStorage.getItem("cityName");
if(currentCityName&&currentCityId){
	// 已获取当前城市及id
}
else{
	window.location.href = "index.html";
}
$(function(){
	mui("body").on('tap','.smallCartIcon',function(e){
		e.stopPropagation();
		mui.toast("添加成功");
	});
	$("body").on('tap','[data-href]',function(e){
		e.stopPropagation();
		e.preventDefault();
		var href = $(this).attr("data-href");
		href&&(window.location.href=href);
	});
});
function encodeObj(obj){
	return encodeURI(JSON.stringify(obj));
}
function getQueryData(){
    var URI = decodeURI(window.location.search.split("?")[1]);
    var parseURI = URI;
    if(URI){
        try{
            parseURI = JSON.parse(URI);
        }
        catch(e){
            parseURI = "";
        }
    }
    return parseURI;
}























