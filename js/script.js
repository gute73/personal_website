$(document).ready( function() {
	$('.foliotxt').hide();

	$('#portfolio').on('mouseenter', '.portfoliobox', function() {
		$(this).find('.foliotxt').show();
		$(this).find('.folioimg').hide();
	});

	$('#portfolio').on('mouseleave', '.portfoliobox', function() {
		$(this).find('.foliotxt').hide();
		$(this).find('.folioimg').show();
	});
});