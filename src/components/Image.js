import React from 'react';

const Image = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Post" className="post-image" />;
};

export default Image;
