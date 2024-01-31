import React from "react";
import PopularContentContainer from "./PopularContentContainer";
import UpcomingContentContainer from "./UpcomingContentContainer";
import GenresContentContainer from "./GenresContentContainer";
import { useApiStore } from "../store/store";

const MovieAndShowSeriesArea = () => {
  const useApi = useApiStore();
  return (
    <fieldset className="fieldS">
      <legend>
        <div className="title">Series</div>
      </legend>

      <PopularContentContainer
        header="Populer Series"
        type="serie"
        data={useApi.popularSeries}
      />
      <PopularContentContainer
        header="Top Rated Series"
        type="serie"
        data={useApi.topRatedSeries}
      />
      <UpcomingContentContainer
        header="On The Air"
        type="serie"
        data={useApi.onTheAirSeries}
      />
      <GenresContentContainer
        data={useApi.genreSeries}
        type="genre-serie"
        header="Serie Genres"
      />
    </fieldset>
  );
};

export default MovieAndShowSeriesArea;
