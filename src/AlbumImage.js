import React from "react";

const AlbumImage = ({ imageUrl, title }) => {
  return (
    <div className="Gallery-Content--mediaContainer">
      <div className="Gallery-Content--media">
        <div className="imageContainer">
          <img src={imageUrl} alt={title} />
        </div>
      </div>
      <div className="Gallery-Content--descr">
        <p className="image-title">{title}</p>
      </div>
    </div>
  );
};

export default AlbumImage;
