$(document).ready(function() {

    /*$("navbar-header").click(function() {
        ("body").(scrollTop(0))});  
        
	/* Scroll event handler */
    /*$(window).bind('scroll',function(e){
    	parallaxScroll();
    });
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
    var vertcentre = (window.innerHeight)/2;
    var horcentre = (window.innerWidth)/2;
	$('h1').css('left',(horcentre - scrolled*1.2)+'px');
    $('h1').css('top',(vertcentre + scrolled)+'px');
}
