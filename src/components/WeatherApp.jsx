import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import WeatherBot from "./WeatherBot";
import { FaArrowLeft } from "react-icons/fa"; // Import back arrow icon

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [defaultCities] = useState(["New York", "London", "Tokyo"]);
  const [searched, setSearched] = useState(false);
  const [cityName, setCityName] = useState("");

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
      setSearched(true);
      setCityName(city);
    } catch (error) {
      alert(error.message);
    }
  };

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

  const handleBack = () => {
    setSearched(false);
    setWeather(null);
    setCityName("");
    fetchDefaultCities(); // Reload default cities when going back
  };

  useEffect(() => {
    fetchDefaultCities();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 p-6">
      <h1 className="text-white text-3xl font-semibold mb-6">Weather App</h1>
      {searched && (
        <button
          className="absolute top-5 left-6 text-white"
          onClick={handleBack}
        >
          <FaArrowLeft size={20} />
        </button>
      )}
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
      <WeatherBot />
    </div>
  );
};

export default WeatherApp;
