import React, { useEffect, useState } from "react";
import PlayBtnIcon from "../../assets/svgComp/PlayBtnIcon";
import AboutLogo from "../../assets/svgComp/AboutLogo";
import mixImage from "../../assets/images/mix.png";
import { HomeAboutAreaType } from "../../models/homeType";

const HomeAboutArea = (props: HomeAboutAreaType) => {
  const { windowHeight } = props;
  const [pageWidth, setPageWidth] = useState<number>(outerWidth);
  useEffect(() => {
    setPageWidth(outerWidth);
  }, []);
  return (
    <div
      className="homeAboutContainer"
      style={{ height: `${window.innerHeight}px` }}
    >
      <div className="homeImageDiv">
        <img src={mixImage} />
        <div className="fadeOutTop"></div>
        <div className="fadeOutBottom"></div>
        <div
          className="aboutIconArea"
          style={{ paddingBottom: `${windowHeight * 0.2}px` }}
        >
          <AboutLogo className="aboutLogo" />
        </div>
      </div>
      <div className="aboutTextArea">
        <h1>The Best Streaming Experience</h1>
        <p>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere.
          {pageWidth > 798
            ? " With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch."
            : ""}
        </p>
        <button className="watchButton">
          <PlayBtnIcon />
          Start Watching Now
        </button>
      </div>
    </div>
  );
};

export default HomeAboutArea;
