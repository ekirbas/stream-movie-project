import React from "react";
import { UpcomingContentContainerType } from "../models/homeType";
import { CreateUniqKey } from "../helpers/function";
import statikVariables from "../store/statikVariables";
import ImdbIcon from "../assets/images/ImdbIcon";
import ClockIcon from "../assets/images/ClockIcon";
import dayjs from "dayjs";
const UpcomingContentContainer = (props: UpcomingContentContainerType) => {
  const { data, header } = props;

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
            <div className="genreData popularData" key={uniqKey}>
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
                {v.release_date ? (
                  <div className="dateDiv">
                    <ClockIcon width={20} height={20} />
                    <span>{dayjs(v.release_date).format("DD.MM.YY")}</span>
                  </div>
                ) : (
                  ""
                )}
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

export default UpcomingContentContainer;
