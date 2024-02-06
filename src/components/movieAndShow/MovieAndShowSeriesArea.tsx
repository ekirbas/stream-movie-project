import React from "react";
import PopularContentContainer from "../PopularContentContainer";
import UpcomingContentContainer from "../UpcomingContentContainer";
import GenresContentContainer from "../GenresContentContainer";
import { useStoreMulti } from "../../helpers/useStoreMulti";

const MovieAndShowSeriesArea = () => {
  const { genreSeries, popularSeries, topRatedSeries, onTheAirSeries } =
    useStoreMulti(
      "genreSeries",
      "popularSeries",
      "topRatedSeries",
      "onTheAirSeries"
    );
  return (
    <fieldset className="fieldS">
      <legend>
        <div className="title">Series</div>
      </legend>

      <PopularContentContainer
        header="Populer Series"
        type="serie"
        data={popularSeries}
      />
      <PopularContentContainer
        header="Top Rated Series"
        type="serie"
        data={topRatedSeries}
      />
      <UpcomingContentContainer
        header="On The Air"
        type="serie"
        data={onTheAirSeries}
      />
      <GenresContentContainer
        data={genreSeries}
        type="genre-serie"
        header="Serie Genres"
      />
    </fieldset>
  );
};

export default MovieAndShowSeriesArea;
