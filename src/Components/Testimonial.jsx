import React from "react";
import "../Css/Testimonial.css";
import { testimonialsData } from "../data/testimonialsData";
import { useState } from "react";
import RightArrow from "../assets/rightArrow.png";
import leftArrow from "../assets/leftArrow.png";

const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  const testimoniallength = testimonialsData.length;

  return (
    <div className="testimonial">
      <div className="left_testimonial">
        <span>Testimonial</span>
        <span className="Outline-text">What they </span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>

      <div className="right_testimonial">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrow">
          <img
            onClick={() => {
              selected === 0 ? setSelected(0) : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === testimoniallength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={RightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
