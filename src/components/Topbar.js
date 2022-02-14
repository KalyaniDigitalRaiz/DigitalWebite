import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Topbar.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";



function TopBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div>
        <div className="top">
          <div className="container">
            <div className="row">
              <div className="top_sec">
                <div className="col-md-3">
                  <span>
                    <AiOutlineMail />
                    <a itemprop="email" href="mailto:digitalraizinst@gmail.com">
                      info@digitalraiz.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="top_info">
              <div className="col-md-7">
                <span>
                 
                <FaPhoneVolume />
                  <a itemprop="email" href="tel:+91-9494613601">
                    +919494613601
                  </a>
                </span>
              </div>
            </div>
            <div className="socialicons">
              <div className="col-md-2">
              <ul class="tst">
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
    </>
  );
}

export default TopBar;
