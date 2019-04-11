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

  $(document).on('click touchstart', '.navbox', function() {
    var b_color = $(this).css('background-color');
    if (b_color == 'rgb(12, 81, 33)') {
      $(this).css('background-color', 'transparent');
      $(this).children('div.bar-two').css('width', '70px');
      $(this).children('div.bar-three').css('width', '100px');
    } else {
      $(this).css('background-color', 'rgb(12, 81, 33)');
      $(this).children('div').css('width', '120px');
    }
    $('.navbar').toggle();
    $('#namebox').toggle();
  });

});