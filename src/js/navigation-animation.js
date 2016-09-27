$(function () {
	$(".nav-entry a").click(function(e) {
		e.preventDefault();
		var $navLink = $($(this).attr("href"));
		var navOffset = $navLink.offset().top;
	
		$navLink.velocity("scroll")
	})
})