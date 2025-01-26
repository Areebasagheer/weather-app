import React from 'react'


const WeatherCards = (props) => {
  let citiesData = props.weather;
  return (
    <>
    {citiesData.map((weather,index) => (
        <div className="detail" key={index}>
          <h1>{weather.name}</h1>
          <img
            src={`http://openweathermap.org/img/w/${weather?.weather?.[0].icon}.png`} alt="{weather.weather[0].description}"/>
          <p className="descri">{weather.weather[0].description}</p>
          <div className='weatherss'>
          <p><strong>Temperature:</strong> {weather?.main?.temp}°C</p>
          <p><strong>Humidity: </strong> {weather?.main?.humidity}%</p>
          <p><strong>Wind: </strong> {weather.wind.speed} km/h</p>
          <p><strong>Feels Like: </strong> {weather?.main?.feels_like}°C</p>
          </div>
        </div>
      ))}
    </>
    
  )
}

export default WeatherCards;