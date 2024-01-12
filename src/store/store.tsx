import axios from "axios";
import { create } from "zustand";

const readAccessToken = "your_Token";

const options = {
  headers: { Authorization: `Bearer ${readAccessToken}` },
};

//const movieUpcoming = `movie/upcoming`;

interface GenreMovieType {
  id: number;
  name: string;
}

type ApiStore = {
  imageBaseUrl: string;
  imageSize500: string;
  imageSizeOriginal: string;
  youtubeBaseUrl: string;
  imdbBaseUrl: string;

  setGenreMovie: (data?: GenreMovieType[]) => void;

  genreMovie: GenreMovieType[] | null;

  fecthPopularMovie: (page: string) => void;
  fecthUpcomingMovie: (page: string) => void;
  fecthTopRatedMovie: (page: string) => void;
  fecthDetailMovie: (movie_id: string) => void;
  fecthTrailerMovie: (movie_id: string) => void;
  fecthCastMovie: (movie_id: string) => void;
  fecthGenreMovie: () => void;
  fecthGenreSeries: () => void;
  fecthPopularSeries: (page: string) => void;
  fecthTopRatedSeries: (page: string) => void;
  fecthDetailSeries: (series_id: string) => void;
  fecthCastSeries: (series_id: string) => void;
  fecthDetailSeason: (series_id: string, season_number: string) => void;
  fecthTrailerSeries: (series_id: string) => void;

  count: number;
  inc: () => void;
};

export const useApiStore = create<ApiStore>()((set) => ({
  imageBaseUrl: "https://image.tmdb.org/t/p/",
  imageSize500: "w500",
  imageSizeOriginal: "original",
  youtubeBaseUrl: "https://www.youtube.com/watch?v=",
  imdbBaseUrl: "https://www.imdb.com/title/",
  genreMovie: null,
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),

  fecthPopularMovie: async (page) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=tr&page=${page}`,
        options
      );
      console.log("fecthPopularMovie =", response);
      console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },
  fecthUpcomingMovie: async (page) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?language=tr&page=${page}`,
        options
      );
      console.log("fecthUpcomingMovie =", response);
      console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },
  fecthTopRatedMovie: async (page) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?language=tr&page=${page}`,
        options
      );
      console.log("fecthTopRatedMovie =", response);
      console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },
  fecthDetailMovie: async (movie_id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}?language=tr`,
        options
      );
      console.log("fecthDetailMovie =", response);
      console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },
  fecthTrailerMovie: async (movie_id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=tr`,
        options
      );
      console.log("fecthTrailerMovie =", response);
      console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },
  fecthCastMovie: async (movie_id) => {
    let response: any = null;
    try {
      response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=tr`,
        options
      );
      console.log("fecthCastMovie =", response);
      console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },
  setGenreMovie: (arg: any) => set(() => ({ genreMovie: arg })),
  fecthGenreMovie: async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?language=tr`,
        options
      );
      console.log("fecthGenreMovie =", response);
      console.log("respon jsn =", JSON.stringify(response));
      set(() => ({ genreMovie: response.data.genres }));
    } catch (err) {
      console.log(err);
    }
  },
  fecthGenreSeries: async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/tv/list?language=tr`,
        options
      );
      console.log("fecthGenreSeries =", response);
      console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },
  fecthPopularSeries: async (page) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?language=tr&page=${page}`,
        options
      );
      console.log("fecthPopularSeries =", response);
      console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },
  fecthTopRatedSeries: async (page) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?language=tr&page=${page}`,
        options
      );
      console.log("fecthTopRatedSeries =", response);
      console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },
  fecthDetailSeries: async (series_id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${series_id}?language=tr`,
        options
      );
      console.log("fecthDetailSeries =", response);
      console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },
  fecthCastSeries: async (series_id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${series_id}/credits?language=tr`,
        options
      );
      console.log("fecthCastSeries =", response);
      console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },
  fecthDetailSeason: async (series_id, season_number) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${series_id}/season/${season_number}?language=tr`,
        options
      );
      console.log("fecthDetailSeason =", response);
      console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },
  fecthTrailerSeries: async (series_id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${series_id}/videos?language=us-US`,
        options
      );
      console.log("fecthTrailerSeries =", response);
      console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },
}));
