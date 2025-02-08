# 🌤️ Weather App  

A responsive and interactive weather application that allows users to search for weather information by city name and view weather updates for default cities. The app provides essential weather details, such as temperature, weather conditions, humidity, and wind speed.

---

## ✨ Features

- 🌎 **City Search:** Find weather information by entering a city name.
- 📍 **Default Cities:** Displays weather information for New York, London, and Tokyo on load.
- 🌡️ **Real-Time Weather Data:** Provides current temperature in Celsius, weather conditions, humidity, and wind speed.
- 🤖 **Weather Chat Bot:** Ask weather-related questions through an AI-powered chatbot interface.
- 🎨 **Responsive UI:** Built with Tailwind CSS for a clean and modern design.
- ⚡ **Fast and Lightweight:** Optimized for speed and user experience.

---

## 🛠️ Technologies Used

- **React:** For building the user interface.
- **Tailwind CSS:** Styling framework for modern UI design.
- **OpenWeatherMap API:** Provides real-time weather data.
- **React Icons:** For sleek and intuitive icons.
- **Vite:** Lightning-fast development environment.

---

## 🚀 Setup and Installation

### Prerequisites

Ensure the following are installed:

- **Node.js**: To run the project and manage dependencies.
- **npm**: Node package manager.

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/weather_app.git
   cd weather_app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Environment Setup**:
   
   Create a `.env` file in the root directory and add your OpenWeatherMap API key:

   ```env
   VITE_WEATHER_API=your_openweathermap_api_key
   ```

   Get your API key by signing up at [OpenWeatherMap](https://openweathermap.org/api).

4. **Run the project locally**:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

---

## 🧑‍💻 Usage Instructions

- **Search Bar:** Enter a city name and click the search button or press "Enter" to view weather updates.
- **Weather Cards:** Displays temperature, humidity, and wind speed for default and searched cities.
- **Weather Bot:** Click the chatbot icon and ask questions like:
  - *What's the weather in Tokyo?*
  - *Is it raining in New York?*
  - *What's the temperature in London?*

---

## 🧩 Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx
│   ├── WeatherBot.jsx
│   ├── WeatherCard.jsx
│   └── WeatherApp.jsx
├── App.jsx
└── main.jsx
```

---

## 👏 Contributions

Contributions are welcome! If you'd like to improve this project, please:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 📫 Contact

For questions or feedback, please reach out at [paneruswostik@gmail.com].

---

### 🚀 Happy Coding! 🚀 