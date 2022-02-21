import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

import "../styles/HeroSwiper.css"
import rover_img from "../assets/images/rover.jpg"
import mars_img from "../assets/images/mars.jpg"
import elicopter_img from "../assets/images/elicopter.png"
import curiosity_cameras from "../assets/images/curiosity_cameras.jpg"

export default function HeroSwiper() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className="hero_image" src={rover_img} alt="Rover NASA" /></SwiperSlide>
        <SwiperSlide><img className="hero_image" src={mars_img} alt="Mars NASA" /></SwiperSlide>
        <SwiperSlide><img className="hero_image" src={elicopter_img} alt="Elicopter NASA" /></SwiperSlide>
        <SwiperSlide><img className="hero_image" src={curiosity_cameras} alt="curiosity cameras" /></SwiperSlide>        
      </Swiper>
    </>
  );
}