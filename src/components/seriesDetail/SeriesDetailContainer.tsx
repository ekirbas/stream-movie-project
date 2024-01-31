import React from "react";
import SeriesDetailLeft from "./SeriesDetailLeft";
import SeriesDetailRight from "./SeriesDetailRight";
import { CrewSeries } from "../../models/storeType";
import { useApiStore } from "../../store/store";
import { SeriesDetailContainerType } from "../../models/homeType";

const SeriesDetailContainer = (props: SeriesDetailContainerType) => {
  const { data } = props;
  const useApi = useApiStore();
  const castData = useApi.castSeries;

  let directors: CrewSeries[] = [],
    writer: CrewSeries[] = [],
    music: CrewSeries[] = [];
  const crew = castData?.crew.filter((v) => {
    if (v.job === "Writer") {
      writer.push(v);
      return true;
    } else if (v.job === "Director" || v.job === "Series Director") {
      directors.push(v);
      return true;
    } else if (v.job === "Music" || v.job === "Original Music Composer") {
      music.push(v);
      return true;
    }
  });

  return (
    <div className="detailContainer">
      <SeriesDetailLeft data={data} castData={castData} />
      <SeriesDetailRight
        data={data}
        directors={directors}
        writer={writer}
        music={music}
      />
    </div>
  );
};

export default SeriesDetailContainer;
