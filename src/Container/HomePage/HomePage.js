import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import SecondNavbar from "../../Component/SecondNavbar/SecondNavbar";
import ThirdNavbar from "../../Component/ThirdNavbar/ThirdNavbar";
import ProductsHomePage from "../../Component/ProductsHomePage/ProductsHomePage";

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <SecondNavbar/>
      <ThirdNavbar/>
      <ProductsHomePage/>
      
    </div>
  );
};

export default HomePage;
