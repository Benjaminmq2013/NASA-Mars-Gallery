import React from "react";
import M from "materialize-css"

const PhotoGalleryItem = ({ id, url }) => {
   
  return (
    <>
      
      <img
          className="Photo_GalleryItem modal-trigger"
          src={url}
          alt="Nasa Mars Image"
          data-target="modal1"
        />   
        
    </>
  );
};

export default PhotoGalleryItem;
