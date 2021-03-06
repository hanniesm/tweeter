//This function takes the created tweets and adds them to the tweet section so they will appear on the page
function renderTweets(tweets) {
  $("#tweets").empty();
  for (const tweetObj of tweets) {
    const $tweet = createTweetElement(tweetObj);
    $("#tweets").prepend($tweet);
  }
};

//this function creates the tweet element in 3 parts, the header, body and footer
function createTweetElement(tweet) {
  const $tweet = $("<article>").addClass("tweet");
  const $header = $("<header>");
  const $leftDiv = $("<div>").addClass("leftDiv");

  $("<img>")
    .attr("src", tweet.user.avatars.small)
    .appendTo($leftDiv);

  $("<h2>")
    .text(tweet.user.name)
    .appendTo($leftDiv);

  $leftDiv.appendTo($header);

  const $rightDiv = $("<div>").addClass("rightDiv");

  $("<p>")
    .text(tweet.user.handle)
    .appendTo($rightDiv);

  $rightDiv.appendTo($header);
  $header.appendTo($tweet);

  const $body = $("<div>").addClass("body");

  $("<p>")
    .text(tweet.content.text)
    .appendTo($body);

  $body.appendTo($tweet);

  const $footer = $("<footer>");

  $("<div>")
    .addClass("postDate")
    .text(moment(tweet.created_at).fromNow())
    .appendTo($footer);

  const $icons = $("<div>").addClass("icons");

  $("<i>")
    .addClass("far fa-flag")
    .attr("id", "flag")
    .appendTo($icons);

  $("<i>")
    .addClass("fas fa-retweet")
    .attr("id", "retweet")
    .appendTo($icons);

  $("<i>")
    .addClass("far fa-heart")
    .attr("id", "heart")
    .appendTo($icons);

  $($icons).appendTo($footer);
  $($footer).appendTo($tweet);

  return $tweet;
};

const request = (options, cb) => {
  $.ajax(options)
    .done(response => {
      cb(response);
    })

    .fail(error => {
      console.log(`Error: ${error}`);
    })

    .always(() => {
      console.log("Request completed");
    })
};

const loadTweets = () => {
  $(document).ready(function() {
    const url = "/tweets/";

    const requestOptions = {
      method: "GET",
      url: url,
      dataType: "json",
    };

    request(requestOptions, function(response) {
    renderTweets(response);
    });
  });
};

loadTweets();

// This posts a new tweet and loads the tweets with the new one.
$(document).ready(function(){
  $("#newTweet").on("submit", function() {
    event.preventDefault();
    console.log("Button clicked, performing ajax call...");

    const data = $(this).serialize();

    const requestOptions = {
      type: "POST",
      url: "/tweets/",
      data,
    };

    request(requestOptions, function(response) {
      loadTweets();
    });
  });
});

// This clears the form after the form is submitted
$(document).ready(function(){
  $( "#newTweet" ).on("submit", function() {
    (this).reset();
  });
});

// Also need to add to this that the textarea is enabled
$(document).ready(function(){
  $( "#compose" ).on("click", function() {
    $( ".new-tweet" ).toggle("slow");
    $(this).toggleClass("highlight");
  });
});