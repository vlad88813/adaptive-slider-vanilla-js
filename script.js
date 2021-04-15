// let offset = 0;
// const sliderLine = document.querySelector('.slider-line');

// document.querySelector('.slider-next').addEventListener('click', function(){
//     offset= offset + 395;
//     if (offset > 790){
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + 'px'
// })

// document.querySelector('.slider-prev').addEventListener('click', function(){
//     offset= offset - 395;
//     if (offset < 0 ){
//         offset = 790;
//     }
//     sliderLine.style.left = -offset + 'px'
// })


// адаптивный слайдер код ниже


const images = document.querySelectorAll('.slider .slider-linee img ');
const sliderLine = document.querySelector('.slider-linee');
let count = 0;
let width;

function init() {
    
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';

    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
    
    rollSlider();
}

window.addEventListener('resize',init)
init();

document.querySelector('.slider-prev').addEventListener('click',function () {
    count--;
    
    if (count < 0){
        count = images.length-1;
        
    }
    rollSlider();
})


document.querySelector('.slider-next').addEventListener('click',function () {
    count++;
    
    if (count == images.length){
        count = 0;
    }
    rollSlider();
})


function rollSlider() {
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
}