// src/components/Actions.js

import React, { useState } from 'react';

const Actions = ({ initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="actions p-2">
      <button onClick={handleLike} className="mr-2">{isLiked ? 'Unlike' : 'Like'}</button>
      <button className="mr-2">Comment</button>
      <button className="mr-2">Share</button>
      <p className="mt-1">{likes} {likes === 1 ? 'like' : 'likes'}</p>
    </div>
  );
};

export default Actions;
