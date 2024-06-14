// src/components/Post.js

import React, { useState } from 'react';
import Header from './Header';
import Actions from './Actions';
import Comments from './Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare, faUpload } from '@fortawesome/free-solid-svg-icons'; // Import the faUpload icon
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Post = ({ post }) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(post.comments);
  const [liked, setLiked] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      const updatedComments = [...comments, { username: 'current_user', text: newComment }];
      setComments(updatedComments);
      setNewComment('');
    }
  };

  const toggleCommentInput = () => {
    setShowCommentInput(!showCommentInput);
  };

  return (
    <div className="post border border-gray-300 rounded-lg mb-5 bg-white">
      <Header user={post.user} />
      <Carousel showThumbs={false} showStatus={false} infiniteLoop>
        {post.imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Post ${index}`} className="w-full" />
          </div>
        ))}
      </Carousel>
      <div className="actions p-2 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={handleLike} className="mr-2">
            <FontAwesomeIcon icon={faHeart} size="lg" className={liked ? "text-red-500" : "text-gray-500"} />
          </button>
          <button onClick={toggleCommentInput} className="mr-2">
            <FontAwesomeIcon icon={faComment} size="lg" className="text-gray-500" />
          </button>
          <button className="mr-2">
            <FontAwesomeIcon icon={faShare} size="lg" className="text-gray-500" />
          </button>
          <button className="mr-2">
            <FontAwesomeIcon icon={faUpload} size="lg" className="text-gray-500" /> {/* Include the faUpload icon */}
          </button>
        </div>
        <div className="flex items-center">
          <button className="text-gray-500">Save</button>
        </div>
      </div>
      {showCommentInput && (
        <div className="comment-input flex items-center border-t border-gray-300">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={handleCommentChange}
            className="flex-grow p-2 focus:outline-none"
          />
          <button onClick={handleCommentSubmit} className="text-blue-500 font-semibold px-3">Post</button>
        </div>
      )}
      <Comments comments={comments} />
    </div>
  );
};

export default Post;
