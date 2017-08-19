$(window).scroll(function(){
  // $('.stars').height($('.stars').height()+$(window).scrollTop());
  $('.stars').height($(document).height());
  $('.twinkling').height($(document).height());
  $('.clouds').height($(document).height());
});