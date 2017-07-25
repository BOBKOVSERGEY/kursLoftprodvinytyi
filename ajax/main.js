
$('button').on('click', function (event) {
  event.preventDefault();
  //console.log($('form[name="loftschool"]').serialize());

  var data = new FormData(document.forms.loftschool);

  $.ajax({
    xhr: function() { // Функция для создания объекта XMLHttpRequest. Если доступно, то создается ActiveXObject (IE), в ином случае XMLHttpRequest. Можно создать свою собственную усовершенствованную реализацию объекта XMLHttpRequest.
      var xhr = $.ajaxSettings.xhr();
      xhr.upload.onprogress = function(e) {
        var per = Math.floor(e.loaded / e.total *100);
        $('.progress').show();
        $('.progress-bar').css('width', per+'%')
        $('#progress').text(per + '%');
      };
      // xhr.upload.onload = function() {
      //   console.log( 'Данные полностью загружены на сервер!' );
      // }
      // xhr.upload.onerror = function() {
      //   console.log( 'Произошла ошибка при загрузке данных на сервер!' );
      // }
      return xhr;
    },
    url : 'send.php',
    type: 'POST',
    data: data,
    processData: false,
    contentType: false
  }).done(function (data) {
    console.log('Отправил');
  })
});