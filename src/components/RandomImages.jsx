import React from 'react'
import random_icon from "../assets/icons/random_icon.svg"

const RandomImages = () => {
  return (
    <div id="Random_images-btn" className="waves-effect waves-light btn-floating btn-large">
      <img className="Random_images-btn" src={random_icon} />
    </div>
  );
};

export default RandomImages