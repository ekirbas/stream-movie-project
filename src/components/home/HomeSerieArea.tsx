import React from "react";
import GenresContentContainer from "../GenresContentContainer";
import PopularContentContainer from "../PopularContentContainer";
import UpcomingContentContainer from "../UpcomingContentContainer";
import { useApiStore } from "../../store/store";

const HomeSerieArea = () => {
  const useApi = useApiStore();
  return (
    <fieldset className="fieldS">
      <legend>
        <div className="title">Series</div>
      </legend>
      <GenresContentContainer
        data={useApi.genreSeries}
        header="Serie Genres"
        type="genre-serie"
      />
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
    </fieldset>
  );
};

export default HomeSerieArea;
