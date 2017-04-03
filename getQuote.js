$(document).ready(function() {

  var quote;
  var author;

  function getQuote() {
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        $("#quote").text(quote);
        if (response.quoteAuthor) {
          $("#author").text("- " + author);
        } else {
          $("#author").text("- unknown");
        }
      }
    });
	console.log(quote);
  }

  getQuote();

  $('#quoteButton').on('click', function() {
    getQuote();
  });

  $('#tweetButton').on('click', function() {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote+"- "+author));
  });

});