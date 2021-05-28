import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import "./Country.scss";
import CountryDropDown from "./CountryDropDown";
import { Bar, Pie, Line } from "react-chartjs-2";

const Country = () => {
  let countryHistory = [];
  let countryHistoryData = [];

  const [country, setCountry] = useState("Australia");
  const [fetchedCountry, setFetchedCountry] = useState("");
  const url = `https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query`;

  async function getCountry() {
    try {
      const response = await Axios.get(url);
      // console.log(response.data);
      setFetchedCountry(response.data);
      //countryHistory.push(fetchedCountry.country);
      // countryHistory.push(fetchedCountry.deaths);
      console.log(response.data);
      //  for (const history of response.data) {
      //   console.log(history);
      countryHistory.push(response.data.country);
      countryHistoryData.push(response.data.deaths);
      console.log(countryHistory, countryHistoryData);
      //   }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getCountry();
  }, [url]);

  if (fetchedCountry) {
    console.log(countryHistory);
    return (
      <div className="country-content">
        <div className="country-half-circle">
          <h2>Get The Update</h2>
          <p>
            Deserunt ullamco laboris labore ex cupidatat irure reprehenderit
          </p>
        </div>
        <div className="single-country-content">
          {/* <img
          crossOrigin="Anonymous"
          src="https://images.unsplash.com/photo-1618255697744-b45454ae6b39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        ></img> */}
          <div className="country-filter">
            {/* <div className="country-status"> */}
            <span>
              <h3>COUNTRY STATUS</h3>
            </span>
            {/* </div> */}
            {/* <div className="container-2"> */}
            <CountryDropDown
              className="styles.country-drop-down"
              getSelectedValue={(country) => setCountry(country)}
            ></CountryDropDown>
            <h2>{fetchedCountry.country}</h2>
            <img
              src={fetchedCountry.countryInfo.flag}
              className="country-flag"
            ></img>
            <h3>Population: {fetchedCountry.population}</h3>
            <h3>Cases: {fetchedCountry.cases}</h3>
            <h3>Recovered: {fetchedCountry.recovered}</h3>
            <h3>Deaths: {fetchedCountry.deaths}</h3>
            {/* </div> */}
          </div>

          {/* <div className="bar-chart-content"> */}
          <div className="bar-chart">
            <h3>Status Chart</h3>
            <Pie
              data={{
                labels: [
                  "deaths",
                  "recovered",
                  "cases",
                  //    countryHistory[0],
                  //  "a",
                  // countryHistory[1],
                  // countryHistory[2],
                  // countryHistory[3],
                  // countryHistory[4],
                  // countryHistory[5],
                ],
                datasets: [
                  {
                    label: "Regional Table of Death Count",
                    data: [
                      fetchedCountry.deaths,
                      fetchedCountry.recovered,
                      fetchedCountry.cases,
                      // "210",
                      //  countryHistoryData[0],
                      // countryHistoryData[1],
                      // countryHistoryData[2],
                      // countryHistoryData[3],
                      // countryHistoryData[4],
                      // countryHistoryData[5],
                    ],
                    backgroundColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                  },
                ],
              }}
              // height={100}
              // width={100}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }

  return <div></div>;
};

export default Country;
