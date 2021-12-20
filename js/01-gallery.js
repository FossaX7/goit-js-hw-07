import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsGallery = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsGallery);

galleryContainer.addEventListener('click', onContainerGalleryClick);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
    })
    .join('');
};

function onContainerGalleryClick(evt) {
    evt.preventDefault();
     const modalPicture = basicLightbox.create(`
     <img src="${evt.target.dataset.source}">
    `)
    modalPicture.show(() => escModalClose(modalPicture));
    
};

function escModalClose(modalPicture) {
    document.addEventListener("keydown", evt => {
        if (evt.code === 'Escape'){
            modalPicture.close()
        }
    })
};
