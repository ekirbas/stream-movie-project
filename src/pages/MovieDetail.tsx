import React, { useEffect } from "react";
import { useParams } from "react-router";
import DetailImage from "../components/DetailImage";
import TrialHorizontal from "../components/TrialHorizontal";
import MovieDetailContainer from "../components/movieDetail/MovieDetailContainer";
//@ts-ignore
import StarRatings from "react-star-ratings";
import { useStoreMulti } from "../helpers/useStoreMulti";

const MovieDetail = () => {
  const { movie_id } = useParams();
  const { detailMovie, fecthDetailMovie, fecthCastMovie } = useStoreMulti(
    "detailMovie",
    "fecthDetailMovie",
    "fecthCastMovie"
  );
  const data = detailMovie;

  useEffect(() => {
    fecthDetailMovie(`${movie_id}`);
    fecthCastMovie(`${movie_id}`);
  }, []);
  return (
    <div className="movieDetail">
      <div className="contentContainer">
        <DetailImage
          title={data?.title ?? data?.original_title}
          overview={data?.tagline ?? data?.overview}
          url={data?.backdrop_path}
        />
        <MovieDetailContainer data={data} />
        <TrialHorizontal />
      </div>
    </div>
  );
};

export default MovieDetail;
