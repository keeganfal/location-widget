import './WeatherBasicContainer.scss';

const WeatherBasicContainer = ({lat, lng, status, getLocation}) => {

  

  return (
    <div className="weatherBasicContainer">
        <p>{lat}{lng}{status}</p> 
        <button onClick={getLocation}>Get/Update Location</button>
    </div>
  );
};

export default WeatherBasicContainer;