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
    if(activeCircle == 2){
        progressBar.style.width = '9%';
        progressBar.classList.add('active');
        circles[1].classList.add('active');
    }else if(activeCircle == 3){
        progressBar.style.width = '18%';
        circles[2].classList.add('active');
    }else if(activeCircle == 4) {
        progressBar.style.width = '27%';
        circles[3].classList.add('active');
    }
    console.log(activeCircle);
    progressStep();
})

prev.addEventListener('click', () => {
    activeCircle--;
    if(activeCircle < 1) {
       activeCircle = 1;
    }
    if(activeCircle == 4){
        progressBar.style.width = '27%';
        progressBar.classList.add('active');
        circles[4].classList.remove('active');
    }else if(activeCircle == 3){
        progressBar.style.width = '18%';
        circles[3].classList.remove('active');
    }else if(activeCircle == 2) {
        progressBar.style.width = '9%';
        circles[2].classList.remove('active');
    }else if(activeCircle == 1){
        progressBar.style.width = '0%';
        circles[1].classList.remove('active');
    }
    console.log(activeCircle);
    progressStep();
})

function progressStep() {
     
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