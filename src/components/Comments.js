import React from 'react';

const Comments = ({ comments }) => (
  <div className="p-4">
    {comments.map((comment, index) => (
      <div key={index} className="mb-2">
        <span className="font-bold mr-2">{comment.username}</span>
        <span>{comment.text}</span>
      </div>
    ))}
  </div>
);

export default Comments;
