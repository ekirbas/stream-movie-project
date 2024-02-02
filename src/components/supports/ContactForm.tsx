import React from "react";

const ContactForm = () => {
  return (
    <div className="contactRight">
      <div className="horizontalContainer">
        <div className="verticalContainer">
          <div className="titleDiv">First Name</div>
          <input className="inpt" placeholder="Enter First Name" />
        </div>
        <div className="verticalContainer">
          <div className="titleDiv">Last Name</div>
          <input className="inpt" placeholder="Enter Last Name" />
        </div>
      </div>
      <div className="horizontalContainer">
        <div className="verticalContainer">
          <div className="titleDiv">Email</div>
          <input className="inpt" type="email" placeholder="Enter your Email" />
        </div>
        <div className="verticalContainer">
          <div className="titleDiv">Phone Number</div>
          <input className="inpt" placeholder="+(55)-555 555 55 55" />
        </div>
      </div>
      <div className="verticalContainer">
        <div className="titleDiv">Message</div>
        <textarea className="inpt " placeholder="Enter Last Name" rows={4} />
      </div>
      <div className="horizontalContainer">
        <button className="sendButton">Send Message</button>
      </div>
    </div>
  );
};

export default ContactForm;
