import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [defaultCities, setDefaultCities] = useState(["New York", "London", "Tokyo"]); // Default cities
  const [searched, setSearched] = useState(false); // Track search state

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API}`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
      setSearched(true); // Hide default cities on search
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const fetchDefaultCities = async () => {
      const cityWeatherData = await Promise.all(
        defaultCities.map(async (city) => {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API}`
          );
          return response.ok ? response.json() : null;
        })
      );
      setWeather(cityWeatherData.filter((data) => data !== null));
    };

    fetchDefaultCities();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 p-6">
      <h1 className="text-white text-3xl font-semibold mb-6">Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {searched ? (
          weather && <WeatherCard weather={weather} />
        ) : (
          weather &&
          weather.map((cityWeather, index) => (
            <WeatherCard key={index} weather={cityWeather} />
          ))
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
