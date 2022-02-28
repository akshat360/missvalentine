import React from 'react'
import bgImage from "../../assets/images/bg_1.jpeg";
import Image from "next/image";

export default function HeroSection() {
  return (
    	<>
		<div className="hero-wrap js-fullheight" style={{ height: "100vh", backgroundImage: `url(${"https://wallpapercave.com/wp/wp5734563.jpg"})`}}>
        <div className="overlay"></div>
        <div className="container h-100">
          <div className="h-100 row no-gutters slider-text js-fullheight align-items-center justify-content-center">
              <h3 className="v">Modist - Time to get dress</h3>
              <h3 className="vr">Since - 1985</h3>
            <div className="col-md-11 ftco-animated fadeInUp text-center">
              <h1>Le Stylist</h1>
              <h2><span>Wear Your Dress</span></h2>
            </div>
            <div className="mouse">
                          <a href="#trending" className="mouse-icon">
                              <div className="mouse-wheel"><span className="ion-ios-arrow-down"></span></div>
                          </a>
                      </div>
          </div>
        </div>
        
      </div>
  <div className="goto-here"></div>
  </>
  )
}
