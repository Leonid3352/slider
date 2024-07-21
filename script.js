const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider-img');
const sliderLine = document.querySelector('.slider__line');
const sliderBtnNext = document.querySelector('.next');
const sliderBtnPrev = document.querySelector('.prev');

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

sliderBtnNext.addEventListener('click', nextSlider);

sliderBtnPrev.addEventListener('click', prevSlider);



function nextSlider() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) {
        sliderCount = 0
    }


    rollSlider()
}

function prevSlider() {
    sliderCount--;
    if (sliderCount < 0) {
        sliderCount = sliderImages.length -1;
    }



    rollSlider()
}


function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
}
