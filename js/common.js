// menu toggle
$('.booksmenu').click(function(){
  $('.booksmenu_open').animate({'height':'766px'},300)
})
$('.booksmenu_open_toggle').click(function(event){
  $('.booksmenu_open').animate({'height':'0'},300);
  event.stopPropagation();
})
