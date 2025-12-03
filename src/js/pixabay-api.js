import axios from 'axios';

export const pixabay = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '53514821-85afacbf4adfab5c71570a964',
    // q: 'query',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

export function getImagesByQuery(query) {
  return pixabay
    .get('', {
      params: { q: query },
    })
    .then(res => res.data);
}
