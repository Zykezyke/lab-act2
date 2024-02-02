import React from "react";

const AlbumImage = ({ imageUrl, title }) => {
  return (
    <div className="album-image">
      <img src={imageUrl} alt={title} />
      <p className="image-title">{title}</p>
    </div>
  );
};

export default AlbumImage;
