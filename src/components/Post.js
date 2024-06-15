import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState(post.comments);

  const handleLike = () => {
    setLiked(!liked);
  };

  const toggleCommentInput = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handlePostComment = () => {
    if (commentText.trim() === '') {
      return; // Prevent posting empty comments
    }

    // Construct new comment object
    const newComment = {
      username: 'current_user', // Replace with actual current user data
      text: commentText,
      timestamp: new Date().toLocaleString(), // Add timestamp
    };

    // Update state to include new comment
    setComments([...comments, newComment]);

    // Reset comment input and hide the input field
    setCommentText('');
    setShowCommentInput(false);
  };

  return (
    <div className="post bg-black text-white mb-5">
      <div className="flex items-center p-4">
        <img src={post.user.profilePic} alt="profile" className="w-10 h-10 rounded-full mr-4" />
        <div>
          <span className="font-bold">{post.user.username}</span>
          <div className="text-gray-500 text-sm">{new Date(post.timestamp).toLocaleString()}</div>
        </div>
      </div>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop dynamicHeight>
        {post.imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Post ${index}`} className="w-600 h-600 object-cover" />
          </div>
        ))}
      </Carousel>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={handleLike} className="mr-4 focus:outline-none">
            <FontAwesomeIcon icon={faHeart} size="lg" className={liked ? "text-red-500" : "text-white"} />
          </button>
          <button onClick={toggleCommentInput} className="mr-4 focus:outline-none">
            <FontAwesomeIcon icon={faComment} size="lg" className="text-white" />
          </button>
          <button className="mr-4 focus:outline-none">
            <FontAwesomeIcon icon={faShare} size="lg" className="text-white" />
          </button>
        </div>
        <div className="flex items-center">
          <button className="text-white focus:outline-none">Save</button>
        </div>
      </div>
      {showCommentInput && (
        <div className="flex items-center border-t border-gray-700 p-4">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={handleCommentChange}
            className="flex-grow p-2 bg-black text-white border-none focus:outline-none"
          />
          <button onClick={handlePostComment} className="text-blue-500 font-semibold px-3 focus:outline-none">Post</button>
        </div>
      )}
      <div className="px-4 pb-2">{liked ? post.likes + 1 : post.likes} likes</div>
      <div className="px-4 pb-4">
        {comments.map((comment, index) => (
          <div key={index} className="flex items-center mb-1">
            <div className="flex flex-col">
              <span className="font-bold mr-2">{comment.username}</span>
              <span className="text-gray-500 text-sm">{new Date(comment.timestamp).toLocaleString()}</span>
            </div>
            <span>{comment.text}</span>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <span className="font-bold mr-2">{post.user.username}</span>{post.caption}
      </div>
    </div>
  );
};

export default Post;
