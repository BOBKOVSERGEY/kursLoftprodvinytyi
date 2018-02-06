// делаем модуль
var animateCss = (function () {

  var checkDistance = function (scrollTop, elem) {
    var offset = elem.offset().top, // возвращает положение элементов от верхней границы окна
        windowHeight = Math.ceil($(window).height() / 1),
        topBorder = offset - scrollTop - windowHeight, // верхняя граница
        bottomEdge = elem.outerHeight(true) + offset,// нижняя граница
        bottomBorder = scrollTop + windowHeight - bottomEdge; // окончательная нижняя граница
    return topBorder <= 0 && bottomBorder <= 0;
  };

  // объект где мы будем собирать анимации
  var animationsAction = {
    toTop: function () {
      $(this).addClass('toTop');
    },
    toRight: function () {
      $(this).addClass('toRight');
    },
    width: function () {
      console.log('with');
    }
  };

  return {
    init: function () {
      $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        $('.animate').each(function () {
          var $this = $(this); // сохраним текушщий элемент

          if (checkDistance(scrollTop, $this)){
            var animationType = $this.data('animate');

            animationsAction[animationType].call($this); // нужно передать контекст
          }

        })


      }); // ->scroll_end
    }
  }
}());

// запускаем
animateCss.init();