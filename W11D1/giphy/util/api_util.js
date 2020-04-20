import YOUR_GIPHY_API_KEY from './api_keys';

export const fetchSearchGiphys = (searchTerm) => (
  fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${YOUR_GIPHY_API_KEY}&limit=2`)
);

export const fetchMoreSearchGiphys = (searchTerm) => (
  fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${YOUR_GIPHY_API_KEY}&limit=10`)
);
