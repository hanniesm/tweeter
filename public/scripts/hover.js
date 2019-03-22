//this is a hover function that applies to each tweet, making the opacity increase when mouse is over and reduces opacity when mouse leaves
$(document).ready(function(){
  $( '.tweets' ).on( 'mouseenter', '.tweet', function(event) {
    $(this).css({'border-color': 'black', opacity: '1'});
    $(this).find('.icons').css({opacity: '1'});
  });

  $( '.tweets' ).on( 'mouseleave', '.tweet', function(event) {
      $(this).css({'border-color': 'darkgrey', opacity: '0.8'});
      $(this).find('.icons').css({opacity: '0'});
  });
});


