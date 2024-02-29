import React, { useState } from "react";
import SubscriptionsTabsContent from "./SubscriptionsTabsContent";

const MobileTabsSubscriptions = () => {
  const [activeTab, setActiveTab] = useState<string>("standard");
  const handleBasicTab = () => {
    activeTab != "basic" && setActiveTab("basic");
  };
  const handleStandardTab = () => {
    activeTab != "standard" && setActiveTab("standard");
  };
  const handlePremiumTab = () => {
    activeTab != "premium" && setActiveTab("premium");
  };
  return (
    <>
      <div className="mobileTabsContainer">
        <button
          className={`mobileTab ${
            activeTab === "basic" ? "mobileTabActive" : ""
          }`}
          onClick={handleBasicTab}
        >
          Basic
        </button>
        <button
          className={`mobileTab ${
            activeTab === "standard" ? "mobileTabActive" : ""
          }`}
          onClick={handleStandardTab}
        >
          Standard
        </button>
        <button
          className={`mobileTab ${
            activeTab === "premium" ? "mobileTabActive" : ""
          }`}
          onClick={handlePremiumTab}
        >
          Premium
        </button>
      </div>
      <SubscriptionsTabsContent activeTab={activeTab} />
    </>
  );
};

export default MobileTabsSubscriptions;
