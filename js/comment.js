$(document).ready(function () {
  ($('.y_stars').each(function () {
    var s_num = $('.y_stars').attr('class').split('y_stars ')[1];
    $(this).attr('src', 'img/stars_' + s_num + '.png');
  }))
  $('.btns_like').click(function () {
    if ($('.btns_like>img').attr('src') == 'img/zan.png') {
      $('.zan_num').text(parseInt($('.zan_num').text()) + 1)
      $('.btns_like>img').attr('src', 'img/zan_ed.png')
    } else {
      $('.zan_num').text(parseInt($('.zan_num').text()) - 1)
      $('.btns_like>img').attr('src', 'img/zan.png')
    }
  })
  $('.btns_toggle').hover(function () {
    $(this).find('img').attr('src', 'img/comment_ed.png')
  }, function () {
    var comTog = $(this).parents('.comment_item').find('.toggle_comments');
    if (comTog.height() == '0') {
      $(this).find('img').attr('src', 'img/comment.png')
    }
  })
  $('.btns_toggle').click(function () {
    var comTog = $(this).parents('.comment_item').find('.toggle_comments');
    if (comTog.height() == '0') {
      $('.btns_toggle>img').attr('src', 'img/comment.png')
      $('.toggle_comments').height('0')
      comTog.height('auto')
      $(this).find('img').attr('src', 'img/comment_ed.png')
    } else {
      comTog.height('0')
      $(this).find('img').attr('src', 'img/comment.png')
    }
  })

})