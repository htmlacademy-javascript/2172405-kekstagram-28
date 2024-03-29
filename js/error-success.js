import {isEscapeKey} from './util.js';

// const errorTemplate = document.querySelector('#error').content.querySelector('.error');
// const successTemplate = document.querySelector('#success').content.querySelector('.success');

function getTemplate(selector, className) {
  const template = document.querySelector(selector).content.querySelector(className);
  return template.cloneNode(true);
}

const errorTemplate = getTemplate('#error', '.error');
const successTemplate = getTemplate('#success', '.success');

const addError = (errorText, onCloseError) => {
  const errorElement = errorTemplate.cloneNode(true);
  const errorMessage = errorElement.querySelector('.error__title');
  const errorButton = errorElement.querySelector('.error__button');
  errorMessage.innerHTML = errorText;

  let closeErrorPopup = () => {};

  const onErrorEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeErrorPopup();
    }
  };

  closeErrorPopup = () => {
    errorElement.remove();
    document.removeEventListener('keydown',onErrorEscKeydown);
    onCloseError();
  };

  errorButton.addEventListener('click', () => {
    closeErrorPopup();
  });

  errorElement.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('error__inner')) {
      return;
    } else if (evt.target.classList.contains('error__title')) {
      return;
    }
    closeErrorPopup();
  });

  document.addEventListener('keydown', onErrorEscKeydown);
  document.body.appendChild(errorElement);
};

const addSuccess = () => {
  const successElement = successTemplate.cloneNode(true);
  const successButton = successElement.querySelector('.success__button');

  const closeSuccessPopup = () => {
    successElement.remove();
  };

  const onSuccessEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeSuccessPopup();
      document.removeEventListener('keydown', onSuccessEscKeydown);
    }
  };

  successButton.addEventListener('click', () => {
    closeSuccessPopup();
  });

  successElement.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('success__inner')) {
      return;
    } else if (evt.target.classList.contains('success__title')) {
      return;
    }
    closeSuccessPopup();
  });

  document.addEventListener('keydown', onSuccessEscKeydown);
  document.body.appendChild(successElement);
};

export { addError, addSuccess };
