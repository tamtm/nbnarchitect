$(document).ready(function() {
	var nav = $('#nav')
	var initNavHeight = nav.height()
	$(document).on('scroll', function(event) {
		if (nav.height() + 'px' == nav.css('min-height')) nav.addClass('hang')
		else nav.removeClass('hang')
		// console.log(nav.height())
		nav.height(initNavHeight - $(document).scrollTop())
	})
})