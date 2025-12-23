import React, { useState } from 'react'

const Card = () => {
  const [city, setcity] = useState('');
  const [weather, setweather] = useState(null);
  const [error, seterror] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY = 'yourAPIKey'; //better store in .env file

  async function handleClick() {
    if (!city) return;
    setLoading(true);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setweather(data);
      seterror('');
    } catch (e) {
      seterror('Error : City not found');
      setweather('');
    }
    finally{
      setLoading(false);
      setcity('');
    }

  }

  return (

    <div className='flex flex-col items-center gap-4 bg-gray-200 p-8 mx-auto mt-8 w-[90%] max-w-lg  rounded-lg shadow-xl'>
      <h1 className='text-4xl font-semibold '>WeatherApp</h1>
      <div className='flex items-center mt-4'>
        <input type="text" value={city}
          onChange={(e) => { setcity(e.target.value) }}
          placeholder='Enter the City'
          className='border-2 border-r-0 rounded-l-lg px-2 py-1 md:text-lg' onKeyDown={(e)=>{
            if(e.key === 'Enter'){
              handleClick();
              }
          }}/>
        <button onClick={handleClick}
          className='px-2 py-1 md:text-lg border-2 border-l-0 rounded-r-lg bg-blue-500 hover:bg-blue-600 cursor-pointer'>Search</button>
      </div>

      {loading && <p className='mt-4 text-xl text-blue-500 font-semibold'>Loading...</p>}

      {error && <p className='mt-4 text-xl text-red-600'>{error}</p>}

      {weather && (
        <div className='mt-6 text-center'>
          <h1 className='text-3xl font-semibold'>{weather.name}, <span className='text-lg '>{weather.sys.country}</span></h1>
          <div className='mt-2 flex justify-center'>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].main} />
          </div>
          <p className='text-xl capitalize'>{weather.weather[0].description}</p>

          <div className='flex gap-5 flex-wrap mt-4'>
            <div className='flex-1 text-wrap border p-2 rounded-lg bg-black/10'>
              <p>Temperature &#127777;: {weather.main.temp} &deg;C</p>
              <p>Humidity &#127787;: {weather.main.humidity}%</p>
            </div>
            <div className='flex-1 text-wrap border p-2 rounded-lg bg-black/10'>
              <p>Sunrise &#127774;: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
              <p>Sunset &#127771;: {new Date(weather.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
            </div>
          </div>

        </div>
      )}

    </div>
  )
}

export default Card
