import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsGallery = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsGallery);
galleryContainer.addEventListener('click', function onContainerGalleryClick(evt) {
    evt.preventDefault()
});

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
    .join('');
};

new SimpleLightbox('.gallery a', {animationSpeed: 250, captionsData: 'alt', captionDelay: 250});