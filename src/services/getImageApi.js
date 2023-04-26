import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29463027-4abcfc2db99f2732a8383a5f8';

export const getImages = async (query, page) => {
  try {
    const images = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=12`
    );
    console.log(images.data.hits);
    return images.data.hits;
  } catch (error) {
    console.log(error.message);
  }
};
