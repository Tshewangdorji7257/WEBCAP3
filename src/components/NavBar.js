import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faSearch, faCompass, faFilm, faCommentDots, faHeart, faPlusSquare, faUser, faBars,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ onUpload }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItem, setActiveItem] = useState('Home'); // State to track the active menu item
  const searchInputRef = useRef(null);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newSelectedImages = [...selectedImages, ...files];
    setSelectedImages(newSelectedImages);

    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviews(prevPreviews => [...prevPreviews, ...newPreviews]);
    setShowModal(true);
  };

  const handleUpload = async () => {
    if (selectedImages.length > 0) {
      setUploading(true);
      try {
        await onUpload(selectedImages);
      } catch (error) {
        console.error("Error uploading images:", error);
      } finally {
        setSelectedImages([]);
        setPreviews([]);
        setUploading(false);
        setShowModal(false);
      }
    }
  };

  const closeModal = () => {
    setSelectedImages([]);
    setPreviews([]);
    setShowModal(false);
  };

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setSearchQuery('');
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 0);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };

  const performSearch = () => {
    console.log('Performing search for:', searchQuery);
    setShowSearch(false);
  };

  const iconData = [
    { icon: faHome, name: 'Home' },
    { icon: faSearch, name: 'Search', action: handleSearchClick },
    { icon: faCompass, name: 'Explore' },
    { icon: faFilm, name: 'Reels' },
    { icon: faCommentDots, name: 'Messages' },
    { icon: faHeart, name: 'Notifications' },
    { icon: faPlusSquare, name: 'Create', upload: true },
    { icon: faUser, name: 'Profile' },
    { icon: faBars, name: 'More' },
  ];

  return (
    <>
      <nav className="bg-black text-white p-4 flex flex-col items-start fixed top-0 left-0 h-full w- z-10 transition-all duration-300">
        <div className="mb-6">
          <img src="image.png" alt="Instagram" className="h-8" />
        </div>
        <div className="flex flex-col space-y-6 mt-10 w-full">
          {iconData.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 cursor-pointer hover:bg-gray-800 rounded-lg transition-colors duration-200 w-full p-2 ${activeItem === item.name ? 'bg-gray-700' : ''}`}
              onClick={() => {
                setActiveItem(item.name);
                item.upload ? document.getElementById('upload-input').click() : item.action && item.action();
              }}
            >
              <FontAwesomeIcon icon={item.icon} size="lg" />
              {item.name === 'Search' && showSearch ? (
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Search..."
                  className="p-2 bg-gray-800 text-white rounded focus:outline-none w-full"
                  ref={searchInputRef}
                />
              ) : (
                <span>{item.name}</span>
              )}
              {item.upload && (
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                  id="upload-input"
                />
              )}
            </div>
          ))}
        </div>
      </nav>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg w-2/3 max-w-lg">
            <h2 className="text-xl mb-4">Preview Images</h2>
            <div className="preview-container grid grid-cols-3 gap-4">
              {previews.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Preview ${index}`}
                  className="preview-image max-w-full max-h-40 object-cover"
                />
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={handleUpload}
                className={`bg-blue-500 text-white py-1 px-3 rounded ${uploading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                disabled={uploading}
              >
                {uploading ? 'Uploading...' : 'Upload'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
