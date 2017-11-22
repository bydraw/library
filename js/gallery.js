$(document).ready(function () {
  // width = 235px
  var lastIndex = 5;
  var scrolling = false;
  var newbooks_num = $('.container.newbooks').find('.recommend_books_item').length;
  var readers_num = $('.container.newbooks').find('.recommend_books_item').length;
  $('.gallery_next').click(function () {
    if (scrolling) return;
    if (lastIndex == newbooks_num) {
      return;
    }
    if(lastIndex == 7){
      lastIndex = 0;
    }
    lastIndex++;
    scrolling = true;
    setTimeout(function () {
      scrolling = false
    }, 300)
    changeLeft(1)
  })

  $('.gallery_prev').click(function () {
    if (scrolling) return;
    if (lastIndex == 5) {
      return;
    }
    if(lastIndex == 1){
      lastIndex = newbooks_num + 1;
    }
    lastIndex--;
    scrolling = true;
    setTimeout(function () {
      scrolling = false
    }, 300)
    changeLeft(0)
  })

  function changeLeft(joj) {
    if (joj == 1) {
      $('.books_gallery').animate({
        'left': parseInt($('.books_gallery').css('left')) - 235 + 'px'
      }, 300);
    }
    else{
      $('.books_gallery').animate({
        'left': parseInt($('.books_gallery').css('left')) + 235 + 'px'
      }, 300);
    }
  }
})