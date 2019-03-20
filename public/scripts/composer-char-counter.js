// This is how I attempted it. It doesn't work well.
// let counter = 0;

// function countDown(event) {
//   counter += 1;
//   return counter
// }

// $(document).ready(function(){
//   const frmNode = $('textarea');
//     frmNode.on("keyup", function(event) {
//       // event.preventDefault();
//       // console.log(event.key);
//     $('.counter').text(140 - countDown(event))
//     countDown(event);
//       // $(this).find('.counter')
//     });
// })

$(document).ready(function(){
  $(".new-tweet textarea").on("input", function() {
    const maxChar = 140
    const currentChar = this.value.length;
    const count = maxChar- currentChar;
    $(".counter").text(count);

    if(count < 0) {
      $(".counter").css("color", "red");
      $("#submit").prop('disabled', true)
      alert("your tweet is too long")

    } else {
      $(".counter").css("color", "black")
      $("#submit").prop('disabled', false)
    }
  })
})
