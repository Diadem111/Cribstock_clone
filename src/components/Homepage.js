import React from "react";
import Layout from "./Layout";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage} from '@fortawesome/free-solid-svg-icons';
import Tab from "./Tab";
import Footer from "./Footer";
import { Link, Navigate, useLocation,useNavigate } from "react-router-dom";



function Homepage() {
 const Carouselme = () => {
    return (
        <>
        {/* <h1>why you dey do this</h1> */}
        <Carousel fade>
      <Carousel.Item className="drk">
       <div id="firstImg1" className="w-100">
       <img
          className="w-100"
          src="/house3.jpg"
          alt="First slide"
          id="img1"
        />
       </div>
        <Carousel.Caption className="d-none d-md-block mt-1 ml-auto mr-auto ccd">
          <h3 className="chh">Make a new monthly income right now.</h3>
          <p className="phh">Co-owning properties on Cribstock allows you to become a landlord
             in five minutes and collect rent from a single renter or a group of tenants each month.</p>
             <Link to="/signup">
             <button className="but1">Start now </button>
             </Link>
            
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className="drk">
       <div id="firstImg2">
       <img
          className="w-100 "
          src="/house1.jpg"
          alt="Second slide"
          id="img2"
        />
       </div>

        <Carousel.Caption className="d-none d-md-block mt-1 ml-auto mr-auto ccd">
          <h3 className="chh">Buy a house on a tight budget.</h3>
          <p className="phh">Cribstock is the simplest method to gain access to wiser real estate investing possibilities and generate substantial rewards.
           We make investing easy, accessible, and cost-effective.</p>
           <button className="but1">Start now </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className="drk">
       <div id="firstImg3">
       <img
          className="w-100"
          src="/house2.jpg"
          alt="Third slide" id="img3"
        />
       </div>

        <Carousel.Caption className="d-none d-md-block mt-1 ml-auto mr-auto ccd">
          <h3 className="chh">The current way of property investment.</h3>
          <p className="phh">
          Join the top startup community in the world that focuses on real estate investment opportunities.
          </p>
          <button className="but1">Start now </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     
     {/* Message div */}
     <div id="message">
    <FontAwesomeIcon icon={faMessage} size="lg" color="white"  id="icon" />
    {/* <FontAwesomeIcon icon="fa-solid fa-message-question" color="white" /> */}
    </div>
        </>
    )
 }
 
  return (
    <>
    <Layout>
     <Carouselme/>
     <Tab/>
    </Layout>
    
    </>
  )
}

export default Homepage