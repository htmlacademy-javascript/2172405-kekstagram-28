import { isEscapeKey } from './util.js';

const bigPictureModal = document.querySelector('.big-picture');
const commentList = bigPictureModal.querySelector('.social__comments');
const commentsCount = bigPictureModal.querySelector('.social__comment-count');
const commentsLoader = bigPictureModal.querySelector('.comments-loader');
const cancelButton = document.querySelector('.big-picture__cancel');

function hideBigPicture () {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentList.innerHTML = '';
}

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture();
};

const createComment = ({ avatar, message }) => {
  const commentElement = document.createElement('li');
  commentElement.className = 'social__comment';
  const img = document.createElement('img');
  img.width = 35;
  img.height = 35;
  img.className = 'social__picture';
  img.src = avatar;
  const text = document.createElement('p');
  text.className = 'social__text';
  text.textContent = message;

  commentElement.append(img, text);
  return commentElement;
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach ((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });

  commentList.append(fragment);
};

const renderPictureDetails = ({description, likes, url, text}) => {
  bigPictureModal.querySelector('.big-picture__img img').src = url;
  bigPictureModal.querySelector('.big-picture__img img').alt = description;
  bigPictureModal.querySelector('.likes-count').textContent = likes;
  bigPictureModal.querySelector('.social__caption').textContent = text;
};

const createBigPicture = (data) => {
  bigPictureModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  commentsCount.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  renderComments(data.comments);
};

cancelButton.addEventListener('click', onCancelButtonClick);

export { createBigPicture };
