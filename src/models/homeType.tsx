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
