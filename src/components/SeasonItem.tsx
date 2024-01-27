import React, { useState } from "react";
import BottomArrowIcon from "../assets/images/BottomArrowIcon";
import { useApiStore } from "../store/store";
import { SeasonItemType } from "../models/homeType";
import Episodes from "./Episodes";
import { CreateUniqKey } from "../helpers/function";

const SeasonItem = (props: SeasonItemType) => {
  const { series_id, season_number, episode_count } = props;

  const [activeSeason, setActiveSeason] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  const useApi = useApiStore();
  const handleSeasonClick = async (
    series_id: string,
    season_number: string
  ) => {
    const response = await useApi.fecthDetailSeason(series_id, season_number);
    setEpisodes(response.data.episodes ?? []);
    setActiveSeason(!activeSeason);
  };
  const uniqId = CreateUniqKey();
  return (
    <div className="seasonContainer" key={uniqId}>
      <div className="titleContainer">
        <div className="seasonsTitle">
          Season
          {season_number > 9 ? season_number : ` 0${season_number}`}
        </div>
        <div className="episodesTotal">{episode_count} Episodes</div>
        <button
          className="hideArrow"
          onClick={() => handleSeasonClick(series_id, season_number)}
        >
          <BottomArrowIcon />
        </button>
      </div>
      {activeSeason ? <Episodes detailSeason={episodes} /> : null}
    </div>
  );
};

export default SeasonItem;
