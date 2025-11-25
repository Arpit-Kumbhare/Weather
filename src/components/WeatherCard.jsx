import React from 'react'

const WeatherCard = ( {weather} ) => {
  return (
    <>
      <div className='mt-4 sm:mt-6'>
        <h3 className='font-semibold text-center text-xs sm:text-sm md:text-base'>
            {weather.name}, {weather.sys.country}
        </h3>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4'>
            <img 
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
              alt={weather.weather[0].description}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
            <p className='text-lg sm:text-2xl md:text-3xl font-semibold flex' >
                <span>{weather.main.temp}</span>°C
            </p>
        </div>
        <div className='flex justify-center'>
            <p className='text-gray-500 font-semibold text-xs sm:text-sm capitalize mx-auto mb-3 sm:mb-4'>
            {weather.weather[0].description}
            </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3'>
             <div className='flex flex-col sm:flex-row text-xs sm:text-sm font-semibold bg-white/70 p-2 sm:p-2.5 rounded-lg sm:rounded-xl'>
                <p>Feels like :</p>
                <span className='text-blue-600 ml-0 sm:ml-2'>{weather.main.feels_like} °C</span>
            </div>
            <div className='flex flex-col sm:flex-row text-xs sm:text-sm font-semibold bg-white/70 p-2 sm:p-2.5 rounded-lg sm:rounded-xl'>
                <p>Humidity :</p>
                <span className='text-green-600 ml-0 sm:ml-2'>{weather.main.humidity} %</span>
            </div>
            <div className='flex flex-col sm:flex-row text-xs sm:text-sm font-semibold bg-white/70 p-2 sm:p-2.5 rounded-lg sm:rounded-xl'>
                <p>Wind :</p>
                <span className='text-gray-600 ml-0 sm:ml-2'>{weather.wind.speed} m/s</span>
            </div>
            <div className='flex flex-col sm:flex-row text-xs sm:text-sm font-semibold bg-white/70 p-2 sm:p-2.5 rounded-lg sm:rounded-xl'>
                <p>Max temp :</p>
                <span className='text-red-400 ml-0 sm:ml-2'>{weather.main.temp_max} °C</span>
            </div>
        </div>

      </div>
    </>
  )
}

export default WeatherCard
