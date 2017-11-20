// паттерн модуль
function Counter() {
  var counter = 0;

  // возвращаем объект с двумя методами
  return {
    // метод
    inc: function () {
      counter++;
    },

    // метод
    get: function () {
      return counter; 
    }
  }
}


var count = Counter();

console.log(count.get());

count.inc();
count.inc();
count.inc();
count.counter = '120';

console.log(count.get());