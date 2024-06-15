import React from 'react';

const Upload = ({ previews }) => {
  // Ensure previews is an array to avoid map errors
  previews = previews || [];

  return (
    <div className="upload mb-5 flex flex-col items-center">
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
    </div>
  );
};

export default Upload;
