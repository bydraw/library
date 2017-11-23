$(document).ready(function () {
  // menu toggle
  $('.booksmenu').click(function () {
    $('.booksmenu_open').animate({
      'height': '766px'
    }, 300)
  })
  $('.booksmenu_open_toggle').click(function (event) {
    $('.booksmenu_open').animate({
      'height': '0'
    }, 300);
    event.stopPropagation();
  })
  // menu into
  $('.booksmenu_open_item').click(function(){
    var cate = $(this).attr('class')[0];
    window.open('category.html#' + cate,'_self');
    window.location.reload();
  })
})