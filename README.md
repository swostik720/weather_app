# Weather App

A weather application that allows users to search for weather information by city name, as well as view the weather of a few default cities. The app provides weather details such as temperature, humidity, wind speed, and weather descriptions.

## Features

- Search weather by city name.
- Display weather for default cities (New York, London, Tokyo).
- Show temperature in Celsius.
- Display weather description, humidity, and wind speed.
- Interactive and responsive user interface built with React and Tailwind CSS.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **OpenWeatherMap API**: Weather data API to fetch weather information.

## Setup and Installation

### Prerequisites

Make sure you have the following installed on your local machine:

- **Node.js**: To run the project and install dependencies.
- **npm**: To manage project dependencies.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather_app.git
   cd weather_app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory of the project and add your OpenWeatherMap API key:

   ```
   VITE_WEATHER_API=your_openweathermap_api_key
   ```

   You can get your API key by signing up on [OpenWeatherMap](https://openweathermap.org/api).

4. Run the app locally:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:3000`.

## Usage

- **Search Bar**: Type the name of a city and click the search button or press "Enter" to view weather information for that city.
- **Default Cities**: Weather information for New York, London, and Tokyo is displayed on page load.
- **Weather Card**: Each city’s weather is displayed in a card showing the temperature, description, humidity, and wind speed.

## Contributing

Feel free to fork this repository and submit pull requests. All contributions are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).
