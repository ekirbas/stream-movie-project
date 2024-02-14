import React, { useRef } from "react";
import { GenresContentContainerType } from "../models/homeType";
import RightArrowIcon from "../assets/svgComp/RightArrowIcon";
import { CreateUniqKey } from "../helpers/function";
import { useNavigate } from "react-router";
import TabsIndicator from "./TabsIndicator";

const GenresContentContainer = (props: GenresContentContainerType) => {
  const { data, header, type } = props;
  const navigate = useNavigate();
  const dataContainerRef = useRef(null);

  const handleClick = (id: number, type: string) => {
    switch (type) {
      case "movie":
        navigate(`/movie/${id}`);
        break;
      case "serie":
        navigate(`/serie/${id}`);
        break;
      case "genre-serie":
        /* navigate(`/serie/${id}`); */
        break;
      case "genre-movie":
        /* navigate(`/movie/${id}`); */
        break;
    }
  };

  return (
    <div>
      <div className="headerContainer">
        <div className="header">{header}</div>
        <TabsIndicator ref={dataContainerRef} />
      </div>
      <div className="dataContainer gap30" ref={dataContainerRef}>
        {data?.map((v) => {
          const uniqKey = CreateUniqKey();
          return (
            <div
              className="genreData"
              key={uniqKey}
              onClick={() => {
                handleClick(v.id, type);
              }}
            >
              <div className="dataImageContainer">
                <img
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "./images/dram.png";
                  }}
                  src={`./images/${v.name.toLocaleLowerCase()}.png`}
                />
                <div className="fadeOut"></div>
              </div>
              <div className="bottomArea">
                {v.name}
                <div className="bottomBtn">
                  <RightArrowIcon />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenresContentContainer;
