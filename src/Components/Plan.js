import React from "react";
import "../Css/Plan.css";
import { plansData } from "../data/plansData";
import whitetick from "../assets/whiteTick.png";

const Plan = () => {
  return (
    <div className="plans-container" id="plan">
      <div className="programs-header">
        <span className="Outline-text" style={{ gap: "2rem" }}>
          READY TO START
        </span>
        <span className="Outline-text">YOUR JOURNEY</span>
        <span className="Outline-text">NOW WITHUS</span>
      </div>

      {/* ............plancard....... */}

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whitetick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefist</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
