import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useApiStore } from "../store/store";
import DetailImage from "../components/DetailImage";
//@ts-ignore
import StarRatings from "react-star-ratings";
import TrialHorizontal from "../components/TrialHorizontal";
import "../helpers/function";
import SeriesDetailContainer from "../components/seriesDetail/SeriesDetailContainer";

const SeriesDetail = () => {
  const useApi = useApiStore();
  const { serie_id } = useParams();
  const data = useApi.detailSeries;

  useEffect(() => {
    useApi.fecthDetailSeries(`${serie_id}`);
    useApi.fecthCastSeries(`${serie_id}`);
  }, []);

  return (
    <div className="seriesDetail">
      <div className="contentContainer">
        <DetailImage
          title={data?.name ?? data?.original_name}
          overview={data?.tagline ?? ""}
          url={data?.backdrop_path}
        />
        <SeriesDetailContainer data={data} />
        <div>
          <TrialHorizontal />
        </div>
      </div>
    </div>
  );
};

export default SeriesDetail;
