import React, { useEffect } from "react";
import { useParams } from "react-router";
import DetailImage from "../components/DetailImage";
//@ts-ignore
import StarRatings from "react-star-ratings";
import TrialHorizontal from "../components/TrialHorizontal";
import "../helpers/function";
import SeriesDetailContainer from "../components/seriesDetail/SeriesDetailContainer";
import { useStoreMulti } from "../helpers/useStoreMulti";

const SeriesDetail = () => {
  const { serie_id } = useParams();
  const { detailSeries, fecthDetailSeries, fecthCastSeries } = useStoreMulti(
    "detailSeries",
    "fecthDetailSeries",
    "fecthCastSeries"
  );
  const data = detailSeries;
  const fetchAsync = async () => {
    await fecthCastSeries(`${serie_id}`);
    await fecthDetailSeries(`${serie_id}`);
  };

  useEffect(() => {
    fetchAsync();
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
