// src/components/Header.js

import React from 'react';

const Header = ({ user }) => {
  return (
    <div className="header flex items-center p-2">
      <img src={user.avatar} alt={`${user.username}'s avatar`} className="avatar w-10 h-10 rounded-full mr-2" />
      <span className="username font-bold">{user.username}</span>
    </div>
  );
};

export default Header;
