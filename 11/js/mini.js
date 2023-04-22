const otherUsersPictures = document.querySelector('.pictures');
const newThumbTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createThumb = ({ url, comments, likes, description, id }) => {
  const thumb = newThumbTemplate.cloneNode(true);
  thumb.querySelector('.picture__img').src = url;
  thumb.querySelector('.picture__img').alt = description;
  thumb.querySelector('.picture__comments').textContent = comments.length;
  thumb.querySelector('.picture__likes').textContent = likes;
  thumb.dataset.thumbId = id;

  return thumb;
};

const renderThumbs = (pictures) => {
  otherUsersPictures.querySelectorAll('.picture').forEach((element) => element.remove());
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumb = createThumb(picture);
    fragment.append(thumb);
  });

  otherUsersPictures.append(fragment);
};

export { renderThumbs };
