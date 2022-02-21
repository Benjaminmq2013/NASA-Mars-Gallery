import React from 'react'
import useGetPhotos from '../Hooks/useGetPhotos'
import PhotoGalleryItem from '../components/PhotoGalleryItem';

const PhotoGalleryList = () => {
    const images = useGetPhotos()
  return (
    <div className="PhotoGallery_container">
        {images.map((image) =>(
            
            <PhotoGalleryItem key={image.id} url={image.img_src} id={image.id}/>
        ))}

    </div>
  )
}

export default PhotoGalleryList
