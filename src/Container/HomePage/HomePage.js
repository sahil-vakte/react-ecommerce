import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import SecondNavbar from "../../Component/SecondNavbar/SecondNavbar";

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <SecondNavbar/>

      
    </div>
  );
};

export default HomePage;
