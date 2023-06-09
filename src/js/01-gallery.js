import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');

function createGallery(images) {
  return images
    .map(item => {
      const { preview, original, description } = item;
      return `
        <li class="gallery__item">
        <a class="gallery__link" href=${original}>
        <img class="gallery__image"
        src=${preview}
        alt='${description}'
        />
        </a>
        </li>`;
    })
    .join('');
}
gallery.insertAdjacentHTML('beforeend', createGallery(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);

