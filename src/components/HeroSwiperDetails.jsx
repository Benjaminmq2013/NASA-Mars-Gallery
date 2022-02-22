import React from 'react'

const HeroSwiperDetails = ({ title, url }) => {
  return (
    <div className="HeroSwiperDetails">
        <h6 className="HeroSwiperDetails-title">{ title }</h6>
        <a href={ url } target="_blank">(Click To See Details)</a>
    </div>
  )
}

export default HeroSwiperDetails