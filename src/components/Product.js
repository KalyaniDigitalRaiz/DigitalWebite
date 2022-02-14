import React from "react";
import Topbar from "../components/Topbar";
import NavBar from "../components/NavBar";
import ourProduct from "../assets/images/ourproduct.jpg";
import Custom1 from "../assets/images/custom1.png";
import Crms2 from "../assets/images/crms2.png";
import GroceryStore from "../assets/images/groceryStore.png";
import Mobilescreen from "../assets/images/mobilescreen.png";

import "./Product.css";
import Slider from "react-slick";
import Footer from "../components/Footer";

export default function Product() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Topbar />
      <NavBar />
      {/* PRODUCT IMAGE START */}
      <div className="product">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="product_info">
                <img className="lt" src={ourProduct} alt="" />
              </div>
              <div className="title-header">
                <h1 className="product_sec">DigitalRaiz Products</h1>
                <p className="project">
                  DigitalRaiz, custom programming advancement organization’s
                  prosperity is based upon its talent & getting potential.
                  Numerous developments especially fabricate programming gadgets
                  for a large wide variety of our customers efficiently. We've
                  got a great pool of fulfilled customers. We've developed
                  projects in Logistics, manufacturing, Tour and travel,
                  Electronics, Electricity and Telecommunications, ecommerce,
                  education…etc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PRODUCT IMAGE END */}
      {/* product slider start  */}
      <div className="product_slider">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Slider {...settings}>
                <div>
                  <img className="cust" src={Custom1} alt="" />
                </div>
                <div>
                  <img className="crms" src={Crms2} alt="" />
                </div>
              </Slider>
            </div>
            <div className="col-md-6">
              <p className="theroy">
                A CRM machine allows you to hold your customer’s contact
                information up to date, track each interaction they've together
                with your business, and manage their accounts. It’s designed to
                help you, improve your purchaser relationships, and in turn,
                customer lifetime fee.
              </p>
              <p className="ther">
                We've created a series of articles that break down what CRM is,
                why it's Crucial to commercial business, and how it may be used.
                Our intention is that it will help you examine your wants for
                CRM and make actionable decisions in your commercial business.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* product slider end  */}
      {/* product grocery start  */}
      <div className="grocery">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="grocery">Grocery Mobile Application</h2>
              <div className="grocery_info">
                <h6 className="gro_info">
                  Why Grocery Mobile App…? the customers will engage more in
                  your store to experience a quick & seamless way of shopping.
                </h6>
                <p className="gro_sec">
                  As mobile technology changes rapidly in our daily life it
                  significantly changes the way of doing all the types of
                  business. That’s why, the business holders need to keep
                  themselves up to date with the advanced mobile technologies to
                  maintain their business levels. Nowadays the customer expects
                  the more advanced, categorized & personalized shopping
                  experience across all the platforms to purchase. That’s the
                  reason retail business holders have to improve and increase
                  their productivity, simplify the ordering process, optimize
                  their inventory and create personalized experiences. which
                  drives to the more sales for them & helps to grab the loyal
                  customers.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mob gro">
                <Slider {...settings}>
                  <div>
                    <img className="gro_info" src={GroceryStore} alt="" />
                  </div>
                  <div>
                    <img className="gro_sec" src={Mobilescreen} alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product grocery end  */}
      {/* product ecommerce start */}
      <div className="Ecommerce">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="Ecommerce_info">
                <Slider {...settings}>
                  <div>
                    <img className="gro_info" src={GroceryStore} alt="" />
                  </div>
                  <div>
                    <img className="gro_sec" src={Mobilescreen} alt="" />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-6">
              <div className="Ecommerce_sec">
                <p className="ecommer">
                  Stay away from crowds and easily use e-commerce applications
                  that are building meticulously for safety & security offering
                  deals & loyalty. Want to expand your Business? You want to
                  fast track your sales & improve branding? Try an e-Commerce
                  web store. Get the latest eCommerce features at your
                  fingertips for impressive performance & results
                </p>
                <p className="ecommer_info">
                  A powerful online store is successful as the number of
                  conversions it gets. After all, what’s the point of fancy
                  e-commerce web application development if visitors aren’t
                  buying?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product ecommerce start */}
      <Footer />
    </>
  );
}
