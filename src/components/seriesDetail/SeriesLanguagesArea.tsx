import React from "react";
import LangIcon from "../../assets/svgComp/LangIcon";
import { SeriesLanguagesAreaType } from "../../models/homeType";
import { CreateUniqKey } from "../../helpers/function";

const SeriesLanguagesArea = (props: SeriesLanguagesAreaType) => {
  const { data } = props;
  return (
    <div className="languagesArea">
      <div className="divTitle">
        <LangIcon />
        Konuşulan Diller
      </div>
      <div className="languagesContainer">
        {data?.spoken_languages.map((v) => {
          const uniqKey = CreateUniqKey();
          return (
            <div className="languages" key={uniqKey}>
              {v.english_name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeriesLanguagesArea;
