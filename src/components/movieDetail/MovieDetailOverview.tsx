import React from "react";
import { MovieDetailOverviewType } from "../../models/homeType";

const MovieDetailOverview = (props: MovieDetailOverviewType) => {
  const { data } = props;
  return (
    <div className="overview">
      <div className="divTitle">Açıklama</div>
      <div>{data?.overview}</div>
    </div>
  );
};

export default MovieDetailOverview;
