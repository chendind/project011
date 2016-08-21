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
