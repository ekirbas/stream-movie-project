import React from "react";
import ContactForm from "../ContactForm";
import supportImage from "../../assets/images/supportImage.png";

const ContactArea = () => {
  return (
    <div className="contactArea">
      {/* contactLeft */}
      <div className="contactLeft">
        <h1>Welcome to our support page!</h1>
        <p>
          We're here to help you with any problems you may be having with our
          product.
        </p>
        <img src={supportImage} />
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactArea;
