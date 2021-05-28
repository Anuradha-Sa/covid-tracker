import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import "./CountryDropDown.scss";

const CountryDropDown = (props) => {
  const [countryListData, setCountryListData] = useState(null);
  const url = "https://corona.lmao.ninja/v2/countries?yesterday&sort";
  let optionItems = null;
  let countryArray = [];
  let name = null;

  async function getCountryListData(props) {
    try {
      const response = await Axios.get(url);
      setCountryListData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getCountryListData();
  }, [url]);

  if (countryListData) {
    countryListData.forEach((element) => {
      countryArray.push({
        label: element.country,
        img: element.countryInfo.flag,
        value: element.countryInfo._id,
      });
    });

    optionItems = countryArray.map((data) => (
      <option key={data.value} value={data.label}>
        {data.label}
      </option>
    ));
  }

  function handleChange(e) {
    name = e.target.value;
    props.getSelectedValue(name);
  }

  return (
    <div>
      <select onChange={handleChange}>{optionItems}</select>
    </div>
  );
};

export default CountryDropDown;
