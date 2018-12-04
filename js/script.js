$(document).ready( function() {
	$('.foliotxt').hide();

	$('#portfolio').on('mouseenter', '.portfoliobox', function() {
		$(this).find('.foliotxt').show();
	});

	$('#portfolio').on('mouseleave', '.portfoliobox', function() {
		$(this).find('.foliotxt').hide();
	});

});