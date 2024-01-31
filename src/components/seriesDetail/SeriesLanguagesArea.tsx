import React from "react";
import LangIcon from "../../assets/images/LangIcon";
import { SeriesLanguagesAreaType } from "../../models/homeType";

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
          return <div className="languages">{v.english_name}</div>;
        })}
      </div>
    </div>
  );
};

export default SeriesLanguagesArea;
