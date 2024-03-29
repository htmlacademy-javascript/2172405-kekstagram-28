import { renderThumbs } from './mini.js';
import { createBigPicture } from './big_picture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener ('click', (evt) => {
    const thumb = evt.target.closest('[data-thumb-id]');

    if (!thumb) {
      return;
    }

    const picture = pictures.find (
      (item) => item.id === +thumb.dataset.thumbId
    );

    if (!picture) {
      return;
    }

    createBigPicture(picture);
  });

  renderThumbs (pictures);
};

export { renderGallery };
