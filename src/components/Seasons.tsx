import React, { useEffect, useState } from "react";
import Episodes from "./Episodes";
import { SeasonsType } from "../models/homeType";
import BottomArrowIcon from "../assets/images/BottomArrowIcon";
import { useApiStore } from "../store/store";
import SeasonItem from "./SeasonItem";

const Seasons = (props: SeasonsType) => {
  const { seasons, series_id } = props;

  return (
    <div className="seasonsArea">
      <div className="seasonsTitle">Season and Episodes</div>
      {seasons?.map((v: any) => {
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
