import { useState } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';

const apiKey = 'acebd3ca57737279ee54a0cecd038280';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault();
    setError(null);
    setWeatherData(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className='min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 flex items-center justify-center p-7'>
        <div className='bg-white shadow-lg rounded-2xl p-10 max-w-md w-full transition-transform transform hover:scale-105'>
          <form onSubmit={fetchWeather} className='mb-6'>
            <h1 className='text-center font-bold mb-6 text-5xl text-blue-950'>
              Weather App
            </h1>
            <input
              type='text'
              placeholder='Enter city'
              value={city}
              className='w-full px-4 py-2 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              type='submit'
              className='w-full text-white font-bold text-xl p-2 mt-4 bg-blue-500 hover:bg-blue-700 transition duration-300 transform hover:scale-105'
            >
              Search
            </button>
          </form>
          <WeatherCard weatherData={weatherData} error={error} />
        </div>
      </div>
    </>
  );
}

export default App;
