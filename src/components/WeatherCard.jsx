import React from 'react';
import WeatherIcon from './WeatherIcon';

const WeatherCard = ({ weatherData, error }) => {
    if (error) {
        return <p className='text-red-500 text-center font-semibold'>{error}</p>;
    }
    if (!weatherData) {
        return null;
    }

    return (
        <div className='bg-white shadow-lg rounded-xl p-6 mt-4 transition-transform transform hover:scale-105'>
            <div className='text-center'>
                <div className='text-3xl font-bold text-blue-600'>{weatherData.name}</div>
                <p className='text-4xl font-extrabold text-blue-800'>{weatherData.main.temp}°C</p>
                <p className='text-xl text-gray-600 capitalize'>{weatherData.weather[0].description}</p>
                <div className='mt-4'>
                    <WeatherIcon condition={weatherData.weather[0].main} />
                </div>
            </div>
            <div className='mt-6 border-t pt-4 text-gray-500'>
                <p className='text-lg'>Humidity: {weatherData.main.humidity}%</p>
                <p className='text-lg'>Wind Speed: {weatherData.wind.speed} m/s</p>
            </div>
        </div>
    );
}

export default WeatherCard;
