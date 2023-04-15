import { renderGallery } from './gallery.js';
import { getData, sendData } from './api.js';
import {showAlert} from './util.js';
import { addSuccess, addError } from './error-success.js';
import { onFormSubmit, hideModal } from './form.js';

onFormSubmit (async (data) => {
  try {
    await sendData(data);
    hideModal();
    addSuccess();
  } catch {
    addError();
  }
});

try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}

