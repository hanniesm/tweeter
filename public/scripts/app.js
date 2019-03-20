/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

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

console.log(renderTweets(data))