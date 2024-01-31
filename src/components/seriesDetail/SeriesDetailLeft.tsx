import React from "react";
import DetailLeftOverview from "./DetailLeftOverview";
import CastArea from "./CastArea";
import Seasons from "../Seasons";
import { SeriesDetailLeftType } from "../../models/homeType";

const SeriesDetailLeft = (props: SeriesDetailLeftType) => {
  const { data, castData } = props;
  return (
    <div className="detailLeft">
      <Seasons seasons={data?.seasons} series_id={data?.id ?? 0} />
      {/* {data?.id??0} bura typescrip hataya düşürüyor */}
      <DetailLeftOverview data={data} />
      <CastArea castData={castData} />
    </div>
  );
};

export default SeriesDetailLeft;
