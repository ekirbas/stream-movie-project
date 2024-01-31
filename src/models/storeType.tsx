export interface ResultPopularMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
}

export interface DataDetailMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface BelongsToCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface DataDetailSeries {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air: number;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  release_date?: string;
}

export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface LastEpisodeToAir {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}

export interface Network {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path?: string;
  season_number: number;
  vote_average: number;
}

export interface Genre {
  id: number;
  name: string;
}
export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface DataCast {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path?: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface DataCastSeries {
  cast: CastSeries[];
  crew: CrewSeries[];
  id: number;
}

export interface CastSeries {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  character: string;
  credit_id: string;
  order: number;
}

export interface CrewSeries {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface EpisodeDetailSeason {
  air_date: string;
  episode_number: number;
  episode_type: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  crew: Crew[];
  guest_stars: GuestStar[];
}
export interface GuestStar {
  character: string;
  credit_id: string;
  order: number;
  adult?: boolean;
  gender?: number;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string;
  episode_count?: number;
  person_id?: string;
}

export type ApiStore = {
  count: number;
  inc: () => void;

  //Movies
  genreMovie: Genre[] | null;
  genreDescVoteMovie: any | null; //genre image için kullanılacaktı vazgeçtim
  popularMovie: ResultPopularMovie[] | null;
  topRatedMovie: ResultPopularMovie[] | null;
  upcomingMovie: ResultPopularMovie[] | null;
  detailMovie: DataDetailMovie | null;
  castMovie: DataCast | null;

  //Series
  genreSeries: Genre[] | null;
  popularSeries: ResultPopularMovie[] | null;
  topRatedSeries: ResultPopularMovie[] | null;
  onTheAirSeries: ResultPopularMovie[] | null;
  detailSeries: DataDetailSeries | null;
  castSeries?: DataCastSeries;
  detailSeason: EpisodeDetailSeason[] | null;

  searchMulti: any | null;

  arrayState: any | null;

  //Movies
  fecthPopularMovie: (page: string) => Promise<void>; // ---void ?
  fecthUpcomingMovie: (page: string) => Promise<void>;
  fecthTopRatedMovie: (page: string) => Promise<void>;
  fecthDetailMovie: (movie_id: string) => Promise<void>;
  fecthTrailerMovie: (movie_id: string) => Promise<void>;
  fecthCastMovie: (movie_id: string) => Promise<void>;
  fecthGenreMovie: () => Promise<void>;
  fecthGenreDescVoteMovie: (genre_id: string) => Promise<void>;

  //Series
  fecthGenreSeries: () => Promise<void>;
  fecthPopularSeries: (page: string) => Promise<void>;
  fecthTopRatedSeries: (page: string) => Promise<void>;
  fecthDetailSeries: (series_id: string) => Promise<void>;
  fecthCastSeries: (series_id: string) => Promise<void>;
  fecthDetailSeason: (series_id: number, season_number: number) => Promise<any>; // void yapamıyorum
  fecthTrailerSeries: (series_id: string) => Promise<void>;
  fecthOnTheAirSeries: (page: string) => Promise<void>;

  fecthSearchMulti: (search_query: string) => Promise<void>;

  setGenreMovie: (data?: Genre) => void;

  setArrayState: (value: any) => void;
  clearArrayState: () => void;
};
