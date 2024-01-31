import React from "react";
import { CrewSeries } from "../../models/storeType";
import statikVariables from "../../store/statikVariables";
import { SeriesDirectorAreaType } from "../../models/homeType";

const SeriesDirectorArea = (props: SeriesDirectorAreaType) => {
  const { directors } = props;
  if (directors && directors.length !== 0) {
    return (
      <div className="directorArea">
        <div className="divTitle">Yönetmen</div>
        <div className="directorContainer">
          {directors?.map((v: CrewSeries) => {
            return (
              <div className="director">
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
