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
        minHeight: '100vh',
        minWidth: '100vh'
    }}
      className='min-h-screen flex flex-col items-center justify-center bg-blue-300 text-blue-800'>

      <div className='bg-white/60 rounded-2xl px-[3rem] py-2.5'>
          <div className='text-blue-400 text-3xl font-extrabold text-center mb-1.5 font-sans'>
            <a href="/">Weather</a>
          </div>
          <Searchbar fetchWeather={fetchWeather}/>
          {loading && <p className='ml-9 font-semibold text-blue-950 text-[]0.5rem'>Loading...</p>}
          {error && <p className='ml-6 text-red-700 text-[0.75rem] font-semibold'>{error}</p>}
          {weather && <WeatherCard weather={weather}/>}
      </div>

    </div>
  )
}

export default App
