import React from "react";
import statikVariables from "../../store/statikVariables";
import { Crew, Genre, SpokenLanguage } from "../../models/storeType";
import GenreIcon from "../../assets/images/GenreIcon";
import StarIcon from "../../assets/images/StarIcon";
import LangIcon from "../../assets/images/LangIcon";
import dayjs from "dayjs";
import DateIcon from "../../assets/images/DateIcon";
import { MovieDetailRightType } from "../../models/homeType";
//@ts-ignore
import StarRatings from "react-star-ratings";
import { CreateUniqKey } from "../../helpers/function";

const MovieDetailRight = (props: MovieDetailRightType) => {
  const { data, music, writer, directors } = props;
  return (
    <div className="detailRight">
      {/* releaseDate */}
      <div>
        <div className="divTitle">
          <DateIcon />
          Çıkış Tarihi
        </div>
        <div className="releaseDate">
          {dayjs(data?.release_date).format("DD.MM.YYYY")}
        </div>
      </div>
      {/* languagesArea */}
      <div className="languagesArea">
        <div className="divTitle">
          <LangIcon />
          Konuşulan Diller
        </div>
        <div className="languagesContainer">
          {data?.spoken_languages.map((v) => {
            const uniqId = CreateUniqKey();
            return (
              <div className="languages" key={uniqId}>
                {v.english_name}
              </div>
            );
          })}
        </div>
      </div>
      {/* voteContainer */}
      <div>
        <div className="divTitle">
          <StarIcon />
          Puan
        </div>
        <div className="ratingContainer">
          <div>Streamvibe</div>
          <div className="starsContainer">
            <StarRatings
              rating={data?.vote_average != null ? data?.vote_average / 2 : 5}
              starDimension={"24px"}
              starSpacing={"1px"}
              react-simple-star-rating={"#999999"}
              starRatedColor={"#e50000"}
            />
            <div className="ratingText">{data?.vote_average.toFixed(1)}</div>
          </div>
        </div>
      </div>
      {/* genresArea */}
      <div className="genresArea">
        <div className="divTitle">
          <GenreIcon />
          Türler
        </div>
        <div className="genresContainer">
          {data?.genres.map((v) => {
            const uniqId = CreateUniqKey();
            return (
              <div className="genres" key={uniqId}>
                {v.name}
              </div>
            );
          })}
        </div>
      </div>
      {/* directorArea */}
      {directors.length !== 0 ? (
        <div className="directorArea">
          <div className="divTitle">Yönetmen</div>
          <div className="directorContainer">
            {directors?.map((v) => {
              const uniqId = CreateUniqKey();
              return (
                <div className="director" key={uniqId}>
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
      {/* writerArea */}
      {writer.length !== 0 ? (
        <div className="directorArea">
          <div className="divTitle">Yazar</div>
          <div className="directorContainer">
            {writer?.map((v) => {
              const uniqId = CreateUniqKey();
              return (
                <div className="director" key={uniqId}>
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
      {/* musicArea */}
      {music.length !== 0 ? (
        <div className="directorArea">
          <div className="divTitle">Müzik</div>
          <div className="directorContainer">
            {music?.map((v) => {
              const uniqId = CreateUniqKey();
              return (
                <div className="director" key={uniqId}>
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
  );
};

export default MovieDetailRight;
