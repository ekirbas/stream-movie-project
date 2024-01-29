import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useApiStore } from "../store/store";
import DetailImage from "../components/DetailImage";
import trialHorizontal from "../assets/images/trialHorizontal.png";
import statikVariables from "../store/statikVariables";
import GenreIcon from "../assets/images/GenreIcon";
import StarIcon from "../assets/images/StarIcon";
import LangIcon from "../assets/images/LangIcon";
import dayjs from "dayjs";
import DateIcon from "../assets/images/DateIcon";
import "../helpers/function";
import Seasons from "../components/Seasons";
import { CreateUniqKey } from "../helpers/function";
//@ts-ignore
import StarRatings from "react-star-ratings";

const SeriesDetail = () => {
  const useApi = useApiStore();
  const { serie_id } = useParams();
  useEffect(() => {
    useApi.fecthDetailSeries(`${serie_id}`);
    useApi.fecthCastSeries(`${serie_id}`);
  }, []);

  const data = useApi.detailSeries;

  const castData = useApi.castSeries;
  /*  const castGroup = castData?.crew?.toGroup((v: any) => v.job); //gruplama prototype  */

  console.log("detailSeries", data);
  console.log("castSeries", castData);

  let directors: any = [],
    writer: any = [],
    music: any = [];
  const crew = castData?.crew.filter((v: any) => {
    if (v.job === "Writer") {
      writer.push(v);
      return true;
    } else if (v.job === "Director" || v.job === "Series Director") {
      directors.push(v);
      return true;
    } else if (v.job === "Music" || v.job === "Original Music Composer") {
      music.push(v);
      return true;
    }
  });
  console.log("directors", directors);
  console.log("writer", writer);
  console.log("music", music);

  return (
    <div className="seriesDetail">
      <div className="contentContainer">
        <DetailImage
          title={data?.name ?? data?.original_name}
          overview={data?.tagline ?? ""}
          url={data?.backdrop_path}
        />
        <div className="detailContainer">
          {/* detailLeft */}
          <div className="detailLeft">
            <Seasons seasons={data?.seasons} series_id={data?.id} />
            <div className="overview">
              <div className="divTitle">Açıklama</div>
              <div>{data?.overview}</div>
            </div>
            {/* castArea */}
            <div className="castArea">
              <div className="divTitle">Cast</div>
              <div className="castContainer">
                {castData?.cast.map((v: any) => {
                  const uniqId = CreateUniqKey();
                  return (
                    v.profile_path && (
                      <div className="castCard" key={uniqId}>
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
                  <StarRatings
                    rating={
                      data?.vote_average != null ? data?.vote_average / 2 : 0
                    }
                    starDimension={"24px"}
                    starSpacing={"1px"}
                    react-simple-star-rating={"#999999"}
                    starRatedColor={"#e50000"}
                  />
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
            ) : null}
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
            ) : null}
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
            ) : null}
          </div>
        </div>
        <div
          className="trialHorizontal"
          style={{ backgroundImage: `url(${trialHorizontal})` }}
        >
          <div className="horizontalContainer">
            <div className="horizontalText">
              <div className="horizontalBigText">
                Start your free trial today!
              </div>
              <div className="horizontalSmallText">
                This is a clear and concise call to action that encourages users
                to sign up for a free trial of StreamVibe.
              </div>
            </div>
            <div className="horizontalButton">
              <button>Start a Free Trial</button>
            </div>
          </div>
          <div className="fadeOutHorizontal"></div>
        </div>
      </div>
    </div>
  );
};

export default SeriesDetail;
