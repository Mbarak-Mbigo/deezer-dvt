import axios from 'axios';

export const fetchSearchedArtists = (queryParam = '') => axios({
  method: 'get',
  url: `/search?q=artist:${queryParam}`,
  baseURL: process.env.REACT_APP_BASE_URL,
});
