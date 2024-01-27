import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useApiStore } from "../store/store";
import DetailImage from "../components/DetailImage";
import dayjs from "dayjs";
import LangIcon from "../assets/images/LangIcon";
import DateIcon from "../assets/images/DateIcon";
import StarIcon from "../assets/images/StarIcon";
import GenreIcon from "../assets/images/GenreIcon";
import statikVariables from "../store/statikVariables";
import TrialHorizontal from "../components/TrialHorizontal";

const MovieDetail = () => {
  const useApi = useApiStore();
  const { movie_id } = useParams();
  useEffect(() => {
    useApi.fecthDetailMovie(`${movie_id}`);
    useApi.fecthCastMovie(`${movie_id}`);
  }, []);

  const data = useApi.detailMovie;
  const castData = useApi.castMovie;

  let directors: any = [],
    writer: any = [],
    music: any = [];
  const crew = castData?.crew.filter((v: any) => {
    if (v.job === "Writer") {
      writer.push(v);
      return true;
    } else if (v.job === "Director") {
      directors.push(v);
      return true;
    } else if (v.job === "Music") {
      music.push(v);
      return true;
    }
  });

  return (
    <div className="movieDetail">
      <div className="contentContainer">
        <DetailImage
          title={data?.title ?? data?.original_title}
          overview={data?.tagline ?? data?.overview}
          url={data?.backdrop_path}
        />
        <div className="detailContainer">
          {/* detailLeft */}
          <div className="detailLeft">
            <div className="overview">
              <div className="divTitle">Açıklama</div>
              <div>{data?.overview}</div>
            </div>
            <div className="castArea">
              <div className="divTitle">Cast</div>
              <div className="castContainer">
                {castData?.cast.map((v: any) => {
                  return (
                    v.profile_path && (
                      <div className="castCard">
                        <img
                          src={`${
                            statikVariables.imageBaseUrl +
                            statikVariables.imageSize500 +
                            v.profile_path
                          }`}
                        />
                        <div>{v.name}</div>
                        <div className="characterText">{v.character}</div>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
          {/* detailRight */}
          <div className="detailRight">
            <div>
              <div className="divTitle">
                <DateIcon />
                Çıkış Tarihi
              </div>
              <div className="releaseDate">
                {dayjs(data?.release_date).format("DD.MM.YYYY")}
              </div>
            </div>
            <div className="languagesArea">
              <div className="divTitle">
                <LangIcon />
                Konuşulan Diller
              </div>
              <div className="languagesContainer">
                {data?.spoken_languages.map((v: any) => {
                  return <div className="languages">{v.english_name}</div>;
                })}
              </div>
            </div>
            <div>
              <div className="divTitle">
                <StarIcon />
                Puan
              </div>
              <div className="ratingContainer">
                <div>Streamvibe</div>
                <div className="starsContainer">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <div className="ratingText">
                    {data?.vote_average.toFixed(1)}
                  </div>
                </div>
              </div>
            </div>
            <div className="genresArea">
              <div className="divTitle">
                <GenreIcon />
                Türler
              </div>
              <div className="genresContainer">
                {data?.genres.map((v: any) => {
                  return <div className="genres">{v.name}</div>;
                })}
              </div>
            </div>
            {directors.length !== 0 ? (
              <div className="directorArea">
                <div className="divTitle">Yönetmen</div>
                <div className="directorContainer">
                  {directors?.map((v: any) => {
                    return (
                      <div className="director">
                        {v.profile_path && (
                          <img
                            src={`${
                              statikVariables.imageBaseUrl +
                              statikVariables.imageSize500 +
                              v.profile_path
                            }`}
                          />
                        )}

                        {v.name ?? v.original_name}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
            {writer.length !== 0 ? (
              <div className="directorArea">
                <div className="divTitle">Yazar</div>
                <div className="directorContainer">
                  {writer?.map((v: any) => {
                    return (
                      <div className="director">
                        {v.profile_path && (
                          <img
                            src={`${
                              statikVariables.imageBaseUrl +
                              statikVariables.imageSize500 +
                              v.profile_path
                            }`}
                          />
                        )}
                        {v.name ?? v.original_name}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
            {music.length !== 0 ? (
              <div className="directorArea">
                <div className="divTitle">Müzik</div>
                <div className="directorContainer">
                  {music?.map((v: any) => {
                    return (
                      <div className="director">
                        {v.profile_path && (
                          <img
                            src={`${
                              statikVariables.imageBaseUrl +
                              statikVariables.imageSize500 +
                              v.profile_path
                            }`}
                          />
                        )}

                        {v.name ?? v.original_name}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <TrialHorizontal />
      </div>
    </div>
  );
};

export default MovieDetail;
