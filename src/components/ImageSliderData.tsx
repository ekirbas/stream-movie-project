import React from "react";
import { ImageSliderDataType } from "../models/homeType";
import statikVariables from "../store/statikVariables";
import { CreateUniqKey } from "../helpers/function";
import PlayBtnIcon from "../assets/images/PlayBtnIcon";
import PlusIcon from "../assets/images/PlusIcon";
import LikeICon from "../assets/images/LikeICon";
import VolumeIcon from "../assets/images/VolumeIcon";
import LeftArrowIcon from "../assets/images/LeftArrowIcon";
import RightArrowIcon from "../assets/images/RightArrowIcon";

const ImageSliderData = (props: ImageSliderDataType) => {
  const { data } = props;
  return (
    <div className="sliderImageContainer">
      {data?.map((v: any) => {
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
          </div>
        );
      })}
      {/* sliderNavContainer gezinme çubuğu ----- Daha sonra yapılacak */}
      <div className="sliderNavContainer">
        <div className="leftBtn">
          <LeftArrowIcon />
        </div>
        <div className="centerBtn">---</div>
        <div className="rightBtn">
          <RightArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default ImageSliderData;
