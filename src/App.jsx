import React from 'react'
import './App.css'
import Searchbar from './components/Searchbar'
import { useState } from 'react'
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import background from './assets/background.png'

const App = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async (city) => {
      setLoading(true);
      setError('');
      try {
        const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await axios.get(url);
        console.log(response.data);
        setWeather(response.data);
      } catch(err) {
        if(err.response && err.response.status === 404) {
          setError('City not found. Please try agian');
        } else {
          setError('An error occured. Please try again later');
        }
        setWeather(null);
      }
      setLoading(false);
  }

  return (
    <div 
    style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
    }}
      className='min-h-screen flex flex-col items-center justify-center bg-blue-300 text-blue-800 p-4'>

      <div className='bg-white/60 rounded-2xl px-4 sm:px-6 md:px-12 py-4 sm:py-5 w-full max-w-md sm:max-w-lg md:max-w-2xl'>
          <div className='text-blue-400 text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-2 sm:mb-1.5 font-sans'>
            <a href="/">Weather</a>
          </div>
          <Searchbar fetchWeather={fetchWeather}/>
          {loading && <p className='ml-2 sm:ml-4 font-semibold text-blue-950 text-xs sm:text-sm'>Loading...</p>}
          {error && <p className='ml-2 sm:ml-3 text-red-700 text-xs sm:text-sm font-semibold'>{error}</p>}
          {weather && <WeatherCard weather={weather}/>}
      </div>

    </div>
  )
}

export default App
