import React, { useEffect, useState } from "react";
import PlansTable from "./PlansTable";
import MobileTabsSubscriptions from "./MobileTabsSubscriptions";

const PlansDetailArea = () => {
  const [pageWidth, setPageWidth] = useState<number>(outerWidth);
  useEffect(() => {
    setPageWidth(outerWidth);
  }, []);
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
      {pageWidth > 390 ? <PlansTable /> : <MobileTabsSubscriptions />}
    </div>
  );
};

export default PlansDetailArea;
