$(function () {
  // самовызывающая конструкция
  (function () {
    var nav = $('.nav');
    $('.nav__item-link, .dropdown').on({
      // при наведении
      mouseenter : function (e) {
        //e.preventDefault();
        nav.addClass('active');
      },
      // когда убираем курсор
      mouseleave : function () {
        nav.removeClass('active');
      }
    })
  }());
  // анимация
  (function () {
    $('.line__trigger').on('click', function (e) {
      e.preventDefault();
      var block = $('.line__block'),
          duration = 2000;

      block.animate({
        left : "500px"
      }, duration);
    });
  }());

});