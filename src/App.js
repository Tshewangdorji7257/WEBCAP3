import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Post from './components/Post';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        username: 'johndoe',
        avatar: 'https://via.placeholder.com/150',
      },
      imageUrls: ['https://via.placeholder.com/600'],
      likes: 0,
      comments: [
        { username: 'janedoe', text: 'Nice picture!', timestamp: new Date() },
        { username: 'user123', text: 'Amazing!', timestamp: new Date() },
      ],
      timestamp: new Date(),
    },
  ]);

  const handleUpload = (imageFiles) => {
    const imageUrls = imageFiles.map(file => URL.createObjectURL(file));
    const newPost = {
      id: posts.length + 1,
      user: {
        username: 'current_user',
        avatar: 'https://via.placeholder.com/150',
      },
      imageUrls,
      likes: 0,
      comments: [],
      timestamp: new Date(),
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="App">
      <NavBar onUpload={handleUpload} />
      <div className="flex justify-center mt-16">
        <div className="w-full max-w-xl">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
