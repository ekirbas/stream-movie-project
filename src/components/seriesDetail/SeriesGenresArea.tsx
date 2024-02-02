import React from "react";
import GenreIcon from "../../assets/svgComp/GenreIcon";
import { Genre } from "../../models/storeType";
import { SeriesGenresAreaType } from "../../models/homeType";

const SeriesGenresArea = (props: SeriesGenresAreaType) => {
  const { data } = props;
  return (
    <div className="genresArea">
      <div className="divTitle">
        <GenreIcon />
        Türler
      </div>
      <div className="genresContainer">
        {data?.genres.map((v: Genre) => {
          return <div className="genres">{v.name}</div>;
        })}
      </div>
    </div>
  );
};

export default SeriesGenresArea;
