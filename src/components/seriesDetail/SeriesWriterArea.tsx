import React from "react";
import { CrewSeries } from "../../models/storeType";
import statikVariables from "../../store/statikVariables";
import { SeriesWriterAreaType } from "../../models/homeType";

const SeriesWriterArea = (props: SeriesWriterAreaType) => {
  const { writer } = props;
  if (writer && writer.length !== 0) {
    return (
      <div className="directorArea">
        <div className="divTitle">Yazar</div>
        <div className="directorContainer">
          {writer?.map((v: CrewSeries) => {
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

export default SeriesWriterArea;
