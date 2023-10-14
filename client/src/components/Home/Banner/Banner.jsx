import React from "react";
import BannerImg from "../../../assets/banner-img.png";
import './Banner.scss';
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Convallis interdum purus adipiscing dis parturient
            posuere ac a quam a quam eleifend montes parturient posuere
            curae tempor
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt=""/>
      </div>
    </div>
  );
};

export default Banner;
