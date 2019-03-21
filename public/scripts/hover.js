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

// $(document).ready(function(){
//   $("#compose").hover(function(){
//     $(this).css({"background-color": "#B6E9F0"});
//     }, function(){
//     $(this).css({"background-color": "#F9FEFE"});
//   })
// });
// Target icons. JQuery method to go from parent to child. Look for find.

