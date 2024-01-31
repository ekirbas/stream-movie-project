import React from "react";

const PlansTable = () => {
  return (
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
              Access to a wide selection of movies and shows, including some new
              releases.
            </td>
            <td>
              Access to a wider selection of movies and shows, including most
              new releases and exclusive content
            </td>
            <td>
              Access to a widest selection of movies and shows, including all
              new releases and Offline Viewing
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
  );
};

export default PlansTable;
