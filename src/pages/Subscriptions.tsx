import React from "react";
import TrialHorizontal from "../components/TrialHorizontal";
import PlansArea from "../components/subscriptions/PlansArea";
import PlansDetailArea from "../components/subscriptions/PlansDetailArea";

const Subscriptions = () => {
  return (
    <div className="subscriptions">
      <div className="contentContainer">
        <PlansArea />
        <PlansDetailArea />
        <TrialHorizontal />
      </div>
    </div>
  );
};

export default Subscriptions;
