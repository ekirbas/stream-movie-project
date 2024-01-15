export interface GenreMovieType {
  id: number;
  name: string;
}

export type ApiStore = {
  count: number;
  inc: () => void;

  genreMovie: [GenreMovieType] | null;
  genreDescVoteMovie: any | null;

  genreSeries: [GenreMovieType] | null;

  arrayState: any | null;

  fecthPopularMovie: (page: string) => void;
  fecthUpcomingMovie: (page: string) => void;
  fecthTopRatedMovie: (page: string) => void;
  fecthDetailMovie: (movie_id: string) => void;
  fecthTrailerMovie: (movie_id: string) => void;
  fecthCastMovie: (movie_id: string) => void;
  fecthGenreMovie: () => void;
  fecthGenreDescVoteMovie: (genre_id: string) => void;

  fecthGenreSeries: () => void;
  fecthPopularSeries: (page: string) => void;
  fecthTopRatedSeries: (page: string) => void;
  fecthDetailSeries: (series_id: string) => void;
  fecthCastSeries: (series_id: string) => void;
  fecthDetailSeason: (series_id: string, season_number: string) => void;
  fecthTrailerSeries: (series_id: string) => void;

  setGenreMovie: (data?: GenreMovieType[]) => void;

  setArrayState: (value: any) => void;
  clearArrayState: () => void;
};
