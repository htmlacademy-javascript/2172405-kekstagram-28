const scaleContainer = document.querySelector('.scale');
const scaleInputElement = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const STEP = 25;

const scaleImage = (value) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}%`;
};

scaleContainer.addEventListener('click', (event) => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  const result = event.target.value;
  if (result === 'decrease') {
    let newValue = currentValue - STEP;
    if (newValue < MIN_SCALE) {
      newValue = MIN_SCALE;
    }
    scaleImage(newValue);
  } else if (result === 'increase') {
    let newValue = currentValue + STEP;
    if (newValue > MAX_SCALE) {
      newValue = MAX_SCALE;
    }
    scaleImage(newValue);
  }
});

const resetScale = () => scaleImage(DEFAULT_SCALE);

export { resetScale };


