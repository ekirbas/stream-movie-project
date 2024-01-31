import React from "react";

const PlansItemsContainer = () => {
  return (
    <div className="itemsContainer">
      <div className="planCard">
        <div className="planText">
          <h2>Basic Plan</h2>
          <p>
            Enjoy an extensive library of movies and shows, featuring a range of
            content, including recently released titles.
          </p>
        </div>
        <div className="priceContainer">
          <div className="price">
            $9.99
            <span className="planTime">/month</span>
          </div>
        </div>
        <div className="buttonsContainer">
          <button className="trialButton">Start Free Trial</button>
          <button className="choosePlanButton">Choose Plan</button>
        </div>
      </div>
      <div className="planCard">
        <div className="planText">
          <h2>Standard Plan</h2>
          <p>
            Access to a wider selection of movies and shows, including most new
            releases and exclusive content
          </p>
        </div>
        <div className="priceContainer">
          <div className="price">
            $12.99
            <span className="planTime">/month</span>
          </div>
        </div>
        <div className="buttonsContainer">
          <button className="trialButton">Start Free Trial</button>
          <button className="choosePlanButton">Choose Plan</button>
        </div>
      </div>
      <div className="planCard">
        <div className="planText">
          <h2>Premium Plan</h2>
          <p>
            Access to a widest selection of movies and shows, including all new
            releases and Offline Viewing
          </p>
        </div>
        <div className="priceContainer">
          <div className="price">
            $14.99
            <span className="planTime">/month</span>
          </div>
        </div>
        <div className="buttonsContainer">
          <button className="trialButton">Start Free Trial</button>
          <button className="choosePlanButton">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default PlansItemsContainer;
