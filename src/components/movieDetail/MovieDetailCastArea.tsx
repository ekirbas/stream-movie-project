import React, { useRef } from "react";
import TabsIndicator from "../TabsIndicator";
import statikVariables from "../../store/statikVariables";
import { CreateUniqKey } from "../../helpers/function";
import { MovieDetailCastAreaType } from "../../models/homeType";

const MovieDetailCastArea = (props: MovieDetailCastAreaType) => {
  const { castData } = props;
  const castContainerRef = useRef(null);
  return (
    <div className="castArea">
      <div className="topContainer">
        <div className="divTitle">Cast</div>
        {outerWidth > 390 && <TabsIndicator ref={castContainerRef} />}
      </div>
      {/* castContainer */}
      <div className="castContainer" ref={castContainerRef}>
        {castData?.cast
          .filter((v) => v.profile_path != null)
          .map((v) => {
            const uniqId = CreateUniqKey();
            return (
              <div className="castCard" key={uniqId}>
                <img
                  src={`${
                    statikVariables.imageBaseUrl +
                    statikVariables.imageSize500 +
                    v.profile_path
                  }`}
                />
                <div>{v.name}</div>
                <div className="characterText">{v.character}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MovieDetailCastArea;
