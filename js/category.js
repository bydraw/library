$(document).ready(function () {
  readCate();
})
// active cate_item and text
function readCate() {
  var cate = window.location.href.split('#')[1];
  if (cate == undefined) {// default the first cate
    var cate_item = $('.booksmenu_open_item:eq(0)')
    var activeCate = cate_item.text().substr(2);
  } else {// get hash from url
    var cate_item = $('.' + cate);
    var activeCate = cate_item.text().substr(2);
  }
  cate_item.addClass('active');
  $('.pos_cate').html(activeCate);
  // pos2:AJAX with cate_item here or at pos1
  // render the cate books list
}