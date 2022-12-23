import React from "react";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";

import "../../Css/Header.css";

const Header = () => {
  const mobile =window.innerWidth<=768 ? true : false;

  const [menuOpend,setMenuOpend]= useState(false)
  
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {
        menuOpend === false && mobile === true ? (
         <div className="bar_img">
          <img src={Bars} alt="#" className="bar" onClick={()=> setMenuOpend(true)}/>
         </div>
        ):(
          <ul className="header-menu">
          <li onClick={()=> setMenuOpend(false)}>Home
          </li>
          <li onClick={()=> setMenuOpend(false)}>Programs</li>
          <li onClick={()=> setMenuOpend(false)}>Why us</li>
          <li onClick={()=> setMenuOpend(false)}>Plans</li>
          <li onClick={()=> setMenuOpend(false)}>Testimonials</li>
        </ul>
        )}
    </div>
  );
};

export default Header;
