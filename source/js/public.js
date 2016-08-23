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
    var URI = decodeURI(window.location.hash.split("?")[1]);
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
function getCurrentCity(deferred){
	var _deferred = deferred?deferred:$.Deferred();
	var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
    	console.log(r);
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
        	deferred.data = r;
            deferred.resolved();
        }
        else {
            window.setTimeout(function(){
            	getCurrentCity(_deferred);
            },2000);
        }        
    },{enableHighAccuracy: true});
    return deferred;
}























