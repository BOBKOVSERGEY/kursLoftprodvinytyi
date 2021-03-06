// подключаем модуль для работы с файловой системой
var fs = require('fs');

// первыми загружаются встроенные модули
// потом идет папка node_modules

// подключаем модуль express, поднимая тем самым вебсервер
var express = require('express');

// создаем экземпляр вебсервера
var app = express();

// подключем модуль шаблонизатора
var exphbs  = require('express-handlebars');

// подключаем body-parser в программу
var bodyParser = require('body-parser');

// подключаем модуль mongo db и его метод MongoClient, через него мы подключаемся к БД
var MongoClient = require('mongodb').MongoClient;
// подключаемся к БД
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nameDb', { useMongoClient: true });

// описываем модель - это описание данных
var Post = mongoose.model('Post', {
  title: String,
  date: String,
  text: String,

});

// для шаблонов с расширением handlebars использовать модуль exphbs
app.engine('handlebars', exphbs());
// установить движок для шаблонов handlebars
app.set('view engine', 'handlebars');


// use применять чтото ко всем звпросам преобразует тело запроса в json объект
app.use(bodyParser.json());

app.get(['/', '/index.html'], function (req, res) {
  res.render('index', {
    title: 'Сайт портфолио',
    welcomeMessage: 'Приветствие'
  });
});

// карта типов
var mimeMap = {
  '.css': 'text/css',
  '.html': 'text/html'
}

// говрим express где искать файл и callback по завершению
// req - запрос
// res - ответ
// * обрабатывай все маршруты
/*app.get('/*', function (reg, res) {

  // устанавливаем заголовки
  res.setHeader('Content-Type', 'text/html; charset=utf8');

  console.log('получен запрос по адресу', reg.url);

  var fileName = './site/' + reg.url;

  // проверяем существует или нет страница
  if (fs.existsSync(fileName)) {

    var content = fs.readFileSync('./site/' + reg.url, {encoding:'utf8'});

    res.write(content); // записать! то что выведется в браузер, сервер, запиши в эту строку 123
  } else {
    var error = fs.readFileSync('./site/404.html', {encoding:'utf8'});
    res.status(404);
    res.write(error);
  }

  // читаем  файл

  res.end(); // разорви соединение!
});*/

// добавляем новый моршрут для POST запроса
// параметрами добавляем response и request запрос ответ
app.post('/admin/save', function (req, res) {
  console.log('поступил post запрос', req.body);

  // получаем те записи которые у нас есть
  //var content = fs.readFileSync('./posts.txt', {encoding:'utf8'});

  // превращаем текст массива в объект
  //var items = JSON.parse(content);

 // добавляем в этот пустой массив нашу запись
 // items.push(req.body);

  // сохраняем данные  в файл JSON.stringify() - превращаем json объект в текст
  //fs.writeFileSync('./posts.txt', JSON.stringify(items));
  var post = new Post(req.body);
  post.save();

  res.end();
});

app.use(function (req, res) {
  res.render('404');
});


// вызывае метод листен и передаем ему номер порта
app.listen(9999);

// подключение mongo db k nodejs
// Retrieve


// Connect to the db :27017 порт  по котрому запускается mongo db
/*MongoClient.connect("mongodb://localhost:27017/nameDb", function(err, db) {
  if(err) {
    console.log(err);
  } else {
    var blogCollection = db.collection('blog');
    var post = {
      title: 'heading 2 ',
      date: '24.11.2017',
      text: 'Hello, sd 2'
    };
    blogCollection.insertOne(post);
  }


});*/


mongoose.Promise = global.Promise;






