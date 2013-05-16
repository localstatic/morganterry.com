
$(function() {
	$('#sample-work-slideshow')
		.before('<a href="#" id="sample-work-slideshow-prev" class="slideshow-prev">Prev</a> <a href="#" id="sample-work-slideshow-next" class="slideshow-next">Next</a>')
		.after('<div id="sample-work-slideshow-nav">')
		.cycle({
			fx: "scrollHorz",
			pager: "#sample-work-slideshow-nav",
			next: "#sample-work-slideshow-next",
			prev: "#sample-work-slideshow-prev",
			delay: 5
		});
});
