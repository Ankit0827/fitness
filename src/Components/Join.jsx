import React from "react";
import "../Css/Join.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Join = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_uj4s3um",            // service id
        "template_l7ao72g",          // template id
        form.current,
        "_-8r7HWPkTmddn05t"          //public id
      ).then((result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join_div" id="join_us_div">
      <div className="left_join_div">
        <hr />
        <div>
          <span className="Outline-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="Outline-text"> WITH US ?</span>
        </div>
      </div>

      <div className="right_join_div">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            className="input_field"
          />
          <button className="btn-join">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
