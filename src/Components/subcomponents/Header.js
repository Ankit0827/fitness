import React from "react";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll"

import "../../Css/Header.css";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;

  const [menuOpend, setMenuOpend] = useState(false)

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {
        menuOpend === false && mobile === true ? (
          <div className="bar_img">
            <img src={Bars} alt="#" className="bar" onClick={() => setMenuOpend(true)} />
          </div>
        ) : (
          <ul className="header-menu">
            <li ><Link
              onClick={() => setMenuOpend(false)}>Home</Link>
            </li>
            <li><Link
              onClick={() => setMenuOpend(false)}
              to='program_div'
              span={true}
              smooth={true}
            >Program</Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpend(false)}
                to='reason'
                span={true}
                smooth={true}
              >Reason</Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpend(false)}
                to='plan'
                span={true}
                smooth={true}
              >Plan</Link>
            </li>
            <li ><Link
              onClick={() => setMenuOpend(false)}
              to='testimonials'
              span={true}
              smooth={true}
            >Testimonials</Link></li>
          </ul>
        )}
    </div>
  );
};

export default Header;
