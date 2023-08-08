//const coords = {
//    x: 0,
//    y: 0
//};
//const circle = document.querySelectorAll(".circle");
//
//circle.forEach(function (circle) {
//    circle.x = 0;
//    circle.y = 0;
//});
//
//window.addEventListener("movemouse", function (e) {
//    coords.x = e.clientX;
//    coords.y = e.clientY;
//
//    circle.forEach(function (circle, index) {
//        circle.style.left = coords.x + "px";
//        circle.style.top = coords.y + "px";
//    });
//
//    console.log(coords);
//});



let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('ative');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};






/*let sec = document.querySelectorAll('section');
let links = document.querySelectorAll('nav ul li a');

window.onscroll = () {
    => {
        sec.forEach(section => {
            let top = window.scrollY;
            let offset = selection.offsetTop;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                links.forEach(Link => {
                    link.classList.remove('active');
                    document.querySelector('nav a[href*=' + id + ']').classList.add('active');
                })
            }
        })
    }
}*/


function a() {
    var link = document.getElementById("skill");
    var linkh = document.getElementById("hobby");
    var linkq = document.getElementById("language");
    var tab = document.getElementById("skillt");
    var tabl = document.getElementById("langt");
    var tabh = document.getElementById("hobbyt");
    linkq.classList.remove("activelink");
    linkh.classList.remove("activelink");
    link.classList.add("activelink");
    tabl.classList.remove("activetab");
    tabh.classList.remove("activetab");
    tab.classList.add("activetab");
}

function b() {
    var link = document.getElementById("skill");
    var linkh = document.getElementById("hobby");
    var linkq = document.getElementById("language");
    var tab = document.getElementById("skillt");
    var tabl = document.getElementById("langt");
    var tabh = document.getElementById("hobbyt");
    link.classList.remove("activelink");
    linkh.classList.remove("activelink");
    linkq.classList.add("activelink");
    tab.classList.remove("activetab");
    tabh.classList.remove("activetab");
    tabl.classList.add("activetab");
}

function c() {
    var link = document.getElementById("skill");
    var linkh = document.getElementById("hobby");
    var linkq = document.getElementById("language");
    var tab = document.getElementById("skillt");
    var tabl = document.getElementById("langt");
    var tabh = document.getElementById("hobbyt");
    linkq.classList.remove("activelink");
    link.classList.remove("activelink");
    linkh.classList.add("activelink");
    tab.classList.remove("activetab");
    tabl.classList.remove("activetab");
    tabh.classList.add("activetab");
}
