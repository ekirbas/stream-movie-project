import {
  Crew,
  CrewSeries,
  DataCast,
  DataCastSeries,
  DataDetailMovie,
  DataDetailSeries,
  EpisodeDetailSeason,
  Genre,
  ResultPopularMovie,
  Season,
} from "./storeType";

export interface GenresContentContainerType {
  header: string;
  type: string;
  data?: Genre[];
}
export interface PopularContentContainerType {
  header: string;
  data?: ResultPopularMovie[];
  type: string;
}
export interface UpcomingContentContainerType {
  header: string;
  type: string;
  data?: ResultPopularMovie[];
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
export interface HomeAboutAreaType {
  windowHeight: number;
}
export interface MovieDetailRightType {
  data?: DataDetailMovie;
  music: Crew[];
  writer: Crew[];
  directors: Crew[];
}
export interface MovieDetailLeftType {
  data?: DataDetailMovie;
  castData?: DataCast;
}
export interface MovieDetailContainerType {
  data?: DataDetailMovie;
}
export interface SeriesDetailContainerType {
  data?: DataDetailSeries;
}
export interface SeriesDetailLeftType {
  data?: DataDetailSeries;
  castData?: DataCastSeries;
}
export interface DetailLeftOverviewType {
  data?: DataDetailSeries;
}
export interface CastAreaType {
  castData?: DataCastSeries;
}
export interface SeriesDetailRightType {
  data?: DataDetailSeries;
  directors?: CrewSeries[];
  writer?: CrewSeries[];
  music?: CrewSeries[];
}
export interface SeriesReleaseDateAreaType {
  data?: DataDetailSeries;
}
export interface SeriesLanguagesAreaType {
  data?: DataDetailSeries;
}
export interface SeriesVoteContainerType {
  data?: DataDetailSeries;
}
export interface SeriesGenresAreaType {
  data?: DataDetailSeries;
}
export interface SeriesDirectorAreaType {
  directors?: CrewSeries[];
}
export interface SeriesWriterAreaType {
  writer?: CrewSeries[];
}
export interface SeriesMusicAreaType {
  music?: CrewSeries[];
}
