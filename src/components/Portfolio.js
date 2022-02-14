import React from "react";
import TopBar from "./Topbar";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Digital1 from "../assets/images/digital1.png";
import Digital2 from "../assets/images/digital2.png";
import Digital3 from "../assets/images/digital3.png";
import Digital4 from "../assets/images/digital4.png";
import Digital5 from "../assets/images/digital5.png";
import Digital6 from "../assets/images/digital6.png";
import Digital7 from "../assets/images/digital7.png";
import Digital8 from "../assets/images/digital8.png";
import Digital9 from "../assets/images/digital9.png";
import Digital10 from "../assets/images/digital10.png";
import Digital11 from "../assets/images/digital11.png";
import Digital12 from "../assets/images/digital12.png";
import Digital13 from "../assets/images/digital13.png";
import Digital14 from "../assets/images/digital14.png";
import Digital15 from "../assets/images/digital15.png";

import Graphic1 from "../assets/images/graphic1.png";
import Graphic2 from "../assets/images/graphic2.png";
import Graphic3 from "../assets/images/graphic3.png";
import Graphic4 from "../assets/images/graphic4.png";
import Graphic5 from "../assets/images/graphic5.png";
import Graphic6 from "../assets/images/graphic6.png";
import Graphic7 from "../assets/images/graphic7.png";
import Graphic8 from "../assets/images/graphic8.png";
import Graphic9 from "../assets/images/graphic9.png";
import Graphic10 from "../assets/images/graphic10.png";
import Graphic11 from "../assets/images/graphic11.png";
import Graphic12 from "../assets/images/graphic12.png";
import Graphic13 from "../assets/images/graphic13.png";
import Graphic14 from "../assets/images/graphic14.png";
import Graphic15 from "../assets/images/graphic15.png";

import Mobile1 from "../assets/images/mobile1.png";
import Mobile2 from "../assets/images/mobile2.png";
import Mobile3 from "../assets/images/mobile3.png";
import Mobile4 from "../assets/images/mobile4.png";
import Mobile5 from "../assets/images/mobile5.png";
import Mobile6 from "../assets/images/mobile6.png";
import Web1 from "../assets/images/web1.png";
import Web2 from "../assets/images/web2.png";
import Web3 from "../assets/images/web3.png";
import Web4 from "../assets/images/web4.png";
import Web5 from "../assets/images/web5.png";
import Web6 from "../assets/images/web6.png";
import Web7 from "../assets/images/web7.png";
import Web8 from "../assets/images/web8.png";
import Web9 from "../assets/images/web9.png";
import Web10 from "../assets/images/web10.png";
import Web11 from "../assets/images/web11.png";
import Web12 from "../assets/images/web12.png";
import Web13 from "../assets/images/web13.png";
import Web14 from "../assets/images/web14.png";
import Web15 from "../assets/images/web15.png";
import Portfolious from "../assets/images/portfolious.png";
import "./Portfolio.css";
import Footer from "./Footer";

function Portfolio() {
  return (
    <>
      <TopBar />
      <NavBar />
      {/* portfolio image start */}
      <div className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio_info">
                <img
                  src={Portfolious}
                  alt=""
                  style={{ "margin-left": "-134px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* portofolio image end */}
      {/* portfolio tabs start */}
      <div className="title-header">
      <div className="portfolio tabs">
        <p class="act">Look At</p>
        <h1 class="act">
          Our <span class="folio"> Portfolio</span>
        </h1>
        {/* <div className="container"> */}
        <div className="row">
          {/* <div className="col-md-12"> */}
          <div className="App">
            <div>
              <Tabs defaultActiveKey="second">
                <Tab eventKey="first" title="DIGITAL MARKETING">
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={Digital1} />
                      
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Digital2} />
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={Digital3} />
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={Digital4} />
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Digital5} />
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={Digital6} />
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={Digital7} />
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Digital8} />
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={Digital9} />
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={Digital10} />
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Digital11} />
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={Digital12} />
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={Digital13} />
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Digital14} />
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={Digital15} />
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={Digital1} />
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Digital2} />
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={Digital3} />
                    </Card>
                  </CardGroup>
                </Tab>
                <Tab eventKey="second" title="GRAPIC DESIGN">
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={Graphic1} />
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Graphic2} />
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={Graphic3} />
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={Graphic4} />
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Graphic5} />
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={Graphic6} />
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={Graphic7} />
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Graphic8} />
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={Graphic9} />
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={Graphic10} />
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Graphic11} />
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={Graphic12} />
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={Graphic13} />
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Graphic14} />
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={Graphic15} />
                    </Card>
                  </CardGroup>
                </Tab>
                <Tab eventKey="third" title="MOBILE APPLICATION DEVELOPMENT">
                  <CardGroup>
                    <Card class="src">
                      <Card.Img class="varient" src={Mobile1} />
     
                      
                    </Card>
                    <Card>
                      <Card.Img class="varient" src={Mobile2} />
                    </Card>

                    <Card class="src">
                      <Card.Img class="varient" src={Mobile3} />
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card class="src">
                      <Card.Img class="varient" src={Mobile4} />
                    </Card>
                    <Card class="src">
                      <Card.Img class="varient" src={Mobile5} />
                    </Card>

                    <Card class="src">
                      <Card.Img class="varient" src={Mobile6} />
                    </Card>
                  </CardGroup>
                </Tab>
                <Tab eventKey="" title="WEB DESIGN & DEVELOPMENT">
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={Web1} />
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Web2} />
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={Web3} />
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={Web4} />
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Web5} />
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={Web6} />
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={Web7} />
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Web8} />
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={Web9} />
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={Web10} />
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Web11} />
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={Web12} />
                    </Card>
                  </CardGroup>
                  <CardGroup>
                    <Card>
                      <Card.Img variant="top" src={Web13} />
                    </Card>
                    <Card>
                      <Card.Img variant="top" src={Web14} />
                    </Card>

                    <Card>
                      <Card.Img variant="top" src={Web15} />
                    </Card>
                  </CardGroup>
                </Tab>
              </Tabs>
              {/* </div> */}
            </div>
            {/* </div> */}
          </div>
        </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Portfolio;
