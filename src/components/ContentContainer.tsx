import React from "react";
import { ContentContainerType } from "../models/homeType";

const ContentContainer = (props: ContentContainerType) => {
  const { title, data, header, children } = props;
  //console.log("content data = ", data);
  return (
    <div className="contentContainer">
      <fieldset>
        <legend>
          <div className="title">{title}</div>
        </legend>
        <div className="headerContainer">
          <div className="header">{header}</div>
          <div className="tabIndicator">--</div>
        </div>
        <div className="dataContainer">
          {data?.map((v: any) => (
            <div className="data">{v.name}</div>
          ))}
        </div>
        {children}
      </fieldset>
    </div>
  );
};

export default ContentContainer;
