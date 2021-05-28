import React from "react";
import "./ContactUs.scss";

const ContactUS = () => {
  return (
    <div className="contact-us">
      <div className="contact-us-img">
        <img src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/ae30a308cbe35550a1ff83d9/wqe-min.jpg"></img>
      </div>
      <div>
        <div className="contact-us-form">
          <h3>CONTACT US</h3>
          <input placeholder="Enter your Name"></input>
          <input placeholder="Enter a valid email address"></input>
          <textarea placeholder="Enter your Message"></textarea>
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
