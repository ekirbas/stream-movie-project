import React from "react";
import { DetailLeftOverviewType } from "../../models/homeType";

const DetailLeftOverview = (props: DetailLeftOverviewType) => {
  const { data } = props;
  return (
    <div className="overview">
      <div className="divTitle">Açıklama</div>
      <div>{data?.overview}</div>
    </div>
  );
};

export default DetailLeftOverview;
