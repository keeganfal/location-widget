import './WeatherAddContainer.scss';

const WeatherAddContainer = ({wind, pressure, humidity}) => {

  return (
    <div className="weatherAddContainer">
        <p className='wind'>Wind Speed: {wind}mph</p> 
        <p className='pressure'>Pressure: {pressure}hpa</p> 
        <p className='humidity'>Humidity: {humidity}%</p> 
    </div>
  );
};

export default WeatherAddContainer;