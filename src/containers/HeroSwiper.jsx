import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import rover_img from "../assets/images/rover.jpg";
import mars_img from "../assets/images/mars.jpg";
import elicopter_img from "../assets/images/elicopter.png";
import curiosity_cameras from "../assets/images/curiosity_cameras.jpg";
import HeroSwiperDetails from "../components/HeroSwiperDetails";

import "swiper/css";
import "swiper/css/navigation";
import "../styles/HeroSwiper.css";

export default function HeroSwiper() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        <SwiperSlide>
          <HeroSwiperDetails title="The most advanced rover in space" url="https://www.jpl.nasa.gov/missions/mars-2020-perseverance-rover"/>
          <img className="hero_image" src={rover_img} alt="Rover NASA" />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSwiperDetails title="We landed on Mars" url="https://mars.nasa.gov/mars2020/"/>
          <img className="hero_image" src={mars_img} alt="Mars NASA" />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSwiperDetails title="Ingenuity: The first aircraft on Mars" url="https://www.jpl.nasa.gov/missions/ingenuity"/>
          <img className="hero_image" src={elicopter_img} alt="Elicopter NASA" />
        </SwiperSlide>

        <SwiperSlide>          
          <img className="hero_image" src={curiosity_cameras} alt="curiosity cameras" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
