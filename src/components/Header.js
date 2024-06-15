import React from 'react';

const Header = ({ user }) => (
  <div className="flex items-center p-4">
    <img src={user.profilePic} alt="profile" className="w-10 h-10 rounded-full mr-4" />
    <span className="font-bold">{user.username}</span>
  </div>
);

export default Header;
