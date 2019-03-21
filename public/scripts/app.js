
function renderTweets(tweets) {
  // loops through tweets
  $('#tweets').empty();
  for (const tweetObj of tweets) {
    const $tweet = createTweetElement(tweetObj);
    $('#tweets').prepend(createTweetElement(tweetObj));
  }
};

function createTweetElement(tweet) {
  let $tweet = $('<article>').addClass('tweet');

  let $header = $('<header>')

  let $leftDiv = $('<div>').addClass('leftDiv')

  $('<img>')
    .attr('src', tweet.user.avatars.small)
    .appendTo($leftDiv);

  $('<h2>')
    .text(tweet.user.name)
    .appendTo($leftDiv);

  $leftDiv.appendTo($header)

  let $rightDiv = $('<div>').addClass('rightDiv')

  $('<p>')
    .text(tweet.user.handle)
    .appendTo($rightDiv);

  $rightDiv.appendTo($header)

  $header.appendTo($tweet);

  let $body = $('<div>').addClass('body')

  $('<p>')
    .text(tweet.content.text)
    .appendTo($body);

  $body.appendTo($tweet);

  let $footer = $('<footer>')

  $('<div>')
    .addClass("postDate")
    .text(tweet.created_at)
    .appendTo($footer);

  let $icons = $('<div>').addClass("icons")

  $('<i>')
    .addClass("far fa-flag")
    .attr('id', "flag")
    .appendTo($icons)

  $('<i>')
    .addClass("fas fa-retweet")
    .attr('id', "retweet")
    .appendTo($icons)

  $('<i>')
    .addClass("far fa-heart")
    .attr('id', "heart")
    .appendTo($icons)

  $($icons).appendTo($footer)
  $($footer).appendTo($tweet)

  return $tweet;
}

const request = (options, cb) => {
  $.ajax(options)

    .done(response => {

      cb(response);
    })

    .fail(error => {
      console.log(`Error: ${error}`);
    })

    .always(() => {
      console.log('Request completed');
    });
};

const loadTweets = () => {
  $(document).ready(function() {
    const url = '/tweets/';

    const requestOptions = {
      method: 'GET',
      url: url,
      dataType: 'json',
    };

    request(requestOptions, function(response) {
    renderTweets(response);
    });
  });
};

loadTweets();

//Need to make it clear the form on refresh
$(document).ready(function(){
  $("#newTweet").on("submit", function() {
    event.preventDefault();
    console.log('Button clicked, performing ajax call...');

    const data = $(this).serialize()

    const requestOptions = {
      type: "POST",
      url: "/tweets/",
      data,
    }

    request(requestOptions, function(response) {
      loadTweets();
    })
  })
})

// Also need to add to this that the textarea is enabled
$(document).ready(function(){
  $( "#compose" ).on("click", function() {
    $( ".new-tweet" ).toggle("slow");
    $(this).toggleClass('highlight')
  });
});