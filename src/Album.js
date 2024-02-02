import React from "react";
import AlbumImage from "./AlbumImage";

const Album = ({ images }) => {
  return (
    <div className="Spinner-contentWrapper">
      <div className="Gallery">
        <div className="Galllery-MainContainer">
          {images.map((image) => (
            <AlbumImage
              key={image.id}
              imageUrl={image.imageUrl}
              title={image.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Album;
