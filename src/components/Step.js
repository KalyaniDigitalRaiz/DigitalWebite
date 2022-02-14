import Avatar1 from "../assets/images/Avatar1.png";
import Avatar2 from "../assets/images/Avatar2.png";
import Avatar3 from "../assets/images/Avatar3.png";
import Avatar4 from "../assets/images/Avatar4.png";
import Avatar5 from "../assets/images/Avatar5.png";
import Avatar6 from "../assets/images/Avatar6.png";
import React, { Component } from "react";
import Slider from "react-slick";
import "./Style.css";
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      // vertical: false,
      horizontal:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay:true,
      horizontalSwiping: true,
  // autoplaySpeed:1500,
      responsive: [
       
       
       
      ]
    };
    return (
      <div>
       
        <Slider {...settings}>
          <div className="avatar2">
          <img src={Avatar2} alt=""/>
          </div>
          <div className="avatar1">
          <img src={Avatar1} alt=""/>
          </div>
          <div className="avatar3">
          <img src={Avatar3} alt=""/>
          </div>
          <div className="avatar4">
          <img src={Avatar4} alt=""/>
          </div>
          <div className="5">
          <img src={Avatar5} alt=""/>
          </div>
          <div className="6">
          <img src={Avatar6} alt=""/>
          </div>
         
        </Slider>
      </div>
    );
  }
}
