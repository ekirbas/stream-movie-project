import React from "react";
import Questions from "../components/supports/Questions";
import TrialHorizontal from "../components/TrialHorizontal";
import ContactArea from "../components/supports/ContactArea";

const Support = () => {
  return (
    <div className="support">
      <div className="contentContainer">
        <ContactArea />
        <Questions />
        <TrialHorizontal />
      </div>
    </div>
  );
};

export default Support;
