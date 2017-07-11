/*console.time('defer');
function defer() {
  var d = $.Deferred(); // state = waiting соостояние ожидания
  setTimeout(function () {
    d.resolve();
    console.timeEnd('defer');
  }, 3000);
  return d.promise();
}

defer().then(function (success) {
  console.log(success);
})*/

/*=========================================*/

var c1 = $.Deferred(),
    c2 = $.Deferred();

$('#d1').slideUp(2000, c1.resolve);
$('#d2').fadeOut(3000, c2.resolve);


c1.done(function () {
  console.log('c1 finish')
});

c2.done(function () {
  console.log('c2 finish')
});

$.when(c1,c2).done(function () {
  console.log('Now is both finish');
  $('.text').slideDown();
});