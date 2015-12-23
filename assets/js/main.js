$(document).ready(function(){
	var menu_icon = $(".menu__icon"); 
	menu_icon.click(function(){
		$(".nav").toggleClass("opened");
		menu_icon.toggleClass("opened");
	});
	if (window.outterWidth < 1024) {
	   $("#carousel__wrap").owlCarousel({
		  	// navigation : true, // Show next and prev buttons
		  	slideSpeed : 300,
		  	paginationSpeed : 400,
		  	singleItem:true
	   });
	   $("#gallery").owlCarousel({
		  	// navigation : true, // Show next and prev buttons
		  	slideSpeed : 300,
		  	paginationSpeed : 400,
		  	singleItem:true
	   });
	   $("#slider").owlCarousel({
		  	// navigation : true, // Show next and prev buttons
		  	slideSpeed : 300,
		  	paginationSpeed : 400,
		  	singleItem:true
	   });
	}
});