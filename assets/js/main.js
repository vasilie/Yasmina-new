$(document).ready(function(){
	var menu_icon = $(".menu__icon"); 
	menu_icon.click(function(){
		$(".nav").toggleClass("opened");
		menu_icon.toggleClass("opened");
	});
	if ($(window).outerWidth() < 1024) {

	   $("#video-section__wrap").addClass("owl-carousel").owlCarousel({
		  	// navigation : true, // Show next and prev buttons
		  	slideSpeed : 300,
		  	paginationSpeed : 400,
		  	singleItem:true
	   });
	   $("#gallery").addClass("owl-carousel").owlCarousel({
		  	// navigation : true, // Show next and prev buttons
		  	slideSpeed : 300,
		  	paginationSpeed : 400,
		  	singleItem:true
	   });
	   $("#masha-block-slider").addClass("owl-carousel").owlCarousel({
		  	// navigation : true, // Show next and prev buttons
		  	slideSpeed : 300,
		  	paginationSpeed : 400,
		  	singleItem:true
	   });
	}
});