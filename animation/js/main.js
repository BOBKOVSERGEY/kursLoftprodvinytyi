$(window).scroll(function () {
	var wScroll = $(window).scrollTop();
	
	(function () {
		var
			bg = $('.hero__bg'),
			sectionText = $('.hero__section-img'),
			user = $('.hero__user-block');

    slideIt(bg, -wScroll / 45);
    slideIt(sectionText, wScroll / 1);
    slideIt(user, wScroll / 5);

		function slideIt(block, strafeAmount) {
			var strafe = - strafeAmount + '%',
      		transformString = 'translate3d(0, ' + strafe + ',0)';
      block.css({
        'transform' : transformString
      });
    }

  }());
}); //-> scroll_end

$(document).ready(function () {
  setBlur();
}); // -> ready_end;

$(window).resize(function () {
  setBlur();
});//-> resize_end

function setBlur() {
  var
    imgWidth = $('.blur__background').width(),
    blur = $('.blur__form'),
    blurSection = $('.blur'),
    posTop = blurSection.offset().top - blur.offset().top,
    posLeft = blurSection.offset().left - blur.offset().left;

  blur.css({
    'background-size' : imgWidth + 'px' + ' ' + 'auto',
    'background-position' : posLeft + 'px' + ' ' + posTop + 'px'
  })
}