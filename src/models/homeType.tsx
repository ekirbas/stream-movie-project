import { ReactNode } from "react";
import { GenreMovieType } from "./storeType";

export interface GenresContentContainerType {
  header: string;
  /*  children?: ReactNode; */
  data?: any;
}
export interface PopularContentContainerType {
  header: string;
  data?: any;
}
export interface UpcomingContentContainerType {
  header: string;
  data?: any;
}
