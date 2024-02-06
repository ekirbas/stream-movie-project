import React from "react";
import GenresContentContainer from "../GenresContentContainer";
import PopularContentContainer from "../PopularContentContainer";
import UpcomingContentContainer from "../UpcomingContentContainer";
import { useStoreMulti } from "../../helpers/useStoreMulti";

const HomeSerieArea = () => {
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
      <GenresContentContainer
        data={genreSeries}
        header="Serie Genres"
        type="genre-serie"
      />
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
    </fieldset>
  );
};

export default HomeSerieArea;
