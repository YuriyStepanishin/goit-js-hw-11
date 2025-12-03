import './css/styles.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const searchImage = e.currentTarget.elements['search-text'].value.trim();

  if (!searchImage) {
    iziToast.warning({
      message: 'Please enter a search word!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchImage)
    .then(data => {
      const { hits } = data;

      if (!hits || hits.length === 0) {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(hits);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        message: 'Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      e.target.reset();
    });
}
