import React, { useState } from "react";
import TabsContent from "./TabsContent";
import { MobileTabsHomeType } from "../../models/homeType";

const MobileTabsHome = (props: MobileTabsHomeType) => {
  const { page, activeTab_initial } = props;
  const [activeTab, setActiveTab] = useState<string>(activeTab_initial);
  const handleMoviesTab = () => {
    page === "home"
      ? activeTab != "movies" && setActiveTab("movies")
      : activeTab != "movies2" && setActiveTab("movies2");
  };
  const handleSeriesTab = () => {
    page === "home"
      ? activeTab != "series" && setActiveTab("series")
      : activeTab != "series2" && setActiveTab("series2");
  };
  return (
    <>
      <div className="mobileTabsContainer">
        <button
          className={`mobileTab ${
            activeTab === "movies" || activeTab === "movies2"
              ? "mobileTabActive"
              : ""
          }`}
          onClick={handleMoviesTab}
        >
          Movies
        </button>
        <button
          onClick={handleSeriesTab}
          className={`mobileTab ${
            activeTab === "series" || activeTab === "series2"
              ? "mobileTabActive"
              : ""
          }`}
        >
          Series
        </button>
      </div>
      <TabsContent activeTab={activeTab} />
    </>
  );
};

export default MobileTabsHome;
