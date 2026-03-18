import React from "react";

const CityList = () => {
  const cities = ["Варшава", "Киев", "Прага", "Берлин"];

  return (
    <ul>
      {cities.map((city) => (
        <li key={city}>{city}</li>
      ))}
    </ul>
  );
};

export default CityList;
