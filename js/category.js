$(document).ready(function(){
  // active cate_item and text
  var cate = window.location.href.split('#')[1];
  var cate_item = $('.'+cate);
  cate_item.addClass('active');
  var activeCate = cate_item.text().substr(2);
  $('.pos_cate').html(activeCate);
  $('.pag_item').on('click',function(){
    $('.pag_item').removeClass('active');
    $(this).addClass('active');
  })
})
