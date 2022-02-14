import React from "react";
import Footer from "../assets/images/footer.jpg";
import { FaPhoneVolume } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
// import SimpleMap from "./AddressMap";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";



const footer = () => {
  return (
    <>
      {/* <SimpleMap/> */}

      <div className="footer_sec">
        <div className="container">
          <img src={Footer} alt="" />
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 ">
              <h3 class="if">About Us</h3>
              <div className="digitalraiz ">
              <p class="raiz"> Digital Raiz is the top most company in
                Software Development, IT Development, Mobile Apps Development,
                Digital Marketing services. One of the best software development
                company in Hyderabad India. We developed and executed highly
                technical projects on-time, with a lower cost &amp; within
                scope. &nbsp;&nbsp;&nbsp;&nbsp;
                <a8 href="http://localhost:3000/about">(Read More..)</a8></p> 
              </div>
              <div class="footer-desc"></div>
              <br />
              <br />

              <div class="footer-title">
                <h5>
                  <p id="demo">Talk To Our Support</p>
                  <ul class="tst">
                    <li>
                      <br />
                      <p1>24/7</p1>
                      <a itemprop="tel" href="tel:+91-9494613601">
                        +91-9494613601
                      </a>
                    </li>
                  </ul>
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 ">
              <div className="footer_links">
                <h3>QuickLinks</h3>
                <div className="footer_val">
                  <ul class="tst">
                    <li>
                      {" "}
                      <a href="http://localhost:3000/"> >> &nbsp;&nbsp;Home</a>
                    </li>
                    <li>
                      {" "}
                      <a href="http://localhost:3000/about">
                        {" "}
                        >>&nbsp;&nbsp;About
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="http://localhost:3000/services">
                        {" "}
                        >>&nbsp;&nbsp;Services
                      </a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/product">
                        {" "}
                        >>&nbsp;&nbsp;Product
                      </a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/portfolio">
                        {" "}
                        >>&nbsp;&nbsp;portfolio
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="http://localhost:3000/portfolio">
                        {" "}
                        >>&nbsp;&nbsp;career
                      </a>
                    </li>{" "}
                    <li>
                      <a href="http://localhost:3000/portfolio">
                        {" "}
                        >>&nbsp;&nbsp;Blog
                      </a>
                    </li>{" "}
                    <li>
                      <a href="http://localhost:3000/contact">
                        {" "}
                        >>&nbsp;&nbsp;contactus
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 ">
            <div className="footer_icons">
              <h4 class="icon">Address</h4>
              <h6 className="lo">
                
                <i className="fa fa-map-marker"></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#403, Manjeera Majestic Commercial,
                <br />
                KPHB-JNTU road, Hyderabad 500085, <br />
                Telangana ,India.
              </h6>
            </div>
            </div>
          </div>

          <div className="phone">
          
            <span className="post-date">
              <li className="txt">
              <i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a1 itemprop="email" href="tel:+91-9494613601">
                  +919494613601 , &nbsp;&nbsp;&nbsp;&nbsp;  
                </a1>

                <a1 itemprop="tel" href="tel:+91-8179163601">
                  +91-8179163601
                </a1>
              </li>
            </span>
            <ul />

           
            <span id ="ro">
            <i class="fa fa-envelope"></i> &nbsp; &nbsp; &nbsp;&nbsp;<a2 itemprop="email" href="info@digitalraiz.com">
                info@digitalraiz.com ,
              </a2>
              &nbsp;&nbsp;
              <a2 itemprop="email" href="digitalraizinst@gmail.com">
                digitalraizinst@gmail.com
              </a2>
            </span>
            <li />

            <div className="span10 offset1">
              <div className="socialicons">
                {/* <div className="col-md-2"> */}
                <ul class="tst1">
                  <li>
                    <a href="https://www.youtube.com/c/jamesqquick">
                      <i class="icon-youtube"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.facebook.com/learnbuildteach/">
                      <i class="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/jamesqquick">
                      <i class="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/learnbuildteach">
                      <i class="icon-instagram"></i>
                    </a>
                  </li>

                  <li>
                    {" "}
                    <a href="https://www.instagram.com/learnbuildteach">
                      <i class="icon-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <span>
                  <p2>Copyright © 2022&nbsp;<a href="#">DigitalRaiz </a> All Rights
                  Reserved</p2>
                </span>
              </div>
            </div>
            </div>
      </div>
    </>
  );
};
export default footer;
