import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We always providing the best service believe a good place to live
            can make your life better.
          </span>

          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={20} />
                  </div>
                  <div className="flexColStart detail">
                    <span >call</span>
                    <span>04936-568985</span>
                  </div>
                </div>
                <div className="flexCenter button">
                     Call now
                </div>
              </div>


              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={20} />
                  </div>
                  <div className="flexColStart detail">
                    <span >chat</span>
                    <span>04936-568985</span>
                  </div>
                </div>
                <div className="flexCenter button">
                     Chat now
                </div>
              </div>


             

            </div>


            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={20} />
                  </div>
                  <div className="flexColStart detail">
                    <span >Video Call</span>
                    <span>04936-568985</span>
                  </div>
                </div>
                <div className="flexCenter button">
                     Video Call now
                </div>
              </div>


              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={20} />
                  </div>
                  <div className="flexColStart detail">
                    <span >Message</span>
                    <span>04936-568985</span>
                  </div>
                </div>
                <div className="flexCenter button">
                     Message now
                </div>
              </div>


             

            </div>

          </div>
        </div>

        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
