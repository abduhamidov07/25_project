var windowWidth = $(window).width();

$(".page-container").mousemove(function(event) {
  var moveX = (($(window).width() / 2) - event.pageX) * 0.1;
  var moveY = (($(window).height() / 2) - event.pageY) * 0.1;

  $(".page-back").css("margin-left", moveX + "px");
  $(".page-back").css("margin-top", moveY + "px");
});
