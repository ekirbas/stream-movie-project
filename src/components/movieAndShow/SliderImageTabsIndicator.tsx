import React, { forwardRef } from "react";
import LeftArrowIcon from "../../assets/svgComp/LeftArrowIcon";
import RightArrowIcon from "../../assets/svgComp/RightArrowIcon";

const SliderImageTabsIndicator = ({}, ref: any) => {
  const scrollLeft = () => {
    const refWidth = ref.current.offsetWidth;
    ref.current.scrollBy({
      left: -refWidth,
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  const scrollRight = () => {
    const refWidth = ref.current.offsetWidth;
    ref.current.scrollBy({
      left: refWidth,
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="sliderTabIndicatorContainer">
      <div className="arrowContainer" onClick={scrollLeft}>
        <LeftArrowIcon />
      </div>
      <div className="lineTabsContainer" style={{ width: "81px" }}>
        <div className="tab tabActive"></div>
        <div className="tab"></div>
        <div className="tab"></div>
        <div className="tab"></div>
      </div>
      <div className="arrowContainer" onClick={scrollRight}>
        <RightArrowIcon />
      </div>
    </div>
  );
};

export default forwardRef(SliderImageTabsIndicator);
