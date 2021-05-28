import React from "react";
import "./ChartContent.scss";
import { Bar, Pie, Line } from "react-chartjs-2";
import Axios from "axios";
import { useState, useEffect } from "react";
let countryHistory = [];
let countryHistoryData = [];

const ChartContent = () => {
  const [fetchedCountryHistory, setFetchedCountryHistory] = useState("");
  const url = `https://corona.lmao.ninja/v2/continents?yesterday=true&sort`;

  async function getCountryHistory() {
    try {
      const response = await Axios.get(url);

      for (const history of response.data) {
        console.log(history);
        countryHistory.push(history.continent);
        countryHistoryData.push(history.deaths);
      }
      setFetchedCountryHistory(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getCountryHistory();
    console.log(countryHistoryData);
  }, [url]);

  // console.log(countryHistory);
  if (fetchedCountryHistory) {
    return (
      <div className="bar-chart-1">
        <h3>Status Chart</h3>
        <Line
          data={{
            labels: {
              fontColor: "orange",
            },
            labels: [
              countryHistory[0],
              countryHistory[1],
              countryHistory[2],
              countryHistory[3],
              countryHistory[4],
              countryHistory[5],
            ],
            datasets: [
              {
                label: "Regional Table of Death Count",
                data: [
                  countryHistoryData[0],
                  countryHistoryData[1],
                  countryHistoryData[2],
                  countryHistoryData[3],
                  countryHistoryData[4],
                  countryHistoryData[5],
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
                  "red",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
              },
            ],
          }}
          height={100}
          width={100}
          options={
            {
              // maintainAspectRatio: false,
            }
          }
        />
      </div>
    );
  }
  return <div></div>;
};

export default ChartContent;
