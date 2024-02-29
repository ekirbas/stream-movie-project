import React, { useRef } from "react";
import { ImageSliderDataType } from "../../models/homeType";
import statikVariables from "../../store/statikVariables";
import { CreateUniqKey } from "../../helpers/function";
import PlayBtnIcon from "../../assets/svgComp/PlayBtnIcon";
import PlusIcon from "../../assets/svgComp/PlusIcon";
import LikeICon from "../../assets/svgComp/LikeICon";
import VolumeIcon from "../../assets/svgComp/VolumeIcon";
import SliderImageTabsIndicator from "./SliderImageTabsIndicator";

const ImageSliderData = (props: ImageSliderDataType) => {
  const { data } = props;
  const sliderImageContainerRef = useRef(null);
  return (
    <div className="sliderImageContainer" ref={sliderImageContainerRef}>
      {data?.map((v) => {
        const uniqKey = CreateUniqKey();
        return (
          <div
            className="imageContainer"
            key={uniqKey}
            style={{
              backgroundImage: `url(${
                statikVariables.imageBaseUrl +
                statikVariables.imageSizeOriginal +
                v.backdrop_path
              })`,
            }}
          >
            <div className="dataInfoContainer">
              <h1>{v.title}</h1>
              <p>{v.overview} </p>
              <div className="infoButtons">
                <button className="playBtn">
                  <PlayBtnIcon />
                  <span>Play Now</span>
                </button>
                <button className="actionBtn">
                  <PlusIcon width="100%" height="100%" />
                </button>
                <button className="actionBtn">
                  <LikeICon />
                </button>
                <button className="actionBtn">
                  <VolumeIcon />
                </button>
              </div>
            </div>
            <div className="sliderImageFadeOut"></div>
            {outerWidth > 390 && (
              <SliderImageTabsIndicator ref={sliderImageContainerRef} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSliderData;
