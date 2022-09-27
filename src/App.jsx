import './App.scss';
import SideBar from './components/SideBar/SideBar';
import Container from './components/Container/Container';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <SideBar></SideBar>
      </div>
     
      <div className="main">
        <div className="item-1"><Container text="Hi"></Container></div>
        <div className="item-2"><Container text="Hi"></Container> </div>
        <div className="item-3"><Container text="Hi"></Container> </div>
      </div>
    </div>
  );
}

export default App;
