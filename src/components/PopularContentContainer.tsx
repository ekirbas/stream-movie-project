import React, { useEffect, useRef, useState } from "react";
import { PopularContentContainerType } from "../models/homeType";
import { CreateUniqKey } from "../helpers/function";
import statikVariables from "../store/statikVariables";
import ImdbIcon from "../assets/svgComp/ImdbIcon";
import { useNavigate } from "react-router";
import TabsIndicator from "./TabsIndicator";
import { ResultPopularMovie } from "../models/storeType";

const PopularContentContainer = (props: PopularContentContainerType) => {
  const { data, header, type } = props;
  const navigate = useNavigate();
  const itemRef = useRef(null);
  const [pageWidth, setPageWidth] = useState<number>(outerWidth);
  useEffect(() => {
    setPageWidth(outerWidth);
  }, []);
  const handleClick = (id: number, type: string) => {
    switch (type) {
      case "movie":
        navigate(`/movie/${id}`);
        break;
      case "serie":
        navigate(`/serie/${id}`);
        break;
      case "genre-serie":
        navigate(`/serie/${id}`);
        break;
      case "genre-movie":
        navigate(`/movie/${id}`);
        break;
    }
  };
  return (
    <div>
      <div className="headerContainer">
        <div className="header">{header}</div>
        {pageWidth > 390 && <TabsIndicator ref={itemRef} />}
      </div>
      <div className="dataContainer" ref={itemRef}>
        {data?.map((v: ResultPopularMovie) => {
          const uniqKey = CreateUniqKey();
          return (
            <div
              className="genreData popularData"
              key={uniqKey}
              onClick={() => handleClick(v.id, type)}
            >
              <div className="dataImageContainer">
                <img
                  src={
                    v.poster_path
                      ? `${
                          statikVariables.imageBaseUrl +
                          statikVariables.imageSize500 +
                          v.poster_path
                        }`
                      : ""
                  }
                />
                <div className="voteDiv">
                  <ImdbIcon width="100%" height="100%" />
                  <span>{v.vote_average.toFixed(1)}</span>
                </div>
              </div>
              <div className="bottomArea bottomAreaPopular">
                {v.title ?? v.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularContentContainer;
