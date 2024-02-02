import React from "react";
import { CreateUniqKey } from "../../helpers/function";
import statikVariables from "../../store/statikVariables";
import { MovieWriterAreaType } from "../../models/homeType";

const MovieWriterArea = (props: MovieWriterAreaType) => {
  const { writer } = props;
  if (writer && writer.length !== 0) {
    return (
      <div className="directorArea">
        <div className="divTitle">Yazar</div>
        <div className="directorContainer">
          {writer?.map((v) => {
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

export default MovieWriterArea;
