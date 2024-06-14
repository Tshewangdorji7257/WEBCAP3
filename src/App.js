// src/App.js

import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Post from './components/Post';
import Upload from './components/Upload';

const App = () => {
  const [posts, setPosts] = useState([
    {
      user: {
        username: 'johndoe',
        avatar: 'https://via.placeholder.com/150',
      },
      imageUrls: ['https://via.placeholder.com/600'],
      likes: 150,
      comments: [
        { username: 'janedoe', text: 'Nice picture!' },
        { username: 'user123', text: 'Amazing!' },
      ],
    },
  ]);

  const handleUpload = (imageFiles) => {
    const imageUrls = imageFiles.map(file => URL.createObjectURL(file));
    const newPost = {
      user: {
        username: 'current_user',
        avatar: 'https://via.placeholder.com/150',
      },
      imageUrls,
      likes: 0,
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="flex justify-center">
        <div className="w-full max-w-xl">
          <Upload onUpload={handleUpload} />
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
