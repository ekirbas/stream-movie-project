import React from "react";
import statikVariables from "../../store/statikVariables";
import { SeriesWriterAreaType } from "../../models/homeType";
import { CreateUniqKey } from "../../helpers/function";

const SeriesWriterArea = (props: SeriesWriterAreaType) => {
  const { writer } = props;
  if (writer && writer.length !== 0) {
    return (
      <div className="directorArea">
        <div className="divTitle">Yazar</div>
        <div className="directorContainer">
          {writer?.map((v) => {
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

export default SeriesWriterArea;
