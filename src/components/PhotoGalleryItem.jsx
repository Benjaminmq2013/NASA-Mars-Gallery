import React, { usetate } from "react";

const PhotoGalleryItem = ({ id, url }) => {
  return (
    <img
      className="Photo_GalleryItem modal-trigger"
      src={url}
      alt="Nasa Mars Image"
      data-target="modal1"
    />
  );
};

export default PhotoGalleryItem;
