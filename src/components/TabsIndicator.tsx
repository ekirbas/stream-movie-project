import React, { forwardRef, useRef } from "react";
import LeftArrowIcon from "../assets/images/LeftArrowIcon";
import RightArrowIcon from "../assets/images/RightArrowIcon";

const TabsIndicator = ({}, ref: any) => {
  const scrollLeft = () => {
    /*  ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    }); */
    /* 
      const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll('li > img')[index];
  */
    console.log("ref", ref.current.offsetWidth);
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
    <div className="tabIndicatorContainer">
      <div className="arrowContainer" onClick={scrollLeft}>
        <LeftArrowIcon />
      </div>
      <div className="lineTabsContainer" style={{ width: "81px" }}>
        <div className="tab tabActive"></div>
        <div className="tab"></div>
        <div className="tab"></div>
        <div className="tab"></div>
      </div>
      <div className="arrowContainer">
        <RightArrowIcon onClick={scrollRight} />
      </div>
    </div>
  );
};

export default forwardRef(TabsIndicator);
