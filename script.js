// Grab the input

document.querySelector(".js-go").addEventListener('click', function() {

    var input = document.querySelector("input").value;
    pushToDOM(input);

});

document.querySelector(".js-userinput").addEventListener('keyup', function(e) {

    var input = document.querySelector("input").value;

    // if the key "enter" is pressed...
    if(e.which == 13) {
    pushToDOM(input);
    }

});





//Getting input form API

var url = "https://api.giphy.com/v1/gifs/search?q=sri+lanka&api_key=ULQF8JPwR4gD5R3LXPi3ehqdkAG5wkfE";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', function(e) {

    var data = e.target.response;;
    pushToDOM(data);
})


//Showing GIFs

function pushToDOM(input) {

    var response = JSON.parse(input);

    var imageUrls = response.data;
    var container = document.querySelector(".js-container");

    imageUrls.forEach(function(image) {
        var src = image.images.fixed_height.url;

        container.innerHTML = container.innerHTML + "<img src = \" " + src + " \ class = \"container-image\"/>";
    });

}