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
    <form className='flex mt-3 mb-4' onSubmit={handleSubmit}>
        <input 
            type='text'
            placeholder='Enter city name'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='rounded-l-[5px] pl-2 bg-white/45 font-mono border-none text-[0.8rem] font-bold'
        />

        <button className='rounded-r-[5px] bg-white/95 text-center text-black/60 cursor-pointer px-2 text-sm border-none font-semibold' >
            Search
        </button>

        
    </form>
  )
}

export default Searchbar
