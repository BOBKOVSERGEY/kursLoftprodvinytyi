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
})