$(document).ready(function () {
  var lastIndex1 = 5;
  var lastIndex2 = 5;
  var scrolling1 = false;
  var scrolling2 = false;
  var newbooks_num = $('.container.newbooks').find('.recommend_books_item').length;
  var readerbooks_num = $('.container.readerbooks').find('.recommend_books_item').length;
  var newbooks_gallery = $('.books_gallery.newbooks');
  var readerbooks_gallery = $('.books_gallery.readerbooks');
  $('.gallery_next.newbooks').click(function () {
    if (scrolling1) return;
    if (lastIndex1 == newbooks_num) {
      return;
    }
    lastIndex1++;
    scrolling1 = true;
    setTimeout(function () {
      scrolling1 = false
    }, 300)
    changeLeft(1)
  })

  $('.gallery_prev.newbooks').click(function () {
    if (scrolling1) return;
    if (lastIndex1 == 5) {
      return;
    }
    lastIndex1--;
    scrolling1 = true;
    setTimeout(function () {
      scrolling1 = false
    }, 300)
    changeLeft(0)
  })

  function changeLeft(joj) {
    if (joj == 1) {
      newbooks_gallery.animate({
        'left': parseInt(newbooks_gallery.css('left')) - 235 + 'px'
      }, 300);
    } else {
      newbooks_gallery.animate({
        'left': parseInt(newbooks_gallery.css('left')) + 235 + 'px'
      }, 300);
    }
  }

  $('.gallery_next.readerbooks').click(function () {
    if (scrolling2) return;
    if (lastIndex2 == readerbooks_num) {
      return;
    }
    lastIndex2++;
    scrolling2 = true;
    setTimeout(function () {
      scrolling2 = false
    }, 300)
    changeLeft2(1)
  })

  $('.gallery_prev.readerbooks').click(function () {
    if (scrolling2) return;
    if (lastIndex2 == 5) {
      return;
    }
    lastIndex2--;
    scrolling2 = true;
    setTimeout(function () {
      scrolling2 = false
    }, 300)
    changeLeft2(0)
  })
  
  function changeLeft2(joj) {
    if (joj == 1) {
      readerbooks_gallery.animate({
        'left': parseInt(readerbooks_gallery.css('left')) - 235 + 'px'
      }, 300);
    } else {
      readerbooks_gallery.animate({
        'left': parseInt(readerbooks_gallery.css('left')) + 235 + 'px'
      }, 300);
    }
  }
})