$(document).ready(function(){

    var quote;
    var author;

    function getQuote() {
        $.ajax({
            url: 'http://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data:{
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            success: function(response) {
                quote = response.quoteText;
                author = response.quoteAuthor;
                $('#quote').text(quote);
                $('#author').text(author);
            }

        });
    }


    $('.getQuote').on('click', function(){
        getQuote();
    });

});