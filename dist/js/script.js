let btn_prev = document.querySelector('.prev');
let btn_next = document.querySelector('.next');

let images = document.querySelectorAll('#gallery .photos img');
let i = 0;

btn_prev.onclick = function() {
    images[i].classList.remove('showed');
    images[i].style.display = 'none';
    i--;
    
    if (i < 0) {
        i = images.length - 1;
    }
    
    images[i].style.display = 'block';
    images[i].classList.add('showed');
}

btn_next.onclick = function() {
    images[i].classList.remove('showed');
    images[i].style.display = 'none';
    i++;
    
    if (i >= images.length) {
        i = 0;
    }
    
    images[i].style.display = 'block';
    images[i].classList.add('showed');
}