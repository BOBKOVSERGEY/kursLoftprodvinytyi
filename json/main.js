
var jsonData = {
  "name" : "Zar",
  "lastname" : "Zakharov",
  "age" : 28,
  "maried" : true
}

console.log(jsonData);
console.log(JSON.stringify(jsonData)); // преобразум в строку

var result = JSON.stringify(jsonData, ['name', 'age']);


var el = document.querySelector('.section').innerHTML = result;

var resultobj = JSON.parse(result, function (key, val) {
  console.log(key, val);
}); // возвращает опять объект

