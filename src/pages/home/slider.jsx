import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
      <img src="./uiImg02.jpg" alt="" className="apoflowImg"></img>
      </div>
      <div>
      <img src="./uiImg01.jpg" alt="" className="apoflowImg"></img>
      </div>
      <div>
      <img src="./uiImg03.jpg" alt="" className="apoflowImg"></img>
      </div>
      <div>
      <img src="./uiImg04.jpg" alt="" className="apoflowImg"></img>
      </div>
      <div>
      <img src="./uiImg05.jpg" alt="" className="apoflowImg"></img>
      </div>
    </Slider>
  );
}