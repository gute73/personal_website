$(document).ready( function() {
	$('.foliotxt').hide();
  $('.folioimg-dark').hide();

	$('#portfolio').on('mouseenter', '.portfoliobox', function() {
    $(this).find('.folioimg').hide();
		$(this).find('.foliotxt').show();
    $(this).find('.folioimg-dark').show();
	});

	$('#portfolio').on('mouseleave', '.portfoliobox', function() {
    $(this).find('.foliotxt').hide();
    $(this).find('.folioimg-dark').hide();
    $(this).find('.folioimg').show();
	});

});