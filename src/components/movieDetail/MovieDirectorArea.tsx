import React from "react";
import { CreateUniqKey } from "../../helpers/function";
import statikVariables from "../../store/statikVariables";
import { MovieDirectorAreaType } from "../../models/homeType";

const MovieDirectorArea = (props: MovieDirectorAreaType) => {
  const { directors } = props;
  if (directors && directors.length !== 0) {
    return (
      <div className="directorArea">
        <div className="divTitle">Yönetmen</div>
        <div className="directorContainer">
          {directors?.map((v) => {
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

export default MovieDirectorArea;
