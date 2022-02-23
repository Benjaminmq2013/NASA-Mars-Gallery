import React, { useContext } from "react";
import { AppContext } from "../context/provider";

const PhotoGalleryItem = ({ id, url }) => {
  const [ imageURL, setImageURL ] = useContext(AppContext);
  return (
    <img
      className="Photo_GalleryItem modal-trigger"
      src={url}
      alt="Nasa Mars Image"
      data-target="modal-OpenImage"
      onClick={() => setImageURL(url)}
    />
  );
};

export default PhotoGalleryItem;
