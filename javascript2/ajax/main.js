function loadUrl(url) {
  return new Promise(function (resolve, reject) {
    var  xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function () {
      resolve(xhr.responseText);
    };
    xhr.onerror = function () {
      reject();
    };
  })
}


loadUrl('test.txt').then(function (value) {
  console.log('файл загружен', value);
});










/*var  xhr = new XMLHttpRequest(); // создали объект

// первым параметром указываем метод, вторым - путь к файлу
xhr.open('GET', '../index.html'); // подготавливаем соединение

//xhr.responseType = 'json'; тот ответ который придет от сервера это json

xhr.send(); // отправляем запрос

// xhr.responseText;  в этом свойстве  хронится ответ

 Если обращаемся к json
xhr.onload = function () {
  var result = JSON.parse(xhr.response);
  console.log('Получен ответ', result);
};


// событие когда пришел документ
xhr.onload = function () {
  console.log('Пришел ответ', xhr.responseText);
}

// событие при ошибке
xhr.onerror = function () {

};
 */

