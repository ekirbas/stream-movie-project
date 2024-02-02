import React from "react";
import DateIcon from "../../assets/svgComp/DateIcon";
import dayjs from "dayjs";
import { MovieReleaseDateType } from "../../models/homeType";

const MovieReleaseDate = (props: MovieReleaseDateType) => {
  const { data } = props;
  return (
    <div>
      <div className="divTitle">
        <DateIcon />
        Çıkış Tarihi
      </div>
      <div className="releaseDate">
        {dayjs(data?.release_date).format("DD.MM.YYYY")}
      </div>
    </div>
  );
};

export default MovieReleaseDate;
