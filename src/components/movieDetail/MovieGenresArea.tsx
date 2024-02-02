import React from "react";
import GenreIcon from "../../assets/svgComp/GenreIcon";
import { CreateUniqKey } from "../../helpers/function";
import { MovieGenresAreaType } from "../../models/homeType";

const MovieGenresArea = (props: MovieGenresAreaType) => {
  const { data } = props;
  return (
    <div className="genresArea">
      <div className="divTitle">
        <GenreIcon />
        Türler
      </div>
      <div className="genresContainer">
        {data?.genres.map((v) => {
          const uniqId = CreateUniqKey();
          return (
            <div className="genres" key={uniqId}>
              {v.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieGenresArea;
