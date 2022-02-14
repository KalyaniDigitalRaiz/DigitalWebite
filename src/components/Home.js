import React from "react";
import TopBar from "./Topbar";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Contact from "../assets/images/contact.png"
 const Home = () => {
  return (
    <>
     <TopBar/>
            <NavBar/>
      <h1>home</h1>
      {/* <img src={Contact} alt="" /> */}
      <Footer/>
    </>
  );
};
export default Home;