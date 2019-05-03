import React from 'react';
import {convertUnixMonth, convertUnixDate, convertUnixDay, convertUnixTime} from '../../unixTime';
import './CurrentWeather.css'




const CurrentWeather = (props) => {
  return (
    <div className="Current-weather">
      <h2>Current Weather</h2>
      <div className="Current-weather_box">
        <div className="Current-weather_box-left">
          <p>
            {props.currentWeather.name}, {props.currentWeather.sys.country}
          </p>
          <p>
            {convertUnixDay(props.currentWeather.dt)}, {convertUnixMonth(props.currentWeather.dt)} {convertUnixDate(props.currentWeather.dt)}
          </p>
          <p>
            {convertUnixTime(props.currentWeather.dt)}
          </p>
        </div>
        <div className="Current-weather_box-left">
          <div>
            <p>
              {Math.ceil(props.currentWeather.main.temp)}<sup>o</sup>
            </p>
            <p>
              {props.currentWeather.weather[0].main}
            </p>
          </div>
          <div>
            <p>
              Sunrise {convertUnixTime(props.currentWeather.sys.sunrise)}
            </p>
            <p>
              Sunset {convertUnixTime(props.currentWeather.sys.sunset)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather