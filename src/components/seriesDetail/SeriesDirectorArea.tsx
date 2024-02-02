import React from "react";
import statikVariables from "../../store/statikVariables";
import { SeriesDirectorAreaType } from "../../models/homeType";
import { CreateUniqKey } from "../../helpers/function";

const SeriesDirectorArea = (props: SeriesDirectorAreaType) => {
  const { directors } = props;
  if (directors && directors.length !== 0) {
    return (
      <div className="directorArea">
        <div className="divTitle">Yönetmen</div>
        <div className="directorContainer">
          {directors?.map((v) => {
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

export default SeriesDirectorArea;
