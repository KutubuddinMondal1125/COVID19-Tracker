import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Cards from "./components/card/Cards";
import Chart from "./components/chart/Chart";
import CountryPicker from "./components/countrypicker/CountryPicker";
import { fetchDataApi } from "./api";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataApi();

      setData(data);
    };
    fetchData();
    //eslint-disable-next-line
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchDataApi(country);

    setData(data);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="https://i.ibb.co/7QpKsCX/image.png"
        alt="COVID-19"
      />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
