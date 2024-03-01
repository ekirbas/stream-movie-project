import React, { useEffect, useState } from "react";
import statikVariables from "../store/statikVariables";
import { DetailImageType } from "../models/homeType";
import PlayBtnIcon from "../assets/svgComp/PlayBtnIcon";
import PlusIcon from "../assets/svgComp/PlusIcon";
import LikeICon from "../assets/svgComp/LikeICon";
import VolumeIcon from "../assets/svgComp/VolumeIcon";

const DetailImage = (props: DetailImageType) => {
  const { title, overview, url } = props;
  const [pageWidth, setPageWidth] = useState<number>(outerWidth);
  useEffect(() => {
    setPageWidth(outerWidth);
  }, []);

  return (
    <div
      className="detailImageContainer"
      style={{
        backgroundImage: `url(${
          url
            ? statikVariables.imageBaseUrl +
              statikVariables.imageSizeOriginal +
              url
            : ""
        })`,
      }}
    >
      <div className="dataInfoContainer">
        <h1>{title}</h1>
        {pageWidth > 390 ? <p>{overview} </p> : null}
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
};

export default DetailImage;
