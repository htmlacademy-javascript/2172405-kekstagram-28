const otherUsersPictures = document.querySelector('.pictures');
const newThumbTemplate = document.querySelector('#.picture')
  .content
  .querySelector('.picture');

const createThumb = ({ url, comments, likes, description }) => {
  const thumb = newThumbTemplate.cloneNode(true);
  thumb.querySelector('.picture__img').src = url;
  thumb.querySelector('.picture__img').alt = description;
  thumb.querySelector('.picture__comments').textContent = comments.length;
  thumb.querySelector('.picture__likes').textContent = likes.length;

  return thumb;
};

const renderThumbs = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumb = createThumb(picture);
    fragment.append(thumb);
  });

  otherUsersPictures.append(fragment);
};

export { renderThumbs };
