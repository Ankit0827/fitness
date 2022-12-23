import React from 'react'
import  '../../Css/Footer.css'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <div className='footer_div_container'>
        <hr />
        <div className="footer">
            <div className="social_links">
               <img src={github} alt="" />
               <img src={instagram} alt="" />
               <img src={linkedin} alt="" />
            </div>

            <div className="logo-f">
               <img src={logo} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Footer
