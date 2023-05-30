import React, { useState } from "react";
import "./SecondNavbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

const SecondNavbar = () => {

  return (
    <div className="second-nav-flex-div">
      <div className="second-nav-width-div">
        <div className="second-nav-main-div">
          <div className="second-nav-main-flex-div">
            <div
              className="second-nav-main-contend-div"
              style={{ display: "flex", alignItems: "center", gap: "2px" }}
            >
              <RxHamburgerMenu className="hamber-svg" />
              <p>All</p>
            </div>

            <div className="second-nav-main-contend-div">
              <p>Amazon miniTV</p>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default SecondNavbar;
