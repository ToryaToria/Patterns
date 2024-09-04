const images = document.querySelectorAll('.slider__img');
const controls = document.querySelectorAll('.controlls');

let imgIndex = 0;
let index = 0;

console.log('это слайдер');

function show(index) {
  images[imgIndex].classList.remove('active');
  images[index].classList.add('active');
  imgIndex = index;
}

controls.forEach((event) => {
  event.addEventListener('click', () => {
    if (event.target.classList.contains('controlls--prev')) {
      index = imgIndex - 1;

      if (index < 0) {
        index = images.length - 1;
      }

      show(index);
    }
    else if (event.target.classList.contains('controlls--next')) {
      index = imgIndex + 1;

      if (index >= images.length) {
        index = 0;
      }
      show(index);
    }

  })
})

show(imgIndex);
