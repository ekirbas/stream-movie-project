import axios from "axios";
import { create } from "zustand";
import { ApiStore } from "../models/storeType";
import statikVariables from "./statikVariables";

const options = {
  headers: { Authorization: `Bearer ${statikVariables.readAccessToken}` },
};

export const useApiStore = create<ApiStore>()((set) => ({
  genreMovie: null,
  genreDescVoteMovie: null,
  popularMovie: null,
  topRatedMovie: null,
  upcomingMovie: null,
  detailMovie: null,
  castMovie: null,

  genreSeries: null,
  popularSeries: null,
  topRatedSeries: null,
  onTheAirSeries: null,

  arrayState: [],
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),

  //---- set States
  setArrayState: (value) =>
    set((state) => ({ arrayState: [...state.arrayState, ...value] })),
  clearArrayState: () => set(() => ({ arrayState: [] })),

  //---- fecth Movie
  fecthPopularMovie: async (page) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=tr&page=${page}`,
        options
      );
      console.log("fecthPopularMovie =", response);
      //console.log("respon jsn =", JSON.stringify(response));
      set(() => ({ popularMovie: response.data.results }));
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
      //console.log("fecthUpcomingMovie =", response);
      //console.log("respon jsn =", JSON.stringify(response));
      set(() => ({ upcomingMovie: response.data.results }));
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
      //console.log("fecthTopRatedMovie =", response);
      //console.log("respon jsn =", JSON.stringify(response));
      set(() => ({ topRatedMovie: response.data.results }));
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
      //console.log("fecthDetailMovie =", response);
      //console.log("respon jsn =", JSON.stringify(response));
      set(() => ({ detailMovie: response.data }));
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
      ////console.log("fecthCastMovie =", response);
      //console.log("respon jsn =", JSON.stringify(response));
      set(() => ({ castMovie: response.data }));
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
      //console.log("fecthGenreDescVoteMovie =", response.data.results);
      //console.log("respon jsn =", JSON.stringify(response));
      set(() => ({ genreDescVoteMovie: response.data.results }));
      return response.data.results;
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
      //console.log("fecthGenreMovie =", response);
      //console.log("respon jsn =", JSON.stringify(response));
      set(() => ({ genreMovie: response.data.genres }));
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
      //console.log("fecthGenreSeries =", response);
      //console.log("respon jsn =", JSON.stringify(response));
      set(() => ({
        genreSeries: response.data.genres,
      }));
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
      //console.log("fecthPopularSeries =", response);
      //console.log("respon jsn =", JSON.stringify(response));
      set(() => ({ popularSeries: response.data.results }));
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
      //console.log("fecthTopRatedSeries =", response);
      //console.log("respon jsn =", JSON.stringify(response));
      set(() => ({ topRatedSeries: response.data.results }));
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
      //console.log("fecthDetailSeason =", response);
      //console.log("respon jsn =", JSON.stringify(response));
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
      console.log("fecthOnTheAirSeries =", response);
      //console.log("respon jsn =", JSON.stringify(response));
      set(() => ({ onTheAirSeries: response.data.results }));
    } catch (err) {
      console.log(err);
    }
  },
  //---- set Movie
  setGenreMovie: (arg: any) => set(() => ({ genreMovie: arg })),

  //---- set Series
}));
