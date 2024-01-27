import React from "react";
import TrialHorizontal from "../components/TrialHorizontal";

const Subscriptions = () => {
  return (
    <div className="subscriptions">
      <div className="contentContainer">
        {/* plansArea */}
        <div className="plansArea">
          {/* topContainer */}
          <div className="topContainer">
            <div className="textContainer">
              <div className="topTitle">
                Choose the plan that's right for you
              </div>
              <div className="topText">
                Join StreamVibe and select from our flexible subscription
                options tailored to suit your viewing preferences. Get ready for
                non-stop entertainment!
              </div>
            </div>
            <div className="tabs">Monthly</div>
          </div>
          {/* itemsContainer */}
          <div className="itemsContainer">
            <div className="planCard">
              <div className="planText">
                <h2>Basic Plan</h2>
                <p>
                  Enjoy an extensive library of movies and shows, featuring a
                  range of content, including recently released titles.
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
                  Access to a wider selection of movies and shows, including
                  most new releases and exclusive content
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
                  Access to a widest selection of movies and shows, including
                  all new releases and Offline Viewing
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
        </div>
        {/* plansDetailArea */}
        <div className="plansDetailArea">
          <div className="topContainer">
            <div className="plansDetailTitle">
              Compare our plans and find the right one for you
            </div>
            <div className="plansDetailText">
              StreamVibe offers three different plans to fit your needs: Basic,
              Standard, and Premium. Compare the features of each plan and
              choose the one that's right for you.
            </div>
          </div>
          {/* plansTable */}
          <div className="plansTable">
            <table>
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Basic</th>
                  <th>
                    Standart <span className="popularText">Popular</span>
                  </th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Price</td>
                  <td>$9.99/Month</td>
                  <td>$12.99/Month</td>
                  <td>$14.99/Month</td>
                </tr>
                <tr>
                  <td>Content</td>
                  <td>
                    Access to a wide selection of movies and shows, including
                    some new releases.
                  </td>
                  <td>
                    Access to a wider selection of movies and shows, including
                    most new releases and exclusive content
                  </td>
                  <td>
                    Access to a widest selection of movies and shows, including
                    all new releases and Offline Viewing
                  </td>
                </tr>
                <tr>
                  <td>Devices</td>
                  <td>Watch on one device simultaneously</td>
                  <td>Watch on Two device simultaneously</td>
                  <td>Watch on Two device simultaneously</td>
                </tr>
                <tr>
                  <td>Free Trail</td>
                  <td>7 Days</td>
                  <td>7 Days</td>
                  <td>7 Days</td>
                </tr>
                <tr>
                  <td>Cancel Anytime</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>HDR</td>
                  <td>No</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Dolby Atmos</td>
                  <td>No</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Ad - Free</td>
                  <td>No</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Offline Viewing</td>
                  <td>No</td>
                  <td>Yes, for select titles.</td>
                  <td>Yes, for all titles.</td>
                </tr>
                <tr>
                  <td>Family Sharing</td>
                  <td>No</td>
                  <td>Yes, up to 5 family members.</td>
                  <td>Yes, up to 6 family members.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <TrialHorizontal />
      </div>
    </div>
  );
};

export default Subscriptions;
