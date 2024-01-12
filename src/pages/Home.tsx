import React, { useEffect } from "react";
import ContentContainer from "../components/ContentContainer";
import { useApiStore } from "../store/store";

const Home = () => {
  const useApi = useApiStore();
  useEffect(() => {
    useApi.fecthPopularMovie("1");
    /*   useApi.fecthUpcomingMovie("1");
    useApi.fecthDetailMovie("278");
    useApi.fecthTopRatedMovie("1");
    useApi.fecthTrailerMovie("278");
    useApi.fecthCastMovie("278");
    useApi.fecthGenreMovie();
    useApi.fecthGenreSeries();
    useApi.fecthPopularSeries("1");
    useApi.fecthTopRatedSeries("1");
    useApi.fecthDetailSeries("1429");
    useApi.fecthCastSeries("1429");
    useApi.fecthDetailSeason("1429", "2");
    useApi.fecthTrailerSeries("1429"); */
  }, []);
  return (
    <div className="homeContainer">
      <ContentContainer
        title="Movies"
        data={useApi.genreMovie}
        header="Our Genres"
      >
        sadasdadqweqweqw
      </ContentContainer>
    </div>
  );
};

export default Home;
