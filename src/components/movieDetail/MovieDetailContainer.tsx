import React from "react";
import MovieDetailLeft from "./MovieDetailLeft";
import MovieDetailRight from "./MovieDetailRight";
import { useApiStore } from "../../store/store";
import { Crew } from "../../models/storeType";
import { MovieDetailContainerType } from "../../models/homeType";

const MovieDetailContainer = (props: MovieDetailContainerType) => {
  const { data } = props;
  const useApi = useApiStore();
  const castData = useApi.castMovie;
  let directors: Crew[] = [],
    writer: Crew[] = [],
    music: Crew[] = [];
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
      <MovieDetailLeft castData={castData} data={data} />
      <MovieDetailRight
        data={data}
        directors={directors}
        music={music}
        writer={writer}
      />
    </div>
  );
};

export default MovieDetailContainer;
