import React from 'react';

const GiphysIndexItem = ({ gif }) => (
  <li>
    <h1>{gif.title}</h1>
    <img src={gif.images.original.url} alt="" />
  </li>
);

export default GiphysIndexItem;
