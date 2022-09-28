import './App.scss';
import SideBar from './components/SideBar/SideBar';
import Container from './components/Container/Container';
import WeatherBasicContainer from './components/WeatherBasicContainer/WeatherBasicContainer';
import WeatherAddContainer from './components/WeatherAddContainer/WeatherAddContainer';

import { useState } from 'react';

function App() {

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [weatherBasic, setWeatherBasic] = useState({"location":{"name":"Coley","region":"Berkshire","country":"United Kingdom","lat":51.44,"lon":-0.99,"tz_id":"Europe/London","localtime_epoch":1664309849,"localtime":"2022-09-27 21:17"},"current":{"last_updated_epoch":1664309700,"last_updated":"2022-09-27 21:15","temp_c":7.0,"temp_f":44.6,"is_day":0,"condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},"wind_mph":3.8,"wind_kph":6.1,"wind_degree":250,"wind_dir":"WSW","pressure_mb":1000.0,"pressure_in":29.53,"precip_mm":0.0,"precip_in":0.0,"humidity":93,"cloud":0,"feelslike_c":5.0,"feelslike_f":41.1,"vis_km":10.0,"vis_miles":6.0,"uv":1.0,"gust_mph":12.3,"gust_kph":19.8}});

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });

      console.log(lat, lng, status);
    }
  }

  const getWeatherBasic = async () => {
    const key = "1885cb48703e4724a41190049222609";
    const url = "https://api.weatherapi.com/v1/current.json";
    let urlWithParams = url + `?key=${key}&q=${lat},${lng}&aqi=no`;

    const res = await fetch(urlWithParams);
    const data = await res.json();

    setWeatherBasic(data);
    console.log(data.location.name);
  };
  

  return (
    <div className="App">
      <div className="sidebar">
        <SideBar></SideBar>
      </div>
     
      <div className="main">
        <div className="item-1"><WeatherBasicContainer area={weatherBasic.location.name} region={weatherBasic.location.region} country={weatherBasic.location.country} time={weatherBasic.location.localtime} temp={weatherBasic.current.temp_c} getLocation={getLocation} getWeatherBasic={getWeatherBasic}> </WeatherBasicContainer></div>
        <div className="item-2"><WeatherAddContainer wind={weatherBasic.current.wind_mph} pressure={weatherBasic.current.pressure_mb} humidity={weatherBasic.current.humidity}></WeatherAddContainer> </div>
        <div className="item-3"><Container text={status}></Container> </div>
      </div>
    </div>
  );
}

export default App;
