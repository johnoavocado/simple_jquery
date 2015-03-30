$(document).ready(function(){
	
	
	
	
	// If you declare the variable here, all the functions will be able to use it
	var imageHeight = $(".hover_area").find("div").height(); // To remember what value to go back to
	var croppedSize = 0.5; // The ratio of the image left after it is cropped
	var aniTime 		= 200; // The time of the animation. Make it lower to go faster!
	
	
	
	// When the mouse hovers over a hover_area div element
	$(".hover_area").hover(function(){
			
			// Crop the image
			$(this).find("div").animate(
			{height: imageHeight*croppedSize},{duration: aniTime, queue: false});
			// Animate the text
			$(this).find(".funky_text").animate(
			{top: imageHeight*croppedSize},{duration: aniTime, queue: false});
			
	});
	
	// When the mouse hovers over a hover_area div element
	$(".hover_area").mouseleave(function(){
			
			// Change the height of the div element, i.e. uncrop the image
			$(this).find("div").animate(
			{height: imageHeight},{duration: aniTime, queue: false});
			// Animate the text
			$(this).find(".funky_text").animate(
			{top: -imageHeight*croppedSize},{duration: aniTime, queue: false});
			
	});
	
});

