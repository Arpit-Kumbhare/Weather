import React from 'react'
import { useState } from 'react'

const Searchbar = ({fetchWeather}) => {
    const [city, setCity] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            fetchWeather(city);
            setCity('');
        }
    }

  return (
    <form className='flex flex-col sm:flex-row gap-2 mt-3 mb-4 w-full' onSubmit={handleSubmit}>
        <input 
            type='text'
            placeholder='Enter city name'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='flex-1 rounded-l-md sm:rounded-l-md sm:rounded-r-none rounded-r-md px-3 py-2 bg-white/45 font-mono border-none text-xs sm:text-sm font-bold placeholder-gray-600 focus:outline-none focus:bg-white/70'
        />

        <button className='rounded-r-md sm:rounded-l-none sm:rounded-r-md bg-white/95 text-center text-black/60 cursor-pointer px-4 sm:px-3 py-2 text-xs sm:text-sm border-none font-semibold hover:bg-white transition' >
            Search
        </button>
    </form>
  )
}

export default Searchbar
