import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const Weather = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=f56f24967aaf51182d1d4df628297c6d&units=metric`
        );
        setWeather(response.data);
      }
    };

    fetchData();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.elements.city.value);
  };

  return (
    <div className="weather">
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="city" placeholder="Enter city name" />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
