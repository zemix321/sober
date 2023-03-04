$(".my-btn").click(function() {
  $("#rec557612283").fadeIn();
  $("video").get(0).play(); // начинаем воспроизведение видео при открытии попапа
});

$(".close-btn").click(function() {
  var video = $("video");
  var rec = $("#rec557612283");
  rec.fadeOut(function() {
      video.fadeIn();
      video.get(0).pause(); // ставим видео на паузу при закрытии попапа
      video.get(0).currentTime = 0; // обнуляем позицию видео
  });
});

$("video").on("ended", function() {
  $("#rec557612283").append('<img id="logo" src="https://static.tildacdn.com/tild3430-6563-4132-b962-623934626530/logo_SOBER_ROAD_CMYK.png" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:50%;max-height:50%;"/>');
  $("video").fadeOut(); // скрываем видео
  var logo = $("#logo");
  logo.delay(2000).animate({ width: '0', height: '0', opacity: 0 }, 1000, function() {
    logo.remove(); // удаляем изображение после окончания анимации
    $(".close-btn").click(); // закрываем попап
  });
});