
function renderTweets(tweets) {
  // loops through tweets
  for (const tweetObj of tweets) {
    const $tweet = createTweetElement(tweetObj);
    $('#tweets').append(createTweetElement(tweetObj));
  }
};

function createTweetElement(tweet) {
  let $tweet = $('<article>').addClass('tweet');

  let $header = $('<header>')


  $('<img>')
    .attr('src', tweet.user.avatars.small)
    .appendTo($header);

  $('<h2>')
    .text(tweet.user.name)
    .appendTo($header);

  $('<p>')
    .text(tweet.user.handle)
    .appendTo($header);

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
      console.log(response)
      loadTweets();
    })
  })
})
