import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useApiStore } from "../store/store";
import DetailImage from "../components/DetailImage";
import TrialHorizontal from "../components/TrialHorizontal";
import MovieDetailContainer from "../components/movieDetail/MovieDetailContainer";
//@ts-ignore
import StarRatings from "react-star-ratings";

const MovieDetail = () => {
  const useApi = useApiStore();
  const { movie_id } = useParams();
  const data = useApi.detailMovie;
  useEffect(() => {
    useApi.fecthDetailMovie(`${movie_id}`);
    useApi.fecthCastMovie(`${movie_id}`);
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
