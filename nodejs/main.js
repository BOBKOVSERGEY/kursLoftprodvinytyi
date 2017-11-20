// подключение файлов ./ - текущая директория
//var name = require('./strings.js');

// подключает модуль
var fs = require('fs');

// прочитать файл
var content =fs.readFileSync('./test.txt', {"encoding":'utf-8'}); /*{"encoding":'utf-8'} преобразуй данный в тектовый формат*/
var newContent = 'new content';

// записываем в файл
fs.writeFileSync('./test.txt', newContent);
console.log(content);

// прочитать директорию
//var dir = fs.readdirSync('..');

// пробежимя форычем по элементам и выведем в консол лог
//dir.forEach(function (item) {

  // посмотреть статистику по файлам
  //var stats = fs.statSync('../' + item);
  //console.log(item, stats['size']);
//})