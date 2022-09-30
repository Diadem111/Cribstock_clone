import React, {PureComponent, useState,useEffect,Component} from 'react';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";


export default class Responsive extends Component {
    
    render() {
        const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
            <img src={<AiOutlineArrowLeft/>} alt="prevArrow" {...props} />
          );
        
          const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
            <img src={<AiOutlineArrowRight/>} alt="nextArrow" {...props} />
          );      
          const settings = {
            focusOnSelect: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500
      
          };
      return (
        <div>
          <h2> Responsive </h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
          </Slider>
        </div>
      );
    }
}