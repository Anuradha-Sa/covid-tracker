import React from "react";
import "./AllCountryPage.scss";
import CountryList from "./CountryList";

const AllCountryPage = (props) => {
  console.log(props);
  return (
    <div className="all-country">
      <div className="harlf-circle">
        <div className="half-circle-content">
          <h1>Covid Update</h1>

          <p>Consectetur in proident velit adipisicing.</p>
        </div>
      </div>
      <div className="all-country-list">
        <CountryList></CountryList>
      </div>
    </div>
  );
};

export default AllCountryPage;
