import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";

const WeatherBot = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you with the weather today?", sender: "bot" },
    ]);
    const [showBot, setShowBot] = useState(false);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleUserMessage = (e) => {
        setInput(e.target.value);
    };

    const fetchWeather = async (city) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API}`
            );
            if (!response.ok) throw new Error("City not found");
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error("Failed to fetch weather data");
        }
    };

    const extractCityFromQuestion = (question) => {
        const regexPatterns = [
            /\b(?:weather in|what's the weather in|tell me the weather of|temperature in|how's the weather in|forecast for|can you tell me the weather of|current weather of)\s+([A-Za-z\s]+)\??/i,
            /\b(?:is it raining in|is it hot in|is it cold in|is there snowfall in|how cold is it in|how hot is it in|is there a storm in)\s+([A-Za-z\s]+)\??/i,
            /\b(?:check weather in|show me the weather in|give me the weather for|do you have weather info for)\s+([A-Za-z\s]+)\??/i,
            /\b(?:tell me if it’s sunny in|tell me if it’s cloudy in|tell me if it’s snowing in|will it rain in|does it rain in)\s+([A-Za-z\s]+)\??/i,
            /\b([A-Za-z\s]+)\b/, // Matches only city name input
        ];
        for (let pattern of regexPatterns) {
            const match = question.toLowerCase().match(pattern);
            if (match) return match[1].trim();
        }
        return null;
    };

    const handleSendMessage = async () => {
        if (input.trim() !== "") {
            const city = extractCityFromQuestion(input);
            setMessages((prev) => [...prev, { text: input, sender: "user" }]);
            if (city) {
                setMessages((prev) => [...prev, { text: `Fetching weather for ${city}...`, sender: "bot" }]);
                try {
                    const weatherData = await fetchWeather(city);
                    const weatherMessage = `The weather in ${weatherData.name} is ${weatherData.weather[0].description} with a temperature of ${Math.round(weatherData.main.temp - 273.15)}°C.`;
                    setMessages((prev) => [...prev, { text: weatherMessage, sender: "bot" }]);
                } catch (error) {
                    setMessages((prev) => [
                        ...prev,
                        { text: "Sorry, I couldn't fetch the weather data. Please try again.", sender: "bot" },
                    ]);
                }
            } else {
                setMessages((prev) => [
                    ...prev,
                    { text: "Sorry, I couldn't understand the city name. Please try again.", sender: "bot" },
                ]);
            }
            setInput("");
        }
    };

    return (
        <>
            {/* Weather Bot Icon */}
            <div
                className={`fixed bottom-6 right-6 bg-blue-500 rounded-full p-3 cursor-pointer shadow-lg transition-all duration-300 ${showBot ? "rotate-45" : ""}`}
                onClick={() => setShowBot(!showBot)}
            >
                <WiDaySunny size={30} color="white" />
            </div>

            {/* Weather Bot Chat Interface */}
            {showBot && (
                <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-lg p-4 z-50">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Weather Bot</h2>
                        <button className="text-gray-500" onClick={() => setShowBot(false)}>
                            <FaArrowLeft size={20} />
                        </button>
                    </div>
                    <div
                        className="h-48 overflow-y-auto mb-4 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent"
                        ref={chatContainerRef}
                    >
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex items-start mb-3 ${msg.sender === "bot" ? "flex-row" : "flex-row-reverse"}`}
                            >
                                {msg.sender === "bot" && (
                                    <img
                                        src="/bot_avatar.jpg"
                                        alt="bot-avatar"
                                        className="w-8 h-8 rounded-full border mr-2"
                                    />
                                )}
                                <div
                                    className={`max-w-[70%] p-2 rounded-lg ${msg.sender === "bot"
                                        ? "bg-blue-100 text-blue-900 rounded-bl-none"
                                        : "bg-green-100 text-green-900 rounded-br-none"
                                        } shadow-sm`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none"
                            placeholder="Ask about the weather..."
                            value={input}
                            onChange={handleUserMessage}
                            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        />
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-lg transition duration-200"
                            onClick={handleSendMessage}
                        >
                            <FaSearch />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default WeatherBot;
