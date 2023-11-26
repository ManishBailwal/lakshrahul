import React from "react";
import './hero.css'
import dogvideo from "../assets/videos/dogvideo.mp4";

function Hero() {
  return (
    <div className="hero-section">
      <div className="v-container">
        <video autoPlay loop muted playsInline width="100%" height="auto" className="bg-clip">
        <source src={require("../assets/videos/dogvideo.mp4")}type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
 <div className="hero-content">
        <h1>Explore More </h1>
        <a href="#">Start Learning</a>
      </div>
    </div>
  );
}

export default Hero;
