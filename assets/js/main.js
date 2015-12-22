$(document).ready(function(){
	var menu_icon = $(".menu__icon"); 
	menu_icon.click(function(){
		$(".nav").toggleClass("opened");
		menu_icon.toggleClass("opened");
	});
});