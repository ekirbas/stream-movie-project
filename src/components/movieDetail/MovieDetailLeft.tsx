import React from "react";
import { MovieDetailLeftType } from "../../models/homeType";
import MovieDetailOverview from "./MovieDetailOverview";
import MovieDetailCastArea from "./MovieDetailCastArea";

const MovieDetailLeft = (props: MovieDetailLeftType) => {
  const { data, castData } = props;
  return (
    <div className="detailLeft">
      <MovieDetailOverview data={data} />
      <MovieDetailCastArea castData={castData} />
    </div>
  );
};

export default MovieDetailLeft;
