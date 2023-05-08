import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      HomePage
      <div>
        <Link to="/product">
          <h2 style={{ cursor: "pointer" }}>Go To Product Page</h2>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
