import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import "./CountryList.scss";

const CountryList = (props) => {
  const [countryList, setCountryList] = useState(null);
  const url = "https://corona.lmao.ninja/v2/countries?yesterday&sort";
  let content = null;
  let count = 0;
  let countryArray = [];

  async function getCountryList() {
    try {
      const response = await Axios.get(url);
      console.log(response.data);
      setCountryList(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getCountryList();
  }, [url]);

  if (countryList) {
    content = countryList
      // .filter((country, index) => {
      //   return country.deaths > 70000;
      // })
      .map((country, index) => (
        <div className="container-1" key={index}>
          <div className="card">
            <div className="index-number">
              {index + 1 < 10 ? <h2>0{index + 1}</h2> : <h2>{index + 1}</h2>}
            </div>
            <div className="country-name">
              <h2> {country.country}</h2>
            </div>
            <div className="country-flag">
              <img src={country.countryInfo.flag}></img>
            </div>
            <div className="un-ordered-list">
              <ul>
                <li>Population: {country.population}</li>
                <li>Cases: {country.cases}</li>
                <li>Recovered: {country.recovered}</li>
                <li>Deaths: {country.deaths}</li>
              </ul>
            </div>
          </div>
        </div>
      ));
  }
  return <div>{content}</div>;
};

export default CountryList;
