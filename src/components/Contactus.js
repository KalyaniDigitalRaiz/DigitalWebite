import { useEffect, useState, react } from "react";
import Contact from "../assets/images/contact.png";
import { AiOutlineMail } from "react-icons/ai";
import NavBar from "./NavBar";
import TopBar from "./Topbar";
import Footer from "./Footer";
import SimpleMap from "./SimpleMap";
import Form from "./Form";
import Modal from "react-bootstrap/Modal";

export const Contactus = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <TopBar />
      <NavBar />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            name="popup"
            id="popup"
            method="post"
            class="checkout row"
            enctype="multipart/form-data"
            novalidate="validate"
          >
            <div class="col-sm-12 pt-10">
              <div class="form-group">
                <label>
                  Name<abbr>*</abbr>
                </label>
                <input
                  type="text"
                  name="fname"
                  class="form-control border"
                  value=""
                  required="required"

                />
                <label for="image" class="error">
                 
                </label>
              </div>
            </div>
            <div class="col-sm-12 pt-10">
              <div class="form-group">
                <label>
                  Email Address<abbr>*</abbr>
                </label>
                <input
                  type="text"
                  name="email"
                  class="form-control border"
                  value=""
                  required="required"
                />
                <label for="image" class="error">
                
                </label>
              </div>
            </div>
            <div class="col-sm-12 pt-10">
              <div class="form-group">
                <label>
                  Phone Number<abbr>*</abbr>
                </label>
                <input
                  type="text"
                  name="phone"
                  class="form-control border"
                  value=""
                  required="required"
                />
                <label for="image" class="error">
                 
                </label>
              </div>
            </div>
            <div class="col-sm-12 pt-10">
              <div class="form-group pt-10">
                <label>
                  Service<abbr>*</abbr>
                </label>
                <select id="service" name="service" class="form-control border">
                  <option value="">Select Serivice</option>
                  <option value="4">Application Development</option>
                  <option value="8">Business Video Production</option>
                  <option value="5">Digital Marketing</option>
                  <option value="6">Graphic Design</option>
                  <option value="3">Mobile Application Development</option>
                  <option value="9">SEO Strategy</option>
                  <option value="10">Sms Service Provider</option>
                  <option value="2">Web Design &amp; Development</option>
                </select>
              </div>
            </div>
            <div class="col-sm-12 pt-20">
              <div class="form-group">
                <label>
                  Message <abbr>*</abbr>
                </label>
                <textarea
                  name="message"
                  class="form-control border"
                  rows="4"
                  required="required"
                ></textarea>
                <label for="image" class="error"></label>
              </div>
            </div>
            <button
              type="submit"
              class="button ttm-btn ttm-btn-size-sm ttm-btn-bgcolor-darkgrey"
            >
             
              Submit
            </button>
          </form>
        </Modal.Body>
       
      </Modal>

      <div className="contactus _info">
        <div className="container">
        
          <div className="row">
            <div className="col-md-12">
              <div className="contact_sec">
                
                <img src={Contact} alt="" />
                
              </div>
            </div>
          </div>
        </div>
          <div className="simple_form">
            
              <div className="row">
                <div className="col-md-4">
                  <h5 className="md">Email</h5>
                  <p>
                    <span id="demo">
                     
                    <i class="fa fa-envelope"></i>  <a8
                        itemprop="email"
                        href="mailto:digitalraizinst@gmail.com"
                      >
                        info@digitalraiz.com
                      </a8>
                    </span>
                  </p>
                </div>
                <div className="col-md-4">
                  <p id="li">
                   
                    While we're good with our services, there are simpler ways
                    for us to get in touch and answer your questions.
                    
                  </p>

                 
                </div>
                
                <div className="col-md-4  button.btn-primary">
                <button variant="primary" class="btn-primary" onClick={handleShow}>
                  Get In Touch
                  </button>
            </div>  
                </div>
                </div>
           
          
       
      </div>
      <Form />
      <SimpleMap />
      <Footer />
    </>
  );
};
