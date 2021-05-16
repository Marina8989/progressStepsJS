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
    progressStep();
})

prev.addEventListener('click', () => {
    activeCircle--;
    if(activeCircle < 1) {
       activeCircle = 1;
    }
    console.log(activeCircle);
    progressStep();
})

function progressStep() {
     //change the circle border
     //change the progress bar
     //change the buttons disabled state
     if(activeCircle === circles.length) {
        next.classList.add('disabled');
        prev.classList.remove('disabled');
     }else if(activeCircle == 1) {
       prev.classList.add('disabled');
       next.classList.remove('disabled');
     }else {
         prev.classList.remove('disabled');
         next.classList.remove('disabled');
     }
}