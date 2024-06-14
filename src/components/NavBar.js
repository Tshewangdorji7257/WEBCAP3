// src/components/NavBar.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faCommentDots, faPlusSquare, faCompass, faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className="bg-gray-100 border-b border-gray-200 p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <div>
        <img src="instagram-post-page/src/image.png" alt="Instagram" className="h-8" />
      </div>
      <div className="flex items-center">
        <div className="relative">
          <input type="text" placeholder="Search" className="rounded bg-gray-200 px-3 py-1 focus:outline-none" />
          <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <div className="flex space-x-4 ml-4">
          <FontAwesomeIcon icon={faHome} size="lg" className="text-gray-700 cursor-pointer" />
          <FontAwesomeIcon icon={faCommentDots} size="lg" className="text-gray-700 cursor-pointer" />
          <FontAwesomeIcon icon={faPlusSquare} size="lg" className="text-gray-700 cursor-pointer" />
          <FontAwesomeIcon icon={faCompass} size="lg" className="text-gray-700 cursor-pointer" />
          <FontAwesomeIcon icon={faUser} size="lg" className="text-gray-700 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
