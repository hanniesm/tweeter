$(document).ready(function(){
  const icons = $( ".icons");
  $(".tweet").hover(function(){
    $(this).css({"border-color": "black", opacity: "1"});
    $(this).find( icons).css({opacity: "1"});
    }, function(){
    $(this).css({"border-color": "darkgrey", opacity: "0.8"});
    $(this).find( icons).css({opacity: "0"});
  })
});
