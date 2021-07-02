import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./../components/Card";

const Countries = () => {
  // initializer dta à un tab vide
  const [data, setData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://www.restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
      )
      .then((res) => setData(res.data));
      const sortedCountry = () => {
        const countryObject = Object.keys(data).map((i) => data[i]);
        const sortedArray = countryObject.sort((a, b) => {
          return b.population - a.population;
        });
      };
      sortedCountry();
  }, [data]);

  return (
    <div className="countries">
      <ul className="countries-list">
        {data.map((country) => (
          < Card country={country} key={country.name}/>
        ))}
      </ul>
    </div>

  );
};

export default Countries;