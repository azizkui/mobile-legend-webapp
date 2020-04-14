// navbar hidden start
let prevScrollpos = window.pageYOffset;
var currentState = {
    name: "Nana",
    role: "Support / Mage",
    image: "assets/images/hero/tank/uranus/logo-uranus.jpg"
};

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}
// navbar hidden end

function openRoles(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function onCurrentStateChange(i) {
    // currentState = hero[id];
    // let image_hero = new Image();
    // image_hero.src = currentState.image;

    document.getElementById('hero-name').innerHTML = currentState.name;
    document.getElementById('image-hero').src = currentState.image;
}