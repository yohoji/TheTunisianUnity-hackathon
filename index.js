// switching between happy and sad kids
var button = document.querySelectorAll(".calltoa");

function happyKids() {
    var kid1 = document.querySelector("#kid1");
    var kid2 = document.querySelector("#kid2");
    kid1.setAttribute("src", "images/boy2.png");
    kid2.setAttribute("src", "images/girlh.png");
}

function sadKids() {
    var kid1 = document.querySelector("#kid1");
    var kid2 = document.querySelector("#kid2");
    kid1.setAttribute("src", "images/boy2_sad.png");
    kid2.setAttribute("src", "images/girl_sad1.png");
}

button.forEach((button) => {
    button.addEventListener("mouseenter", function(e) {
        happyKids()
    });
    
    button.addEventListener("mouseout", function(e) {
        sadKids()
    });
})

// articles toggler

var articleb1 = document.querySelector("#atoggler1");
var articleb2 = document.querySelector("#atoggler2");

articleb1.addEventListener("click", function(e) {
    console.log(e);
    var overlay = document.querySelector(".overlay");
    overlay.classList.add("active");
})

articleb2.addEventListener("click", function(e) {
    console.log(e);
    var overlay1 = document.querySelector(".overlay2");
    overlay1.classList.add("active");
})

var cross = document.querySelector(".left .cross");
var cross1 = document.querySelector(".right .cross");

cross.addEventListener("click", function(e) {
    var overlay1 = document.querySelector(".overlay");
    overlay1.classList.remove("active");
})

cross1.addEventListener("click", function(e) {
    var overlay1 = document.querySelector(".overlay2");
    overlay1.classList.remove("active");
})




