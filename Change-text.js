jQuery('.wpp-views').each(function(){
var viewsNor = jQuery(this).text();
var changeNor = viewsNor.replace(/[a-z]+/, "New Text");
jQuery(this).text(changeNor)
});
