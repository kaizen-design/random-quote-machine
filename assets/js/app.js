"use strict";

var QUOTES= '';

$('document').ready(function () {
  //  Fetch quotes
  getQuotes()
    .done(function (data) {
      QUOTES = data;
    })
    .fail(function (error) {
      console.error('AJAX request error: ' + error);
    })
    .then(function () {
      getQuote();
    });
  //  Get a new quote on click
  $('#new-quote').on('click', getQuote);
});

function getQuotes() {
  return $.ajax({
    dataType: 'json',
    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
  });
}

function getRandomQuote(data) {
  return data.quotes[Math.floor(Math.random() * data.quotes.length)];
}

function getQuote() {
  var QUOTE = getRandomQuote(QUOTES);
  $('#text').text(QUOTE.quote);
  $('#author').html(QUOTE.author);
  $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + QUOTE.quote)
}