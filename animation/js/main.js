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

	(function () {
		var
			svg = $('#heisenberg'),
			svgPath = svg.find('.group'),
			svgPos = svg.offset().top,
			windowMargin = $(window).height() / 3,
			startAnimate = wScroll - svgPos + windowMargin,
			pixelsElapsed = svgPos - wScroll,
			percentsElapset = Math.ceil(pixelsElapsed / (svgPos - (svgPos - windowMargin)) *100),
			percentsDraw = 1200 / 100 * percentsElapset;

		if (startAnimate > 0) {
			var drawAmount = percentsDraw;

			if (drawAmount > 0) {
        svgPath.css({
          'stroke-dashoffset' : drawAmount
        });
			}

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