const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
let imagesIndex = 0;

function show(index) {
    images[imagesIndex].classList.remove('active');
    images[index].classList.add('active')
    imagesIndex = index
}

controlls.forEach((e) => {
    e.addEventListener('click', () =>{
        if (event.target.classList.contains('prev')) {
            let index = imagesIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }
            show(index);
            
        } else if (event.target.classList.contains('next')) {
            let index = imagesIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index)
        }   
    })
})

show(imagesIndex)
