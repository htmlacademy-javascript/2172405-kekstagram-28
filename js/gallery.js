const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  debugger;
  container.addEventListener ('click', (evt) => {
    const thumb = evt.target.closest('[data-thumb-id]');
    if(!thumb) {
      return;
    }

  });
};
