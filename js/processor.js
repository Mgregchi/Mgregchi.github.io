// pure javascript
// loading json file
/*
let object;
let httpRequest = new XMLHttpRequest(); // asynchronous request
httpRequest.open("GET", "storage/tags.json", true);
httpRequest.send();
httpRequest.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
      	// when the request has completed
        object = JSON.parse(this.response);
        alert(object.nav-links)
    }
});
*/

const cookieBtn = document.getElementById("cookie-btn");
cookieBtn.onclick= classToggle;
const elem = document.getElementById('cookie');
function classToggle() {
    // remove th hide class when the close button is clicked
    //then use replace
    if (elem.classList.contains("show" || 'hide')) {
        elem.classList.remove("show");
    } else if (elem.classList.contains("hide")) {
        elem.classList.remove("hide");
    } else {
        elem.classList.add("show");
    }
    //alert(elem.classList);

    //elem.classList.remove();
    //elem.classList.replace("old","show");
}

/*
// DATA FROM JSON
//$.getJSON("storage/tags.json")
$.getJSON( "storage/tags.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list text-white",
    html: items.join( "" )
  }).appendTo($('#more'));
});  */