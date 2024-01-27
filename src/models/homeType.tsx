import { ReactNode } from "react";
import { GenreMovieType } from "./storeType";

export interface GenresContentContainerType {
  header: string;
  /*  children?: ReactNode; */
  type: string;
  data?: any;
}
export interface PopularContentContainerType {
  header: string;
  data?: any;
  type: string;
}
export interface UpcomingContentContainerType {
  header: string;
  type: string;
  data?: any;
}
export interface ImageSliderDataType {
  data?: any;
}
export interface DetailImageType {
  title: string;
  overview: string;
  url: string;
}
export interface SeasonsType {
  seasons: any;
  series_id: any;
}
export interface EpisodesType {
  detailSeason: any;
}
export interface SeasonItemType {
  series_id: any;
  episode_count: any;
  season_number: any;
}
