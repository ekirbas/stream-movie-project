import React from "react";
import LangIcon from "../../assets/svgComp/LangIcon";
import { CreateUniqKey } from "../../helpers/function";
import { MovieLanguagesAreaType } from "../../models/homeType";

const MovieLanguagesArea = (props: MovieLanguagesAreaType) => {
  const { data } = props;
  return (
    <div className="languagesArea">
      <div className="divTitle">
        <LangIcon />
        Konuşulan Diller
      </div>
      <div className="languagesContainer">
        {data?.spoken_languages.map((v) => {
          const uniqId = CreateUniqKey();
          return (
            <div className="languages" key={uniqId}>
              {v.english_name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieLanguagesArea;
