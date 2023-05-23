document.querySelector('#nav_btn_academic').onclick = function () {
    slide_to_left();
};
document.querySelector('#nav_btn_personal').onclick = function () {
    slide_to_right();
};

document.onkeydown = function (event) {
    e = event || window.event;
    if (e.keyCode == '37') { // left arrow
        slide_to_left();
    } else if (e.keyCode == '39') { // right arrow
        slide_to_right();
    }
}

function slide_to_left() {
    document.querySelector('#content .slide-container').style.left = 0;
}

function slide_to_right() {
    document.querySelector('#content .slide-container').style.left = '-100%';
}