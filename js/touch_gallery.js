var startX, movingX;
$(document).ready(function () {
  var newbooks_num = $('.newbooks .recommend_books_item').length; // 新书推荐数量
  var recbooks_num = $('.readerbooks .recommend_books_item').length; // 读者推荐数量
  if ($(window).width() < 768) { // 移动端调整item尺寸
    console.log('mobile')
    var screenW = $('.recommend_books').width();
    $('.recommend_books_item').width(44 / 100 * screenW + 'px');
    $('.recommend_books_item:first-child').css('marginLeft', screenW * 4 / 100);
    $('.recommend_books_item').css('marginRight', screenW * 4 / 100);
    var finalW = parseInt($('.recommend_books_item').width()) + parseInt($('.recommend_books_item').css(
      'marginRight')); // 最终尺寸
    var newbooks_totalW = (newbooks_num - 2) * finalW + parseInt($('.recommend_books_item').css(
      'marginLeft')); // gallery最终尺寸
    var newbooks_totalW = (newbooks_num - 2) * finalW + parseInt($('.recommend_books_item').css(
      'marginLeft'));; // gallery最终尺寸
  }
  var temLeft;
  var new_gallery = document.querySelector('.books_gallery.newbooks');
  var reader_gallery = document.querySelector('.books_gallery.readerbooks');
  var gallerys = [new_gallery, reader_gallery];
  for (var i = 0; i < 2; i++) {
    gallerys[i].addEventListener('touchstart', function (event) {
      startT(event, $(this)); // 获取触摸起点
    })
    gallerys[i].addEventListener('touchmove', function (event) {
      moveingT(event, $(this)); // 获取滑动距离
    })
    gallerys[i].addEventListener('touchend', function (event, newORreader) {
      checkLeft(event, $(this), newbooks_totalW, ); // 松开触摸
    })
  }

  function startT(event, ele) {
    temLeft = parseInt(ele.css('left'));
    var event = event || window.event;
    startX = event.targetTouches[0].pageX;
  }

  function moveingT(event, ele) {
    var event = event || window.event;
    movingX = event.targetTouches[0].pageX;
    ele.css('left', temLeft + (movingX - startX) + 'px')
  }

  function checkLeft(event, ele, newORreader) {
    var event = event || window.event;
    if (movingX > startX && parseInt(ele.css('left')) >= 0) { // 向左偏移后超出左边界
      ele.animate({
        'left': '0px'
      }, 200)
    }
    if (parseInt(ele.css('left')) < -newORreader) { // 向右偏移后超出右边界
      ele.animate({
        'left': -newORreader + 'px'
      }, 200)
    }
  }
})