// src/components/Comments.js

import React from 'react';

const Comments = ({ comments }) => {
  return (
    <div className="comments p-2">
      {comments.map((comment, index) => (
        <div key={index} className="comment flex mb-1">
          <span className="username font-bold mr-1">{comment.username}</span>
          <span>{comment.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
