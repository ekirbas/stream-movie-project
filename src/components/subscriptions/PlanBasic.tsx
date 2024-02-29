import React from "react";

const PlanBasic = () => {
  return (
    <div className="planStandardContainer">
      <div className="verticalContainer">
        <div className="title">Price</div>
        <div className="text">$9.99/Month</div>
      </div>
      <div className="verticalContainer">
        <div className="title">Free Trail</div>
        <div className="text">7 Days</div>
      </div>
      <div className="verticalContainer basis100">
        <div className="title">Content</div>
        <div className="text">
          Access to a wide selection of movies and shows, including some new
          releases.
        </div>
      </div>
      <div className="verticalContainer basis100">
        <div className="title">Devices</div>
        <div className="text">Watch on one device simultaneously</div>
      </div>
      <div className="verticalContainer">
        <div className="title">Cancel Anytime</div>
        <div className="text">Yes</div>
      </div>
      <div className="verticalContainer">
        <div className="title">HDR</div>
        <div className="text">No</div>
      </div>
      <div className="verticalContainer">
        <div className="title">Dolby Atmos</div>
        <div className="text">No</div>
      </div>
      <div className="verticalContainer">
        <div className="title">Ad - Free</div>
        <div className="text">No</div>
      </div>
      <div className="verticalContainer">
        <div className="title">Offline Viewing</div>
        <div className="text">No</div>
      </div>
      <div className="verticalContainer">
        <div className="title">Family Sharing</div>
        <div className="text">No</div>
      </div>
    </div>
  );
};

export default PlanBasic;
