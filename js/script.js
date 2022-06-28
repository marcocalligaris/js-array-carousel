// * MILESTONE 2
// * Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for. Possiamo concatenare una stringa con un template literal oppure utilizzare gli altri metodi di manipolazione del DOM che abbiamo visto insieme. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.


// * Preparo l'array con le immagini

const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg",];

// * Mi prendo dal DOM gli elementi che mi servono

const gallery = document.getElementById('gallery');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// * Creo variabile per l'immagine attiva

let activeIndex = 0;
images[activeIndex]classList.add('active');

let image = '';

for (let i = 0; i < images.length; i++) {
    image = `<img src="${images[i]}">`
    image[activeIndex].classList.add('active');
}

gallery.innerHTML = image;

nextButton.addEventListener('click', function() {
    
})































// images[activeIndex].classList.add('active');

// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');

// nextButton.addEventListener('click', function() {

//     activeIndex += 1;

// })
