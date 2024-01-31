import React, { useRef } from "react";
import { ImageSliderDataType } from "../models/homeType";
import statikVariables from "../store/statikVariables";
import { CreateUniqKey } from "../helpers/function";
import PlayBtnIcon from "../assets/images/PlayBtnIcon";
import PlusIcon from "../assets/images/PlusIcon";
import LikeICon from "../assets/images/LikeICon";
import VolumeIcon from "../assets/images/VolumeIcon";
import SliderImageTabsIndicator from "./SliderImageTabsIndicator";
import { ResultPopularMovie } from "../models/storeType";

const ImageSliderData = (props: ImageSliderDataType) => {
  const { data } = props;
  const sliderImageContainerRef = useRef(null);
  return (
    <div className="sliderImageContainer" ref={sliderImageContainerRef}>
      {data?.map((v: ResultPopularMovie) => {
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
            <SliderImageTabsIndicator ref={sliderImageContainerRef} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageSliderData;
