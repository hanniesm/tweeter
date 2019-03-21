$(document).ready(function(){
  $(".new-tweet textarea").on("input", function() {
    const maxChar = 140;
    const currentChar = this.value.length;
    const count = maxChar- currentChar;
    $(".counter").text(count);

    if(count < 0) {
      $(".counter").css("color", "red");
      $("#submit").prop('disabled', true);
      $('#validationErrors').text("Your tweet is too long");

    } else if (count === 140) {
      $(".counter").css("color", "black");
      $("#submit").prop('disabled', true);
      $('#validationErrors').text("You need to say something");
    }
    else {
      $(".counter").css("color", "black");
      $("#submit").prop('disabled', false);
      $('#validationErrors').text("");
    }
  })
})


