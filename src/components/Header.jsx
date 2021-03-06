import React from 'react'
import OpenImage from '../Modal/OpenImage'
import HeroSwiper from '../containers/HeroSwiper';
import galleryIcon from "../assets/icons/image-gallery.svg"
import SelectDate from '../Modal/SelectDate'


const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper blue lighten-1">
        <SelectDate />
        <div>
          <a href="#" className="brand-logo" id="brand-logo">
          <img src={ galleryIcon } alt="gallery icon" className="gallery-icon" />
            Mars Gallery
          </a>
        </div>
      </div>
      <OpenImage />
      <HeroSwiper />
    </nav>
  );
};

export default Header