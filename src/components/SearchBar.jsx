import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
      setCity(""); // Clear input after search
    }
  };

  return (
    <div className="flex items-center bg-white rounded-full p-3 shadow-lg w-full max-w-md">
      <input
        type="text"
        className="flex-1 px-4 py-2 text-gray-700 rounded-l-full focus:outline-none"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()} // Search on Enter key
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition duration-200"
        onClick={handleSearch}
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
