import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrappe">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />

          <span className="secondaryText">
            Our cision is to make all people <br />
            the best place to live for them
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 NewYork, FL 4571, USA</span>

          
        </div>
      </div>
    </section>
  );
};

export default Footer;
