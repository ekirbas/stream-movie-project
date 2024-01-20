import React, { useEffect, useState } from "react";
import { GenresContentContainerType } from "../models/homeType";
import { useApiStore } from "../store/store";
import staticVariables from "../store/statikVariables";
import RightArrowIcon from "../assets/images/rightArrowIcon";
import { CreateUniqKey } from "../helpers/function";

const GenresContentContainer = (props: GenresContentContainerType) => {
  const { data, header } = props;
  const useApi = useApiStore();

  /*  her tür için 4 filmin kapak fotoğrafını alma 
  const [genreData, setGenreData] = useState<any>({});

  const genreImages = async () => {
    let dataObject = {};
    for (let i = 0; i < data?.length; i++) {
      const v = data[i];
      const response: any = await useApi.fecthGenreDescVoteMovie(`${v.id}`);
      let imagesArr = [
        response[0].poster_path,
        response[1].poster_path,
        response[2].poster_path,
        response[3].poster_path,
      ];
      dataObject = { ...dataObject, [v.id]: imagesArr };
    }
    setGenreData(dataObject);
  };
  useEffect(() => {
    genreImages();
  }, [data]); */

  return (
    <div>
      <div className="headerContainer">
        <div className="header">{header}</div>
        <div className="tabIndicator">--</div>
      </div>
      <div className="dataContainer">
        {data?.map((v: any) => {
          const uniqKey = CreateUniqKey();
          return (
            <div className="genreData" key={uniqKey}>
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
