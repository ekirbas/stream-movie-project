import axios from "axios";
import { create } from "zustand";
import {
  ApiStore,
  DataCast,
  DataCastSeries,
  DataDetailMovie,
  DataDetailSeries,
  EpisodeDetailSeason,
  Genre,
  ResultPopularMovie,
} from "../models/storeType";
import statikVariables from "./statikVariables";

const options = {
  headers: { Authorization: `Bearer ${statikVariables.readAccessToken}` },
};

export const useApiStore = create<ApiStore>()((set) => ({
  /* Zustand default state */
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),

  /* Movie */
  genreMovie: null,
  genreDescVoteMovie: null,
  popularMovie: null,
  topRatedMovie: null,
  upcomingMovie: null,
  detailMovie: null,
  castMovie: null,

  /* Series */
  genreSeries: null,
  popularSeries: null,
  topRatedSeries: null,
  onTheAirSeries: null,
  detailSeries: null,
  castSeries: undefined,
  detailSeason: null,

  searchMulti: null,

  arrayState: [],

  //---- fecth Movie
  fecthPopularMovie: async (page) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=tr&page=${page}`,
        options
      );
      const data: ResultPopularMovie[] = response.data.results;
      set(() => ({ popularMovie: response.data.results }));
      //console.log("fecthPopularMovie =", response);
      //console.log("respon jsn =", JSON.stringify(response));
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
      const data: ResultPopularMovie[] = response.data.results;
      set(() => ({ upcomingMovie: data }));
      //console.log("fecthUpcomingMovie =", response);
      //console.log("respon jsn =", JSON.stringify(response));
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
      const data: ResultPopularMovie[] = response.data.results;

      set(() => ({ topRatedMovie: data }));
      //console.log("fecthTopRatedMovie =", response);
      //console.log("respon jsn =", JSON.stringify(response));
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
      const data: DataDetailMovie = response.data;
      set(() => ({ detailMovie: data }));
      //console.log("fecthDetailMovie =", response);
      //console.log("respon jsn =", JSON.stringify(response));
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
      const data: any = response;
      ////console.log("fecthTrailerMovie =", response);
      //console.log("respon jsn =", JSON.stringify(response));
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
      const data: DataCast = response.data;
      set(() => ({ castMovie: data }));
      //console.log("fecthCastMovie =", response);
      //console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },
  fecthGenreDescVoteMovie: async (genre_id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=tr&page=1&sort_by=vote_count.desc&with_genres=${genre_id}`,
        options
      );
      const data: any = response.data.results;
      set(() => ({ genreDescVoteMovie: data }));
      //console.log("fecthGenreDescVoteMovie =", response.data.results);
      //console.log("respon jsn =", JSON.stringify(response));
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  fecthGenreMovie: async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?language=tr`,
        options
      );
      const data: Genre[] = response.data.genres;
      set(() => ({ genreMovie: data }));
      //console.log("fecthGenreMovie =", response);
      //console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },

  //---- fecth Series
  fecthGenreSeries: async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/tv/list?language=tr`,
        options
      );
      const data: Genre[] = response.data.genres;
      set(() => ({ genreSeries: data }));
      //console.log("fecthGenreSeries =", response);
      //console.log("respon jsn =", JSON.stringify(response));
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
      const data: ResultPopularMovie[] = response.data.results;
      set(() => ({ popularSeries: data }));
      //console.log("fecthPopularSeries =", response);
      //console.log("respon jsn =", JSON.stringify(response));
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
      const data: ResultPopularMovie[] = response.data.results;
      set(() => ({ topRatedSeries: data }));
      //console.log("fecthTopRatedSeries =", response);
      //console.log("respon jsn =", JSON.stringify(response));
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
      const data: DataDetailSeries = response.data;
      set(() => ({ detailSeries: data }));
      //console.log("fecthDetailSeries =", response);
      //console.log("respon jsn =", JSON.stringify(response));
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
      const data: DataCastSeries = response.data;
      set(() => ({ castSeries: data }));
      //console.log("fecthCastSeries =", response);
      //console.log("respon jsn =", JSON.stringify(response));
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
      const data: EpisodeDetailSeason[] = response.data.episodes;
      set(() => ({ detailSeason: data }));
      //console.log("fecthDetailSeason =", response);
      //console.log("respon jsn =", JSON.stringify(response));
      return data;
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
      //console.log("fecthTrailerSeries =", response);
      //console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },
  fecthOnTheAirSeries: async (page) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/on_the_air?language=tr&page=${page}`,
        options
      );
      const data: ResultPopularMovie[] = response.data.results;
      set(() => ({ onTheAirSeries: data }));
      //console.log("fecthOnTheAirSeries =", response);
      //console.log("respon jsn =", JSON.stringify(response));
    } catch (err) {
      console.log(err);
    }
  },

  fecthSearchMulti: async (search_query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${search_query}&include_adult=false&language=tr&page=1`,
        options
      );
      set(() => ({ searchMulti: response.data.results }));
      //console.log("fecthSearchMulti =", response.data.results);
      //console.log("respon jsn =", JSON.stringify(response));
      return response.data.results;
    } catch (err) {
      console.log(err);
    }
  },

  //---- set Movie
  setGenreMovie: (arg: any) => set(() => ({ genreMovie: arg })),

  //---- set Series

  //---- set States
  setArrayState: (value) =>
    set((state) => ({ arrayState: [...state.arrayState, ...value] })),
  clearArrayState: () => set(() => ({ arrayState: [] })),
}));
