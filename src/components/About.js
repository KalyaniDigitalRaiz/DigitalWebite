import React from "react";
import "./About.css";
import TopBar from "../components/Topbar";
import NavBar from "../components/NavBar";
import bannerabout from "../assets/images/bannerabout.png";
import picture from "../assets/images/picture.png";
import Slider from "react-slick";
import Avatar1 from "../assets/images/Avatar1.png";
import Avatar2 from "../assets/images/Avatar2.png";
import Avatar3 from "../assets/images/Avatar3.png";
import Avatar4 from "../assets/images/Avatar4.png";
import Avatar5 from "../assets/images/Avatar5.png";
import Avatar6 from "../assets/images/Avatar6.png";
// import Step from "../components/Step";
import Footer from "../components/Footer";

export default function About () {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <TopBar />
      <NavBar />

      {/* ABOUTS BANNER START */}
      <div className="container-fluid">
        <div className="col-md-12">
          <div className="about_info">
            <img src={bannerabout} alt="" />
          </div>
        </div>
      </div>
      {/* ABOUT BANNER END  */}
      {/* ABOUT  CONTENT START */}
      <div className="about_section">
        <div className="container">
          <div className="col-md-12">
            <div className="about_section_info">
              <h1 id="info">Welcome To DigitalRaiz</h1>
              <p>
                DigitalRaiz is the main supplier in IT Development, Software
                Development, creative Mobile applications Development, web index
                showcasing and advancement administrations. Our essential
                subject matters incorporate site improvement (SEO), on page
                streamlining, search-accommodating web advancement, informal
                communication and third party referencing. We separate ourselves
                in our steady capacity to stay up with the changing requests of
                the business. DigitalRaiz have gone from little new businesses
                to huge organizations making significant degrees of progress
                with every customer.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* about content end */}
      {/* side banner and content start */}
      <div className="content_info">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="title">
                <h1 id="info">Who We Are</h1>
              </div>
              <div className="col-md-12">
                <p className="col">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the
                </p>
              </div>
              <div className="col-md-12">
                <p className="title_para">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a
                </p>
              </div>
              <div className="col-md-12">
                <p className="titile_sec">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many{" "}
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="title_sec">
                <img src={picture} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* side banner and content end */}
      {/* start vision */}
      <div className="vision">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single page">
                <h1 id="info">Our Vision</h1>
                <p className="an">
                  An individual character and arise as a regarded programming
                  arrangements supplier by building and keeping up durable
                  connections, conveying quality programming and by giving
                  inventive business arrangements..
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="application">
                <h2 id="info">Our Mission</h2>
                <p className="mission">
                  To give inventive, high calibre and top tier IT Consulting &
                  IT Solutions & Services to our clients, empowering them to
                  accomplish their business destinations. Partners and
                  accomplices while co-operating. also, to keep up and grow our
                  convention of "Greatness through Quality".
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="goal">
                <h1 id="info"> Our Goal</h1>
                <p className="goal_info">
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end vision*/}
      {/* slicker start */}
      <div className="slickside">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="team_slick">
                <h6 className="team">Team Member</h6>
                <h1 className="export">Our Expert Team</h1>
                <p className="export_info">
                  Our web design agency is made up of an responsive team of web
                  designers & web developers with the creativity, technical
                  expertise, and vision to create stunning, elegant website
                  designs. We stand out at what we do and we love every moment
                  of it.
                </p>
                <div className="">
                  <a href="http://localhost:3000/about" target="_blank">
                    <button className="menu"> Menu </button>
                  </a>
                </div>
                </div>
          </div>
            
            <div className="col-md-6">
            <Slider {...settings}>
                  <div>
                    <img className="avi1" src={Avatar1} alt=""/>
                  </div>
                  <div>
                  <img className="avi2" src={Avatar2} alt=""/>
                  </div>
                  <div>
                  <img className="avi3" src={Avatar3} alt=""/>
                  </div>
                  <div>
                  <img className="avi4" src={Avatar4} alt=""/>
                  </div>
                  <div>
                  <img className="avi5" src={Avatar5} alt=""/>
                  </div>
                  <div>
                  <img className="avi6" src={Avatar6} alt=""/>
                  </div>
                </Slider>
           
        </div>
      </div>
      </div>
      </div>
      {/* slicker end */}
      <Footer />
    </div>
  )
}
