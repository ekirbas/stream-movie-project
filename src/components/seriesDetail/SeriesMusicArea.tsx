import React from "react";
import statikVariables from "../../store/statikVariables";
import { SeriesMusicAreaType } from "../../models/homeType";
import { CreateUniqKey } from "../../helpers/function";

const SeriesMusicArea = (props: SeriesMusicAreaType) => {
  const { music } = props;
  if (music && music.length !== 0) {
    return (
      <div className="directorArea">
        <div className="divTitle">Müzik</div>
        <div className="directorContainer">
          {music?.map((v) => {
            const uniqKey = CreateUniqKey();
            return (
              <div className="director" key={uniqKey}>
                {v.profile_path && (
                  <img
                    src={`${
                      statikVariables.imageBaseUrl +
                      statikVariables.imageSize500 +
                      v.profile_path
                    }`}
                  />
                )}

                {v.name ?? v.original_name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default SeriesMusicArea;
