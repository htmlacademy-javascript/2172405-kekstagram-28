import { renderGallery } from './gallery.js';
import { getData, sendData } from './api.js';
import {showAlert, debounce} from './util.js';
import { addSuccess, addError } from './error-success.js';
import { onFormSubmit, hideModal } from './form.js';
import { activateFilter, getSortedPhotos } from './filter.js';
import './new-photo.js';

onFormSubmit (async (data) => {
  try {
    await sendData(data);
    hideModal();
    addSuccess();
  } catch {
    addError();
  }
});

async function init() {
  try {
    const data = await getData();
    const debouncedRenderGallery = debounce(renderGallery);
    activateFilter(data, debouncedRenderGallery);
    renderGallery(getSortedPhotos());
  } catch (err) {
    showAlert(err.message);
  }
}

init();

