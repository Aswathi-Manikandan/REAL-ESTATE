import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
import "./Value.css";

const Value = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        
        {/* Left Section */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="Value" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          {/* Custom Accordion */}
          <div className="accordion">
            {data.map((item, i) => (
              <div
                key={i}
                className={`accordionItem ${expandedItem === i ? "expanded" : "collapsed"}`}
              >
                <div
                  className="flexCenter accordionButton"
                  onClick={() => toggleAccordion(i)}
                >
                  <div className="flexCenter icon">{item.icon}</div>
                  <span className="primaryText">{item.heading}</span>
                  <div className={`flexCenter icon ${expandedItem === i ? "rotate" : ""}`}>
                    <MdOutlineArrowDropDown size={20} />
                  </div>
                </div>

                {/* Conditionally Render the Panel */}
                {expandedItem === i && (
                  <div className="accordionItemPanel">
                    <p className="secondaryText">{item.detail}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;