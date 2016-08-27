var currentCityId = window.localStorage.getItem("cityId");
var currentCityName = window.localStorage.getItem("cityName");
if(currentCityName&&currentCityId){
	// 已获取当前城市及id
}
else{
	window.location.href = "index.html";
}
$(function(){
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




/* 一些书本列表页面公用的方法
*/
var bookTableCellHtml = '<ul class="mui-table-view" style="margin-top: 10px;">'+
        '<li class="mui-table-view-cell">'+
            '<a data-href="">'+
                '<div class="mui-table">'+
                    '<div class="mui-table-cell mui-col-xs-3">'+
                        '<img class="bookCoverImage" style="width: 80%;" src="" />'+
                    '</div>'+
                    '<div class="mui-table-cell mui-col-xs-9">'+
                       '<h4 style="margin-bottom: 10px;font-size: 15px;" class="title mui-ellipsis"></h4>'+
                        '<h6>作者：<span class="author"></span></h6>'+
                        '<h6>出版社：<span class="publisher"></span></h6>'+
                        '<span class="mui-h4 linkColor">¥<span class="marketPrice"></span></span>'+
                    '</div>'+
                '</div>'+
            '</a>'+
            '<img class="smallCartIcon" src="../source/webslice/0_common/common_add_cart.png" />'+
        '</li>'+
    '</ul>';
function getSingleBookTableCell(id,path,title,author,publisher,marketPrice){
    var tableCell = $(bookTableCellHtml);
    tableCell.find('.bookCoverImage').attr("src",path).end()
        .find('.title').text(title).end()
        .find('.author').text(author).end()
        .find('.publisher').text(publisher).end()
        .find('.marketPrice').text(marketPrice).end()
        .find("a").attr("data-href","indexPage_textbook.html?"+encodeObj({"bookId":id}));
    return $("<div>").append(tableCell).html();
}























