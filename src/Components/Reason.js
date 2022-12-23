import React from "react";
import "../Css/Reason.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import nb from "../assets/nb.png";
import adidas from "../assets/adidas.png";
import tick from "../assets/tick.png";
import nick from "../assets/nike.png";

const Reason = () => {
  return (
    <div className="Reason_div" id="reason">
      <div className="left_side_reason">
        <img src={image1} alt=""></img>
        <img src={image2} alt=""></img>
        <img src={image3} alt=""></img>
        <img src={image4} alt=""></img>
      </div>

      <div className="right_side_reason">
        <span>Some reasons</span>
        <div>
          <span className="Outline-text">Why </span>
          <span>choose us?</span>
        </div>

        <div className="details-right_div">
          <div>
            <img src={tick} alt="" />
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRMA FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>

        <div className="partners">
          <img src={nb}></img>
          <img src={adidas}></img>
          <img src={nick}></img>
        </div>
      </div>
    </div>
  );
};

export default Reason;
