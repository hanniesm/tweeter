const request = (options, cb) => {

  $.ajax(options)
    .done(response => {
      cb(response);
    })
    .fail(error => {
      console.log(`Error: ${error}`)
      console.error(error)
    })
    .always(() => {
      console.log("Request completed")
    })
}

$(document).ready(function(){
  $("#newTweet").on("submit", function() {
    event.preventDefault();
    console.log('Button clicked, performing ajax call...');
    const requestOptions = {
      type: "POST",
      url: "/tweets/",
      data: $(this).serialize(),
    }
    request(requestOptions, function(response) {
      console.log(response)
    })
  })
})


