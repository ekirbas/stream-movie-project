import React from "react";
import supportImage from "../assets/images/supportImage.png";
import ContactForm from "../components/ContactForm";
import Questions from "../components/Questions";
import TrialHorizontal from "../components/TrialHorizontal";

const Support = () => {
  return (
    <div className="support">
      <div className="contentContainer">
        <div className="contactArea">
          {/* contactLeft */}
          <div className="contactLeft">
            <h1>Welcome to our support page!</h1>
            <p>
              We're here to help you with any problems you may be having with
              our product.
            </p>
            <img src={supportImage} />
          </div>
          {/* contactRight */}
          <ContactForm />
          {/* Frequently Asked Questions */}
        </div>
        <Questions />
        <TrialHorizontal />
      </div>
    </div>
  );
};

export default Support;
