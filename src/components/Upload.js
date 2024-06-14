// src/components/Upload.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Upload = ({ onUpload }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
    const previews = files.map(file => URL.createObjectURL(file));
    setPreviews(previews);
  };

  const handleUpload = () => {
    if (selectedImages.length > 0) {
      onUpload(selectedImages);
      setSelectedImages([]);
      setPreviews([]);
    }
  };

  return (
    <div className="upload mb-5 flex flex-col items-center">
      <label className="cursor-pointer mb-2">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="hidden"
        />
        <FontAwesomeIcon
          icon={faPlus}
          className="text-blue-500 text-3xl border border-blue-500 rounded-full p-3"
        />
      </label>
      <div className="preview-container flex flex-wrap justify-center">
        {previews.map((preview, index) => (
          <img
            key={index}
            src={preview}
            alt={`Preview ${index}`}
            className="preview-image max-w-xs max-h-xs m-1 object-cover"
          />
        ))}
      </div>
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white py-1 px-3 rounded mt-2"
      >
        Upload
      </button>
    </div>
  );
};

export default Upload;
