import React from "react";
import TopBar from "./Topbar";
import Careerbanner from "../assets/images/Careerbanner.jpg";
import NavBar from "./NavBar";
import "./career.css";
import { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import { data } from "./data";
// import "./styles.css";
import Footer from "./Footer";


function Career() {
  // const [questions, setQuestions] = useState(data);
  return (
    <>
      <TopBar />
      <NavBar />
      <div className="section_career">
        {/* <div className="container-fluid"> */}
        <div className="row">
          <div className="col-md-12">
            <div className="career">
              <img src={Careerbanner} alt="" />

              <p className="carer">
                {" "}
               <strong> DigitalRaiz </strong> is the right platform where you work together with
                some of the most proficient employees in a friendly and
                comfortable environment. We provide the perfect opportunity for
                every employee so that they can put out their best performance.
                It takes a best team to achieve great results. At DigitalRaiz,
                it is our commitment to bring out the best in every team member
                and let every idea is heard. This is how we tackle challenging
                projects and deliver products we can all be proud of. If you are
                pretty passionate & enthusiastic about your work, take a look on
                DigitalRaiz current openings. Interested Candidates can send
                Your CV At <strong >info@DigitalRaiz.com </strong> DigitalRaiz Private Limited.
              </p>
              <h1 className="now">Now we are looking for</h1>
              {/* </div> */}
            </div>
            <SingleQuestion/>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Career;
