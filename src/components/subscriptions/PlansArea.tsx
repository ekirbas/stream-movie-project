import React from "react";
import PlansItemsContainer from "./PlansItemsContainer";

const PlansArea = () => {
  return (
    <div className="plansArea">
      {/* topContainer */}
      <div className="topContainer">
        <div className="textContainer">
          <div className="topTitle">Choose the plan that's right for you</div>
          <div className="topText">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </div>
        </div>
        <div className="tabs">Monthly</div>
      </div>
      <PlansItemsContainer />
    </div>
  );
};

export default PlansArea;
