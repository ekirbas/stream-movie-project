import React, { useEffect } from "react";
import { useApiStore } from "../store/store";
import GenresContentContainer from "../components/GenresContentContainer";
const Home = () => {
  const useApi = useApiStore();
  useEffect(() => {
    useApi.fecthGenreMovie();
    useApi.fecthGenreSeries();
  }, []);
  return (
    <div className="homeContainer">
      <div className="contentContainer">
        {/* Movie area */}
        <fieldset className="fieldS">
          <legend>
            <div className="title">Movies</div>
          </legend>
          <GenresContentContainer
            data={useApi.genreMovie}
            header="Our Genres"
          ></GenresContentContainer>
        </fieldset>
        {/* Serie area */}
        <fieldset className="fieldS">
          <legend>
            <div className="title">Series</div>
          </legend>
          <GenresContentContainer
            data={useApi.genreSeries}
            header="Our Genres"
          ></GenresContentContainer>
        </fieldset>
      </div>
    </div>
  );
};

export default Home;
