import React, { useEffect, useRef, useState } from "react";
import TabsIndicator from "../TabsIndicator";
import statikVariables from "../../store/statikVariables";
import { CreateUniqKey } from "../../helpers/function";
import { CastAreaType } from "../../models/homeType";

const CastArea = (props: CastAreaType) => {
  const { castData } = props;
  const castContainerRef = useRef(null);
  const [pageWidth, setPageWidth] = useState<number>(outerWidth);
  useEffect(() => {
    setPageWidth(outerWidth);
  }, []);
  return (
    <div className="castArea">
      <div className="topContainer">
        <div className="divTitle">Cast</div>
        {pageWidth > 798 && <TabsIndicator ref={castContainerRef} />}
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
