// Definition of the animation function

// Note: We used the method setTimeout() to define a timer
// which calls a function that must be executed when the timer is triggered 
// in milliseconds.
function animation() {
    // Initialization of variables
    var slide1 = document.getElementById("slide__wrap__1");
    var slide2 = document.getElementById("slide__wrap__2");
    var slide3 = document.getElementById("slide__wrap__3");
    var slide4 = document.getElementById("slide__wrap__4");
    var explanation = document.getElementById("therm__of__contrat");
    var map = document.getElementById("map");

    //Deleting slide1 + Adding slide2 + Cropping the explanation extra margin
    setTimeout(function () {
        slide1.style.display = "none";
        slide2.style.display = "inline-block";
        explanation.style.marginTop = "19.5%";
    }, 2800);
    //Deleting slide2 + Adding slide3 + Cropping the explanation extra margin
    setTimeout(function () {

        slide2.style.display = "none";
        slide3.style.display = "inline-block";
        explanation.style.marginTop = "97px";
    }, 5600);
    //Deleting slide3 + Adding slide4 + Adding Google Map + Deleting explanation
    setTimeout(function () {
        slide3.style.display = "none";
        slide4.style.display = "inline-block";
        map.style.display = "inline-block";
        explanation.style.display = "none";
    }, 9600);
}