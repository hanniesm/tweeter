// const request = (options, cb) => {

//   $.ajax(options)
//     .done(response => {
//       cb(response);
//     })
//     .fail(error => {
//       console.log(`Error: ${error}`)
//       console.error(error)
//     })
//     .always(() => {
//       console.log("Request completed")
//     })
// }

// $(document).ready(function(){
//   $("#newTweet").on("submit", function() {
//     event.preventDefault();
//     console.log('Button clicked, performing ajax call...');

//     const data = $(this).serialize()


//     const requestOptions = {
//       type: "POST",
//       url: "/tweets/",
//       data,
//     }

//     request(requestOptions, function(response) {
//       console.log(response)
//     })
//   })
// })


// const loadTweets = () => {
//   $(document).ready(function() {
//     const url = '/tweets/';

//     const requestOptions = {
//       method: 'GET',
//       url: url,
//       dataType: 'json',
//     };

//     requestGet(requestOptions, function(response) {
//     renderTweets(response);
//     });
//   });
// };

// loadTweets();