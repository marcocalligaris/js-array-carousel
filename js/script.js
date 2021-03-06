// * Preparo l'array con le immagini
const sources = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

//* Prendo dal DOM gli elementi
const gallery = document.querySelector('#carousel .gallery');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');


// * Aggiunta della gallery di immagini
let imageElements = '';
for (let i = 0; i < sources.length; i++) {
    imageElements += `<img src="${sources[i]}" alt="landscape" />`;
}
gallery.innerHTML = imageElements;

const images = document.querySelectorAll('#carousel img');

// * Creo variabile per l'immagine attiva
let activeIndex = 0;


// * Classe active per la prima immagine
images[activeIndex].classList.add('active');


// * Next button
nextButton.addEventListener('click', function(){
    images[activeIndex].classList.remove('active');
    activeIndex++;
    if (activeIndex === sources.length) {
        activeIndex = 0;
    }
    images[activeIndex].classList.add('active');
})


// * Prev button
prevButton.addEventListener('click', function() {
    images[activeIndex].classList.remove('active');
    activeIndex--;
    if(activeIndex < 0) {
        activeIndex = sources.length - 1;
    }
    images[activeIndex].classList.add('active');
})




































// images[activeIndex].classList.add('active');

// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');

// nextButton.addEventListener('click', function() {

//     activeIndex += 1;

// })
