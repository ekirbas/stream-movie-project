import React, { useEffect, useState } from "react";
import { useApiStore } from "../store/store";
import GenresContentContainer from "../components/GenresContentContainer";
import PopularContentContainer from "../components/PopularContentContainer";
import UpcomingContentContainer from "../components/UpcomingContentContainer";
import mixImage from "../assets/images/mix.png";
import AboutLogo from "../assets/images/AboutLogo";
import PlayBtnIcon from "../assets/images/PlayBtnIcon";
const Home = () => {
  const useApi = useApiStore();
  useEffect(() => {
    useApi.fecthGenreMovie();
    useApi.fecthGenreSeries();
    useApi.fecthPopularMovie("1");
    useApi.fecthPopularSeries("1");
    useApi.fecthTopRatedMovie("1");
    useApi.fecthTopRatedSeries("1");
    useApi.fecthUpcomingMovie("1");
    useApi.fecthOnTheAirSeries("1");
  }, []);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  window.onresize = () => setWindowHeight(window.innerHeight);

  return (
    <>
      {/* home about area */}
      <div
        className="homeAboutContainer"
        style={{ height: `${window.innerHeight}px` }}
      >
        <div className="homeImageDiv">
          <img src={mixImage} />
          <div className="fadeOutTop"></div>
          <div className="fadeOutBottom"></div>
          <div
            className="aboutIconArea"
            style={{ paddingBottom: `${windowHeight * 0.2}px` }}
          >
            <AboutLogo className="aboutLogo" />
          </div>
        </div>
        <div className="aboutTextArea">
          <h1>The Best Streaming Experience</h1>
          <p>
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <button className="watchButton">
            <PlayBtnIcon />
            Start Watching Now
          </button>
        </div>
      </div>
      <div className="homeContainer" style={{ marginTop: `${windowHeight}px` }}>
        <div className="contentContainer">
          {/* Movie area */}
          <fieldset className="fieldS">
            <legend>
              <div className="title">Movies</div>
            </legend>
            <GenresContentContainer
              data={useApi.genreMovie}
              type="genre-movie"
              header="Movie Genres"
            />
            <PopularContentContainer
              header="Populer Movies"
              type="movie"
              data={useApi.popularMovie}
            />
            <PopularContentContainer
              header="Top Rated Movies"
              type="movie"
              data={useApi.topRatedMovie}
            />
            <UpcomingContentContainer
              header="New Releases Movies"
              type="movie"
              data={useApi.upcomingMovie}
            />
          </fieldset>
          {/* Serie area */}
          <fieldset className="fieldS">
            <legend>
              <div className="title">Series</div>
            </legend>
            <GenresContentContainer
              data={useApi.genreSeries}
              header="Serie Genres"
              type="genre-serie"
            />
            <PopularContentContainer
              header="Populer Series"
              type="serie"
              data={useApi.popularSeries}
            />
            <PopularContentContainer
              header="Top Rated Series"
              type="serie"
              data={useApi.topRatedSeries}
            />
            <UpcomingContentContainer
              header="On The Air"
              type="serie"
              data={useApi.onTheAirSeries}
            />
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default Home;
