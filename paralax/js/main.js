$(window).on('mousemove', function (event) {
  var mouseX = event.pageX;
  var mouseY = event.pageY;
  var w = (window.innerWidth / 2) - mouseX;
  var h = (window.innerHeight / 2) - mouseY;
  var layer = $('.parallax').find('.parallax__layer');



  layer.map(function (key, value) {
    var bottomPosition = (window.innerHeight / 2) * (key / 100);
    var widthPosition = w * (key/100);
    var heightPosition = h * (key/100);
    $(value).css({
      'bottom': '-'+bottomPosition+'px',
      'transform' : 'translate3d('+ widthPosition +'px, '+ heightPosition +'px, 0)',
      //'transition' : '0.5'
    })
  });

})