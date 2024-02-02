import React from "react";
import { SeasonsType } from "../../models/homeType";
import SeasonItem from "./SeasonItem";

const Seasons = (props: SeasonsType) => {
  const { seasons, series_id } = props;

  return (
    <div className="seasonsArea">
      <div className="seasonsTitle">Season and Episodes</div>
      {seasons?.map((v) => {
        return (
          <SeasonItem
            series_id={series_id}
            episode_count={v.episode_count}
            season_number={v.season_number}
          />
        );
      })}
    </div>
  );
};

export default Seasons;
