import React from "react";
import GenreIcon from "../../assets/svgComp/GenreIcon";
import { SeriesGenresAreaType } from "../../models/homeType";
import { CreateUniqKey } from "../../helpers/function";

const SeriesGenresArea = (props: SeriesGenresAreaType) => {
  const { data } = props;
  return (
    <div className="genresArea">
      <div className="divTitle">
        <GenreIcon />
        Türler
      </div>
      <div className="genresContainer">
        {data?.genres.map((v) => {
          const uniqKey = CreateUniqKey();
          return (
            <div className="genres" key={uniqKey}>
              {v.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeriesGenresArea;
