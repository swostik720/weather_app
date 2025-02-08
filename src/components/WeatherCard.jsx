import React from "react";
import { WiHumidity, WiStrongWind } from "react-icons/wi";

const WeatherCard = ({ weather }) => {
  if (!weather) return <p className="text-center text-gray-400">No data available</p>;

  const { name, main, wind, weather: weatherInfo } = weather;
  const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`;

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg w-80 text-center transition-transform transform hover:scale-105">
      <h2 className="text-xl font-semibold">{name}</h2>
      <div className="flex justify-center mt-2">
        <img src={iconUrl} alt="Weather Icon" className="w-20 h-20" />
      </div>
      <p className="text-4xl font-bold">{Math.round(main.temp - 273.15)}°C</p>
      <p className="text-sm text-gray-200">{weatherInfo[0].description}</p>

      <div className="flex justify-around mt-4">
        <div className="flex items-center space-x-2">
          <WiHumidity size={30} />
          <p className="text-sm">{main.humidity}%</p>
        </div>
        <div className="flex items-center space-x-2">
          <WiStrongWind size={30} />
          <p className="text-sm">{wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
