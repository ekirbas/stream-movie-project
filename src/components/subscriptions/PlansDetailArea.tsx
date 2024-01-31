import React from "react";
import PlansTable from "./PlansTable";

const PlansDetailArea = () => {
  return (
    <div className="plansDetailArea">
      <div className="topContainer">
        <div className="plansDetailTitle">
          Compare our plans and find the right one for you
        </div>
        <div className="plansDetailText">
          StreamVibe offers three different plans to fit your needs: Basic,
          Standard, and Premium. Compare the features of each plan and choose
          the one that's right for you.
        </div>
      </div>
      <PlansTable />
    </div>
  );
};

export default PlansDetailArea;
