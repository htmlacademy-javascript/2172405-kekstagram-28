import {getSortRandomly, getSortByComments} from './util.js';

const PICTURES_COUNT = 25;
const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filterElement = document.querySelector('.img-filters');
let currentFilter = Filter.DEFAULT;
let pictures = [];

function getSortedPhotos() {
  switch(currentFilter) {
    case Filter.RANDOM:
      return [...pictures].sort(getSortRandomly).slice(0, PICTURES_COUNT);
    case Filter.DISCUSSED:
      return [...pictures].sort(getSortByComments);
    default:
      return [...pictures];
  }
}

const onClickPhotosFilter = (callback) => {
  filterElement.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    const clickedButton = evt.target;
    if (clickedButton.id === currentFilter) {
      return;
    }

    filterElement
      .querySelector('.img-filters__button--active')
      .classList.remove('.img-filters__button--active');
    currentFilter = clickedButton.id;
    callback(getSortedPhotos());
  });
};

function activateFilter(photosData, callback){
  filterElement.classList.remove('img-filters--inactive');
  pictures = [...photosData];
  onClickPhotosFilter(callback);
}

export { getSortedPhotos, activateFilter };
