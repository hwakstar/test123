import React, { useEffect, useState } from "react";
import Select from "react-select";

 const SelectCountry = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);
  return (
    <div className="pt-3">
        <label className="input-label" htmlFor="country">
            Country
        </label>
        <Select
        id="country"
        className="select-country"
        options={countries}
        value={selectedCountry}
        onChange={(selectedOption) => setSelectedCountry(selectedOption)}
        />
    </div>
  );
};

export default SelectCountry;