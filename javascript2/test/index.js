
// https://wallpaperscraft.ru/image/kosmos_nebo_3d_art_97531_1920x1200.jpg

/*var image = new Image();
document.body.appendChild(image);
image.src = 'https://wallpaperscraft.ru/image/kosmos_nebo_3d_art_97531_1920x1200.jpg';
image.onload = function () {
  console.log('Картинка загружена');
};*/

function loadImage(url) {
  return new Promise(function (resolve, reject) { // промисы это способ организации кода
    var image = new Image();
    document.body.appendChild(image);
    image.src = url;
    image.onload = function () {
      resolve(); // сообщает о том, что операция выполнена успешно
    };
    image.onerror = function () {
      reject();
    }
  });
}

var oneUrl = 'https://wallpaperscraft.ru/image/kosmos_nebo_3d_art_97531_1920x1200.jpg';
var twoUrl = 'https://oformi.net/uploads/gallery/main/245/wallp_oformi_net11.jpg';
var threeUrl = 'https://i.ytimg.com/vi/GTSK1PdcNk0/maxresdefault.jpg';

// если функция возвращает промис, то мы можем использовать then
loadImage(oneUrl).then(
  function () {
    console.log('Ok1');
    loadImage(twoUrl);
  }
).then(function () {
  console.log('Ok2');
  loadImage(threeUrl);
}
).then(function () {
  console.log('Ok3');

});
















/*var promise = new Promise(function (resolve, reject) { // промисы это способ организации кода
  var image = new Image();
  document.body.appendChild(image);
  image.src = 'https://wallpaperscraft.ru/image/kosmos_nebo_3d_art_97531_1920x1200.jpg';
  image.onload = function () {
    resolve(); // сообщает о том, что операция выполнена успешно
  };
  image.onerror = function () {
    reject();
  }
});

promise.then(
  function (value) {
    console.log('good');
  },
  function () {
    console.log('error');
  }
);*/
// waiting - ошидание
// fulfilled - выполнено успешно
// rejected - выполнено с ошибкой