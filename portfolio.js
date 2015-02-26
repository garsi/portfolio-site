$(document).ready(function() {


//Overlay projects' images on hover with opacity and link
	$('#projects article').hover(
		function() {
			$(this).find('.caption').fadeIn(250);
		},
		function() {
			$(this).find('.caption').fadeOut(250);
		}
	);

//Create smooth scrolling when user uses an internal link




//Start hatch animation in Services section when user clicks or scrolls to this section
//Temporary hover hatch on services icons as well
	$('#hatch').on('click', function () {
		$('#services i').addClass('hatch');
	});
	
	//SCROLLING? 
	//$('html, body').animate({
	//scrollTop: $("#servicesjump").offset().top}, 2000);
	
	$('#services i').hover(function () {
		$(this).toggleClass('hatch');
	});


});