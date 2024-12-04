const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel .img');
const leftArrow = document.querySelector('.carousel .left-arrow');
const rightArrow = document.querySelector('.carousel .right-arrow');

let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

leftArrow.addEventListener('click', showPrevImage);
rightArrow.addEventListener('click', showNextImage);

showImage(currentIndex);