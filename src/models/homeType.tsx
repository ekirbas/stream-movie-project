import {
  EpisodeDetailSeason,
  Genre,
  ResultPopularMovie,
  Season,
} from "./storeType";

export interface GenresContentContainerType {
  header: string;
  type: string;
  data: Genre[] | null;
}
export interface PopularContentContainerType {
  header: string;
  data?: ResultPopularMovie[] | null;
  type: string;
}
export interface UpcomingContentContainerType {
  header: string;
  type: string;
  data?: ResultPopularMovie[] | null;
}
export interface ImageSliderDataType {
  data?: ResultPopularMovie[];
}
export interface DetailImageType {
  title?: string;
  overview?: string;
  url?: string;
}
export interface SeasonsType {
  seasons?: Season[];
  series_id: number;
}
export interface EpisodesType {
  detailSeason: EpisodeDetailSeason[];
}
export interface SeasonItemType {
  series_id: number;
  episode_count: number;
  season_number: number;
}
