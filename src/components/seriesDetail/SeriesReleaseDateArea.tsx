import React from "react";
import DateIcon from "../../assets/images/DateIcon";
import dayjs from "dayjs";
import { SeriesReleaseDateAreaType } from "../../models/homeType";

const SeriesReleaseDateArea = (props: SeriesReleaseDateAreaType) => {
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

export default SeriesReleaseDateArea;
