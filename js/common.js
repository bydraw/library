$(document).ready(function () {
  // $('.recommend_books_item:eq(+'+($('.recommend_books_item').length-1) +')').addClass('no-margin-right');
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
  $('.booksmenu_open_item').click(function () {
    $('.booksmenu_open_item').removeClass('active');
    $(this).addClass('active');
    var cate = $(this).attr('class')[0];
    window.location.href = "category.html#" + cate;
    readCate();
    // pos1:AJAX with cate here or at pos2
    // render the cate books list
  })
    // pag_num
    $('.pag_item').on('click', function () {
      $('.pag_item').removeClass('active');
      $(this).addClass('active');
    })
})