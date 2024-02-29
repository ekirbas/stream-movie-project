import React, { useRef } from "react";
import TabsIndicator from "../TabsIndicator";
import statikVariables from "../../store/statikVariables";
import { CreateUniqKey } from "../../helpers/function";
import { CastAreaType } from "../../models/homeType";

const CastArea = (props: CastAreaType) => {
  const { castData } = props;
  const castContainerRef = useRef(null);

  return (
    <div className="castArea">
      <div className="topContainer">
        <div className="divTitle">Cast</div>
        {outerWidth > 390 && <TabsIndicator ref={castContainerRef} />}
      </div>
      <div className="castContainer" ref={castContainerRef}>
        {castData?.cast.map((v) => {
          const uniqId = CreateUniqKey();
          return (
            v.profile_path && (
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
            )
          );
        })}
      </div>
    </div>
  );
};

export default CastArea;
