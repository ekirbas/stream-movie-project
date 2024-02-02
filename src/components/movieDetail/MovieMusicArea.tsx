import React from "react";
import { CreateUniqKey } from "../../helpers/function";
import statikVariables from "../../store/statikVariables";
import { MovieMusicAreaType } from "../../models/homeType";

const MovieMusicArea = (props: MovieMusicAreaType) => {
  const { music } = props;
  if (music && music.length !== 0) {
    return (
      <div className="directorArea">
        <div className="divTitle">Müzik</div>
        <div className="directorContainer">
          {music?.map((v) => {
            const uniqId = CreateUniqKey();
            return (
              <div className="director" key={uniqId}>
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

export default MovieMusicArea;
