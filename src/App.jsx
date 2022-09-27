import './App.scss';
import SideBar from './components/SideBar/SideBar';
import Container from './components/Container/Container';
import WeatherBasicContainer from './components/WeatherBasicContainer/WeatherBasicContainer';

import { useState } from 'react';

function App() {

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

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
    }
  }
  
  return (
    <div className="App">
      <div className="sidebar">
        <SideBar></SideBar>
      </div>
     
      <div className="main">
        
        <div className="item-1"><WeatherBasicContainer lat={lat} lng={lng} status={status} getLocation={getLocation}> </WeatherBasicContainer></div>
        <div className="item-2"><Container text={status}></Container> </div>
        <div className="item-3"><Container text={status}></Container> </div>
      </div>
    </div>
  );
}

export default App;
