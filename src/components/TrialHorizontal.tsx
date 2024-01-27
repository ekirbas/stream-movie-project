import React from "react";
import trialHorizontal from "../assets/images/trialHorizontal.png";

const TrialHorizontal = () => {
  return (
    <div
      className="trialHorizontal"
      style={{ backgroundImage: `url(${trialHorizontal})` }}
    >
      <div className="horizontalContainer">
        <div className="horizontalText">
          <div className="horizontalBigText">Start your free trial today!</div>
          <div className="horizontalSmallText">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </div>
        </div>
        <div className="horizontalButton">
          <button>Start a Free Trial</button>
        </div>
      </div>
      <div className="fadeOutHorizontal"></div>
    </div>
  );
};

export default TrialHorizontal;
