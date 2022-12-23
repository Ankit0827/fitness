import React from "react";
import "../Css/Program.css";
import { programsData } from "../data/programsData";
import RightArrow from "../assets/rightArrow.png";

const Program = () => {
  return (
    <div className="program" id="program_div">
      {/* .............Header.......... */}
      <div className="programs_header_div">
        <span className="Outline-text">Explore our</span>
        <span className="Outline-text"> programs </span>
        <span className="Outline-text">to shape you</span>
      </div>

      <div className="categories_div">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>

            <div className="join_now">
              <span>Join Now</span>
              <img src={RightArrow}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
