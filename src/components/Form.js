import React from "react";
import "./Form.css";
import { AiOutlineMail } from "react-icons/ai";

function Form() {
  return (
    <div>
      <div className="form_info">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-title with-desc clearfix">
                <div className="title-header">
                  <h6>Come Visit Us At</h6>
                  <h1 className="title">Our Address</h1>
                </div>
                <div className="separator">
                  <div className="sep-line mt-25 mb-25"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="featured-icon-box style2 left-icon icon-align-top">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-md ttm-icon_element-style-round">
                       
                      </div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title"></div>
                      <div className="featured-desc">
                        <p>
                         
                          <i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#403, Manjeera Majestic Commercial,
                          <br /> KPHB-JNTU road, Hyderabad 500085,
                          <br /> Telangana ,India .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="featured-icon-box style2 left-icon icon-align-top">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-md ttm-icon_element-style-round">
                      
                      </div>
                    </div>
                    <div className="separator">
                      <div className="sep-line mt-25 mb-25"></div>
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h5>Our Phone Number</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          <a href="tel:+91-9494613601">  <i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;91-9494613601</a>
                        </p>
                        <span>
                          <a href="tel:+91-8179163601">  +91 8187060706</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="separator">
                <div className="sep-line mt-25 mb-25"></div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="featured-icon-box style2 left-icon icon-align-top">
                    <div className="featured-icon">
                      <div className="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-md ttm-icon_element-style-round"></div>
                    </div>

                    <div className="featured-content">
                      <div className="featured-title">
                        <h5>Our Email</h5>
                      </div>

                      <div className="featured-desc">
                      
                        <span>
                        <i class="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a2 itemprop="email" href="info@digitalraiz.com">
                            info@digitalraiz.com
                          </a2>
                          <br />
                          <a2 itemprop="email" href="digitalraizinst@gmail.com">
                            digitalraizinst@gmail.com
                          </a2>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="title-header" />
              <h5>Send Message</h5>
              <h1 class="title">Drop Us A Line</h1>
              <p3>
                Have any questions or comment? Drop us a line.. We'd love to
                hear from you..!
              </p3>
              <form class="row g-3 needs-validation" novalidate>

                <div class="col-sm-6 col-md-6">
                  <div class="form-group">
                    <input
                      name="name"
                      type="text"
                      class="form-control" id="validationCustom01"
                      placeholder="Full Name*"
                      required="required"
                    />
                     <div class="invalid-feedback">
      Please provide a valid firstName. </div>
   
                  </div>
                </div>
                <div class="col-sm-6 col-md-6">
                  <div class="form-group">
                    <input
                      name="phone"
                      type="text"
                      class="form-control" id="validationCustom"
                      placeholder="Phone Number*"
                      pattern="[0-9]{10}"
                      required="required"
                      
                    />
                   < div class="invalid-feedback">
      Please provide a valid phonenumber. </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-6">
                  <div class="form-group">
                    <input
                      name="email"
                      type="email"
                      class="form-control" id="validationCustom03"
                      placeholder="Email Address*"
                      required="required"
                      class="form-control bg-white"
                    />
                  
                </div>
                <div class="col-sm-6 col-md-6">
                  <div class="form-group">
                    <input
                      name="subject"
                      type="text"
                      class="form-control" id="validationCustom02"
                      placeholder="Subject"
                      required="required"
                     
                    />
                 
                  </div>
                </div>
                <div class="col-sm-12 col-md-12">
                  <div class="form-group">
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Write A Message..."
                      required="required"
                      class="form-control" id="validationCustom04"
                    ></textarea>
                    
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="text-left">
                   
                      <button
                        type="submit"
                        id="submit"
                        class="ttm-btn ttm-btn-size-md ttm-btn-bgcolor-skincolor"
                        value=""
                      >Submit</button>
                        
                   </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
