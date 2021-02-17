function load(){

screenFocus();

}

function screenFocus(){
    const screens = document.querySelectorAll('.screen');

    screens[0].classList.add('up');
}

document.addEventListener("DOMContentLoaded", load);