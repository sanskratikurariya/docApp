import React from 'react';

const WeatherIcon = ({ condition }) => {
    const conditionIcons = {
        clear: "🌞",
        clouds: "☁️",
        rain: "☔",
        drizzle: "🌦️",
        mist: "🌫️",
        thunderstorm: "⛈️",
        snow: "❄️"
    };

    const icon = conditionIcons[condition.toLowerCase()] || '🌈'; // Default icon if condition is not found

    return (
        <div className='flex justify-center items-center mt-4'>
            <div className='text-6xl animate-pulse transition-transform transform hover:scale-110'>
                {icon}
            </div>
        </div>
    );
}

export default WeatherIcon;
