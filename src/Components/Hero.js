import React from "react";
import "../Css/Hero.css";
import Header from "./subcomponents/Header.js";
import heroimage from "../assets/hero_image.png";
import heroimageback from "../assets/hero_image_back.png";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";
import {motion} from 'framer-motion'

const Hero = () => {

  const transition={type:"spring",duration:3}
  return (
    <div className="hero">
      <div  className="blur hero_blur"></div>
      <div className="left-h">
        <Header/>

        <div className="the-best-ad">
          <div></div>
          <motion.div
           initial={{left:'238px'}}
           whileInView={{left:'8px'}}
           transition={{...transition,type:"tween"}}

/>
          <span>the best fitness Gym in Town</span>
        </div>

        {/* .............about text.......... */}
        <div className="hero-text">
          <div>
            <span className="Outline-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Idol Body</span>
          </div>

          <div>
            <span>
              In here we will helpyou to Shape and build your ideal body And
              live up myour life to fullest
            </span>
          </div>
        </div>

        {/* .................figures........... */}

        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>

          <div>
            <span>+978</span>
            <span>member joined</span>
          </div>

          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>

      {/* ..............Right Side............. */}
      <div className="right-h">
        <button className="btn">Join now</button>

        <motion.div className="heart_div"
        initial={{right:"-1rem"}}
        whileInView={{right:"4rem"}}
        transition={transition}>
          <img className="heart_image" src={heart}></img>
          <span>Heart rate</span>
          <span> 116 Bpm</span>
        </motion.div>

        {/* ..........images.......... */}

        <img src={heroimage} alt="heroimage" className="hero_image"></img>
        <motion.img
          src={heroimageback}
          alt="heroimage"
          initial={{right:"11rem"}}
          whileInView={{right:"20rem"}}
          transition={transition}
          className="hero_image_back"
        ></motion.img>

        {/* ....calories.... */}

        <motion.div className="calories"
          initial={{right:"50rem"}}
          whileInView={{right:"40rem"}}
          transition={transition}
        
        >
          <img
            src={calories}
            alt="caloriesimage"
            className="calories_image"
          ></img>

          <div>
            <span>Calories Burned</span>
            <span> 220 Cal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
