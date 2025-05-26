import React from 'react'

const WeatherCard = ( {weather} ) => {
  return (
    <>
      <div className='mt-2 '>
        <h3 className='font-semibold text-center text-[0.8rem]'>
            {weather.name}, {weather.sys.country}
        </h3>
        <div className='flex items-center justify-center'>
            <img 
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
              alt={weather.weather[0].description}
              className="w-16 h-16"
              />
            <p className='text-[0.8rem] font-semibold flex' >
                <span>{weather.main.temp}
                </span>°C
            </p>
        </div>
        <div className='flex justify-center'>
            <p className='text-gray-500 font-semibold text-[0.8rem] capitalize mx-auto mb-2'>
            {weather.weather[0].description}
            </p>
        </div>

        <div className='ml-1 grid grid-cols-2 gap-2'>
             <div className='flex text-[0.8rem] font-semibold bg-white/70 p-1.5 rounded-xl'>
                <p>Feels like :</p>&nbsp;&nbsp;
                <span className='text-blue-600'>{weather.main.feels_like} °C</span>
            </div>
            <div className='flex text-[0.8rem] font-semibold bg-white/70 p-1.5 rounded-xl'>
                <p>Humidity :</p>&nbsp;&nbsp;
                <span className='text-green-600'>{weather.main.humidity} %</span>
            </div>
            <div className='flex text-[0.8rem] font-semibold bg-white/70 p-1.5 rounded-xl'>
                <p>Wind :</p>&nbsp;&nbsp;
                <span className='text-gray-600'>{weather.wind.speed} m/s</span>
            </div>
            <div className='flex text-[0.8rem] font-semibold bg-white/70 p-1.5 rounded-xl'>
                <p>Max temp :</p>&nbsp;&nbsp;
                <span className='text-red-400'>{weather.main.temp_max} %</span>
            </div>
        </div>


      </div>
    </>
  )
}

export default WeatherCard
