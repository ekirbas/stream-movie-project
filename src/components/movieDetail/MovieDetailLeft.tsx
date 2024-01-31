import React, { useRef } from "react";
import statikVariables from "../../store/statikVariables";
import TabsIndicator from "../TabsIndicator";
import { Cast } from "../../models/storeType";
import { MovieDetailLeftType } from "../../models/homeType";
import { CreateUniqKey } from "../../helpers/function";

const MovieDetailLeft = (props: MovieDetailLeftType) => {
  const { data, castData } = props;
  const castContainerRef = useRef(null);

  return (
    <div className="detailLeft">
      {/* overview */}
      <div className="overview">
        <div className="divTitle">Açıklama</div>
        <div>{data?.overview}</div>
      </div>
      {/* castArea */}
      <div className="castArea">
        <div className="topContainer">
          <div className="divTitle">Cast</div>
          <TabsIndicator ref={castContainerRef} />
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
    </div>
  );
};

export default MovieDetailLeft;
