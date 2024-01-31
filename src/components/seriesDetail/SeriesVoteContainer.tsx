import React from "react";
import StarIcon from "../../assets/images/StarIcon";
import { SeriesVoteContainerType } from "../../models/homeType";
//@ts-ignore
import StarRatings from "react-star-ratings";

const SeriesVoteContainer = (props: SeriesVoteContainerType) => {
  const { data } = props;
  return (
    <div>
      <div className="divTitle">
        <StarIcon />
        Puan
      </div>
      <div className="ratingContainer">
        <div>Streamvibe</div>
        <div className="starsContainer">
          <StarRatings
            rating={data?.vote_average != null ? data?.vote_average / 2 : 0}
            starDimension={"24px"}
            starSpacing={"1px"}
            react-simple-star-rating={"#999999"}
            starRatedColor={"#e50000"}
          />
          <div className="ratingText">{data?.vote_average.toFixed(1)}</div>
        </div>
      </div>
    </div>
  );
};

export default SeriesVoteContainer;
