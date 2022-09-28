import './WeatherBasicContainer.scss';

const WeatherBasicContainer = ({area, region, country, temp, getLocation, getWeatherBasic}) => {

  return (
    <div className="weatherBasicContainer">
        <p className='area'>{area}, {region}</p> 
        <p className='country'>{country}</p> 
        <p className='temp'>{temp}°C</p> 
        <button onClick={getLocation}>Get/Update Location</button>
        <button onClick={getWeatherBasic}>Get Weather</button>
    </div>
  );
};

export default WeatherBasicContainer;