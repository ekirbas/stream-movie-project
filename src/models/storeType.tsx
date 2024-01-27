export interface GenreMovieType {
  id: number;
  name: string;
}

export type ApiStore = {
  count: number;
  inc: () => void;

  //Movies
  genreMovie: [GenreMovieType] | null;
  genreDescVoteMovie: any | null;
  popularMovie: any | null;
  topRatedMovie: any | null;
  upcomingMovie: any | null;
  detailMovie: any | null;
  castMovie: any | null;

  //Series
  genreSeries: [GenreMovieType] | null;
  popularSeries: any | null;
  topRatedSeries: any | null;
  onTheAirSeries: any | null;
  detailSeries: any | null;
  castSeries: any | null;
  detailSeason: any | null;

  arrayState: any | null;

  //Movies
  fecthPopularMovie: (page: string) => Promise<any>;
  fecthUpcomingMovie: (page: string) => Promise<any>;
  fecthTopRatedMovie: (page: string) => Promise<any>;
  fecthDetailMovie: (movie_id: string) => Promise<any>;
  fecthTrailerMovie: (movie_id: string) => Promise<any>;
  fecthCastMovie: (movie_id: string) => Promise<any>;
  fecthGenreMovie: () => Promise<any>;
  fecthGenreDescVoteMovie: (genre_id: string) => Promise<any>;

  //Series
  fecthGenreSeries: () => Promise<any>;
  fecthPopularSeries: (page: string) => Promise<any>;
  fecthTopRatedSeries: (page: string) => Promise<any>;
  fecthDetailSeries: (series_id: string) => Promise<any>;
  fecthCastSeries: (series_id: string) => Promise<any>;
  fecthDetailSeason: (series_id: string, season_number: string) => Promise<any>;
  fecthTrailerSeries: (series_id: string) => Promise<any>;
  fecthOnTheAirSeries: (page: string) => Promise<any>;

  setGenreMovie: (data?: GenreMovieType[]) => void;

  setArrayState: (value: any) => void;
  clearArrayState: () => void;
};
