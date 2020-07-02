import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import { fetchCountriesApi } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setCountries(await fetchCountriesApi());
    };

    fetchCountries();
    //eslint-disable-next-line
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((country, index) => (
          <option value={country} key={index}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
