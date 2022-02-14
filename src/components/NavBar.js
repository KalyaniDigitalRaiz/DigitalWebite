import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/images/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };
  return (
    <>
      <div className="section1">
        <nav className="navbar">
          <div className="nav-container">
            <ul id="memo">
              <img src={Logo} alt="" />
            </ul>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  About
                </NavLink>
              </li>

            
                <div className="services_drop">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <DropdownButton
                          alignRight
                          title="Services"
                          id="dropdown-menu-align-right"
                          onSelect={handleSelect}
                        >

                          <Dropdown.Item eventKey="option-1">
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4">
                                  <ul className="degn"><a href="/UXUI Design">UX &amp;UI Design</a></ul>
                                  <li className="pro"><a href="/Prototypes">Prototypes</a></li>
                                  <li className="pro"><a href="/WireframeDesign">Wireframe-Design</a></li>

                                  <li className="pro"><a href="/ApplicationDesign">Application-Design</a></li>
                                  <li className="pro"><a href="/webDesign">Web-Design</a></li>
                                </div>
                                <div className="col-md-4">
                                  <ul className="web"><a href="/webdesigndevelopment">
                                    WebDesign &amp;Development
                                 </a> </ul>
                                  <li className="ang"><a href="/AngularDevelopment">Angular-Development</a></li>
                                  <li className="ang"><a href="/ReactJSDevelopment">ReactJS-Development</a></li>
                                  <li className="ang"><a href="/NodeJSDevelopment">NodeJS-Development</a></li>
                                  <li className="ang"><a href="/MongoDBDevelopment">MongoDB-Development</a></li>
                                  <li className="ang"><a href="/PHPDevelopment">PHP-Development</a></li>
                                </div>
                                <div className="col-md-4">
                                  <ul className="mob"><a href="/MobileApplicationDevelopment ">
                                    Mobile-Application-Development </a>
                                  </ul>
                                  <li className="AAD"><a href="/AndroidAppsDevelopment">
                                    Android-Apps-Development </a></li>
                                
                                  <li className="AAD"><a href="/iOSAppsDevelopment">iOS-Apps-Development</a></li>
                                  <li className="AAD"><a href="/IonicAppsDevelopment">
                                    Ionic-Apps-Development</a>
                                  </li>
                                  <li className="AAD"><a href="/WearableAppsDevelopment">
                                    Wearable-Apps-Development</a>
                                  </li>
                                </div>
                                <div className="col-md-4">
                                  <ul className="mob"><a href="/DigitalMarketing">Digital-Marketing</a></ul>
                                  <li className="mec"><a href="/SearchEngineOptimization">
                                  Search-Engine-Optimization </a>
                                  </li>
                                  <li className="mec"><a href="/SocialMediaMarketing">
                                    Social-Media-Marketing</a>
                                  </li>
                                  <li className="mec"><a href="/SocialMediaOptimization">
                                  Social-Media-Optimization </a>
                                  </li>
                                  <li className="mec"><a href="/ SearchEngineMarketing">
                                  Search-Engine-Marketing </a>
                                  </li>
                                  <li className="mec"><a href="/Payperclick ">Pay-per-click </a></li>
                                </div>
                                <div className="col-md-4">
                                  <ul className="mob"> <a href="/EnterpriseSolutions">Enterprise-Solutions</a></ul>
                                  <li className="mce"><a href="/ CustomEnterpriseSoftwareDevelopment">
                                    Custom-Enterprise-Software-Development</a>
                                  </li>
                                  <li className="mce"><a href="/EnterpriseApplicationIntegration">
                                    Enterprise-Application-Integration</a>
                                  </li>
                                  <li className="mce"><a href="/LegacyAppUpgradeandModernization">
                                    Legacy-App-Upgrade-Modernization</a>
                                  </li>
                                  <li className="mce"><a href="/EnterpriseWebampMobileApplication">
                                    EnterpriseWeb&amp;Mobile-Application</a>
                                  </li>
                                </div>
                                <div className="col-md-4">
                                  <ul className="mob"><a href="/ MachineLearningandArtificiaIntelligence">
                                    Machine-Learning&amp;Artificial-Intelligence</a>
                                  </ul>

                                  <li className="mlk"><a href="/MachineLearning">Machine-Learning</a></li>
                                  <li className="mlk"><a href="/ArtificialIntelligence">
                                    Artificial-Intelligence</a>
                                  </li>
                                  <li className="mlk"><a href="/DataScience">Data-Science</a></li>
                               <li className="mlk"><a href="/DeepLearning">Deep-Learning</a></li>
                                </div>
                                <div className="col-md-4">
                                  <ul className="degn"><a href="/InternetofThings">Internet-of-Things </a></ul>
                                  <li className="pro"><a href="/IoTforWearables">IoT-for-Wearables</a></li>
                                  <li className="pro"><a href="/IoTforHealthcare">IoT-for-Healthcare</a></li>
                                     <li className="pro"><a href="/IoTforTransport">IoT-for-Transport</a></li>
                                  <li className="pro"><a href="/IoTforRetail">IoT-for-Retail</a></li>
                                </div>
                                <div className="col-md-4">
                                  <ul className="degn"><a href="/ITConsulting">IT-Consulting </a></ul>
                                 </div>
                                <div className="col-md-4">
                                  <ul className="degn"><a href="/TechSupport">Tech-Support </a></ul>
                               
                                </div>
                              </div>
                            </div>
                          </Dropdown.Item>
                        </DropdownButton>
                      </div>
                    </div>
                  </div>
                </div>
          

              <li className="nav-item">
                <NavLink
                  exact
                  to="/Product"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Portfolio"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/career"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Career
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/blog"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contactus"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
