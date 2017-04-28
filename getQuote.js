$(document).ready(function() {

var quote;
var quoteone;
var author;


  function getQuote() {
    
    var number = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+number+"&callback=", function(data) {
    console.log(data);
    quoteone = data[0].content;
    quote = quoteone.replace(/[</p>]/g, "")
    author = data[0].title;
      
    $("#quote").html(quote);
    $("#author").html("- "+author);
      
    });
    
  }

  getQuote();

  $('#quoteButton').on('click', function() {
    getQuote();
  });

  $('#tweetButton').on('click', function() {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote+"- "+author));
  });
  
});
