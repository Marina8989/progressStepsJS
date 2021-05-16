const progressBar = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let activeCircle = 1;

next.addEventListener('click', () => {
    activeCircle++;
    if(activeCircle > circles.length) {
       activeCircle = circles.length;
    }
    console.log(activeCircle);
})

prev.addEventListener('click', () => {
    activeCircle--;
    if(activeCircle < 1) {
       activeCircle = 1;
    }
    console.log(activeCircle);
})