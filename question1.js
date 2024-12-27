var interval = null;
var images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg"]
var i = 0;
function hover() {
    interval = setInterval(function () {
        document.getElementById("slideshow").src = images[i]
        i++;
        if (i > 3) {
            i = 0;
        }
    }
        , 1000)
}

function leave() {
    clearInterval(interval);
    interval = null;
    document.getElementById("slideshow").src = "images/img1.jpg";
}







