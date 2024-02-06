import React, { useState } from "react";
import BottomArrowIcon from "../../assets/svgComp/BottomArrowIcon";
import { useApiStore } from "../../store/store";
import { SeasonItemType } from "../../models/homeType";
import Episodes from "./Episodes";
import { EpisodeDetailSeason } from "../../models/storeType";

const SeasonItem = (props: SeasonItemType) => {
  const { series_id, season_number, episode_count } = props;
  const [activeSeason, setActiveSeason] = useState(false);
  const [episodes, setEpisodes] = useState<EpisodeDetailSeason[]>([]);
  const fecthDetailSeason = useApiStore((state) => state.fecthDetailSeason);
  const handleSeasonClick = async (
    series_id: number,
    season_number: number
  ) => {
    const response: EpisodeDetailSeason[] = await fecthDetailSeason(
      series_id,
      season_number
    );
    setEpisodes(response ?? []);
    setActiveSeason(!activeSeason);
  };

  return (
    <div className="seasonContainer">
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
