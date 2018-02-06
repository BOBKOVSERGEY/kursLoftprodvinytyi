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
    var flag = true;

    $('.line__trigger').on('click', function (e) {
      e.preventDefault();
      var block = $('.line__block'),
          duration = 2000,
          animationState = $.Deferred();

      if (flag) {
        flag = false;
        animateIt();
        animationState.done(function () {
          flag = true;
        });
      }

      function animateIt() {
        if (!block.hasClass('active')) {
          block.addClass('active');
          block.animate({
            left : "500px"
            // по завершению анимации есть callback
          }, duration, function () {
            animationState.resolve();
          });
        } else {
          block.removeClass('active');
          block.animate({
            left : "0px"
          }, duration, function () {
            animationState.resolve();
          });
        }
      }
    });
  }());

  (function () {
    var items = $('.blocks__item'),
        startColor = 0x16a085,
        counter = 0,
        timer;

    function each() {
      var item = items.eq(counter).find('.blocks__link');

      item.css({
        'background-color' : 'red',
        'border-radius': '50%'
      });
      counter++;
      if (counter == items.length) {
        // если у нас уже есть timeout то очистим его
        if (typeof timer != 'undefined') {
          clearTimeout(timer);
        }

        // то обнулим счетчик
        counter = 0;
      }
      // выход из рекурсии
      /*if (counter <= items.length) {
        timer = setTimeout(each, 100);
      }*/
      //console.log(counter);
      timer = setTimeout(each, 100);
    }
    each();
  }());

  (function () {
    $('.start').on('click', function (e) {
      e.preventDefault();

      var block = $('.title'),
          string = block.text().trim(),
          stringArray = string.split(''),
          word = '';

      //console.log(string);
      //console.log(stringArray);

      stringArray.forEach(function (letter) {
        if (letter != ' ') {
          var letterHtml = '<span class="letter-span">' + letter + '</span>';
        } else {
          var letterHtml = '<span class="letter-span_space">' + letter + '</span>';
        }

        word += letterHtml;
      });

      block.html(word);

      var letter = block.find('.letter-span'),
          counter = 0,
          timer,
          duration = 3000 / stringArray.length;

      function showLetters() {
        var currenLetter = letter.eq(counter);

        currenLetter.addClass('active');

        counter++;

        if (typeof timer != 'undefined') {
          clearTimeout(timer);
        }
        timer = setTimeout(showLetters, duration);
      }

      showLetters();

    })
  }());

});