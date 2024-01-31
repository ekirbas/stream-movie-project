import React from "react";
import SeriesReleaseDateArea from "./SeriesReleaseDateArea";
import SeriesLanguagesArea from "./SeriesLanguagesArea";
import SeriesVoteContainer from "./SeriesVoteContainer";
import SeriesGenresArea from "./SeriesGenresArea";
import SeriesDirectorArea from "./SeriesDirectorArea";
import SeriesWriterArea from "./SeriesWriterArea";
import SeriesMusicArea from "./SeriesMusicArea";
import { SeriesDetailRightType } from "../../models/homeType";

const SeriesDetailRight = (props: SeriesDetailRightType) => {
  const { data, directors, writer, music } = props;
  return (
    <div className="detailRight">
      <SeriesReleaseDateArea data={data} />
      <SeriesLanguagesArea data={data} />
      <SeriesVoteContainer data={data} />
      <SeriesGenresArea data={data} />
      <SeriesDirectorArea directors={directors} />
      <SeriesWriterArea writer={writer} />
      <SeriesMusicArea music={music} />
    </div>
  );
};

export default SeriesDetailRight;
