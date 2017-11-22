$('.intro_item').click(function () {
  $('.intro_item').removeClass('active');
  $(this).addClass('active');
  $('.book_intro_content').hide();
  $('.book_intro_content:eq(' + $(this).index() + ')').show();
})
$('.top_item').click(function () {
  $('.top_item').removeClass('active');
  $(this).addClass('active');
  $('.book_top_content').hide();
  $('.book_top_content:eq(' + $(this).index() + ')').show();
})
$('.book_detail_like').click(function () {
  if ($('.book_detail_like>img').attr('src') == 'img/like.png') {
    // ajax
    // callback
    $('.book_detail_like>img').attr('src', 'img/liked.png');
    $('.liked_text').text('已收藏');
  } else {
    // ajax
    // callback
    $('.book_detail_like>img').attr('src', 'img/like.png');
    $('.liked_text').text('收藏图书');
  }
})