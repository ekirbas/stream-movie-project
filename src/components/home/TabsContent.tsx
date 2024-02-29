import React from "react";
import { TabsContentType } from "../../models/homeType";
import HomeMovieArea from "./HomeMovieArea";
import HomeSerieArea from "./HomeSerieArea";
import MovieAndShowMovieArea from "../movieAndShow/MovieAndShowMovieArea";
import MovieAndShowSeriesArea from "../movieAndShow/MovieAndShowSeriesArea";

const TabsContent = (props: TabsContentType) => {
  const { activeTab } = props;

  const conditions: { [key: string]: React.JSX.Element } = {
    movies: <HomeMovieArea />,
    series: <HomeSerieArea />,
    movies2: <MovieAndShowMovieArea />,
    series2: <MovieAndShowSeriesArea />,
  };

  return conditions[activeTab];
};

export default TabsContent;
