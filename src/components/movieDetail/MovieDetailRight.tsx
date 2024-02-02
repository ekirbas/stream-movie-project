import React from "react";
import { MovieDetailRightType } from "../../models/homeType";
import MovieReleaseDate from "./MovieReleaseDate";
import MovieLanguagesArea from "./MovieLanguagesArea";
import MovieVoteContainer from "./MovieVoteContainer";
import MovieGenresArea from "./MovieGenresArea";
import MovieDirectorArea from "./MovieDirectorArea";
import MovieWriterArea from "./MovieWriterArea";
import MovieMusicArea from "./MovieMusicArea";
//@ts-ignore
import StarRatings from "react-star-ratings";

const MovieDetailRight = (props: MovieDetailRightType) => {
  const { data, music, writer, directors } = props;
  return (
    <div className="detailRight">
      <MovieReleaseDate data={data} />
      <MovieLanguagesArea data={data} />
      <MovieVoteContainer data={data} />
      <MovieGenresArea data={data} />
      <MovieDirectorArea directors={directors} />
      <MovieWriterArea writer={writer} />
      <MovieMusicArea music={music} />
    </div>
  );
};

export default MovieDetailRight;
