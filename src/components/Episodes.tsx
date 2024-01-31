import React from "react";
import { EpisodesType } from "../models/homeType";
import statikVariables from "../store/statikVariables";
import { CreateUniqKey } from "../helpers/function";
import { EpisodeDetailSeason } from "../models/storeType";

const Episodes = (props: EpisodesType) => {
  const { detailSeason } = props;
  return detailSeason.map((v: EpisodeDetailSeason) => {
    const uniqId = CreateUniqKey();

    return (
      <div className="episodesArea" key={uniqId}>
        <div className="episodesContainer">
          <div className="episodNumber">
            {v.episode_number > 9 ? v.episode_number : `0${v.episode_number}`}
          </div>
          <div className="episodeImageArea">
            <img
              src={`${statikVariables.imageBaseUrl}${statikVariables.imageSizeOriginal}${v.still_path}`}
            />
            <div className="episodeNameArea">
              <div className="episodeName">
                {v?.name}
                <div className="episodeDuration">{v.runtime}</div>
              </div>
              <div className="episodeOverview">{v.overview}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Episodes;
