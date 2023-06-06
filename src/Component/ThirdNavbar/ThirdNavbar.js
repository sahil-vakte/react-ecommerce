import React, { useState } from "react";
import "./ThirdNavbar.css";

const ThirdNavbar = () => {
    // WINDOWN OPEN ON HOVER IN WOMENT TAG IN NAVBAR
  const [onHoverWindowWomen, setonHoverWindowWomen] = useState(false);
  const mouseEnterWomen = () => {
    setonHoverWindowWomen(true);
  };
  const mouseLeaveWomen = () => {
    setonHoverWindowWomen(false);
  };

  return (
    <div className="ThirdNavbar-flex-div">
      <div className="ThirdNavbar-width-div">
        <div className="ThirdNavbar-main-div">
          <p
            className="ThirdNavbar-main-div-para-tag"
            onMouseEnter={mouseEnterWomen}
          >
            Women
          </p>
          <p className="ThirdNavbar-main-div-para-tag">Men</p>
          <p className="ThirdNavbar-main-div-para-tag">Kids</p>
          <p className="ThirdNavbar-main-div-para-tag">Sportswear</p>
          <p className="ThirdNavbar-main-div-para-tag">Sales & Deals</p>
        </div>

{/* WOEMN ONHOVER WINDOW OPENING */}
        {onHoverWindowWomen && (
          <div
            className="ThirdNavbar-main-div-two"
            onMouseLeave={mouseLeaveWomen}
          >
            <div className="ThirdNavbar-main-div-two-padding">
              <h1>On Hover Contents</h1>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ThirdNavbar;
