import './App.scss';
import SideBar from './components/SideBar/SideBar';
import Container from './components/Container/Container';

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      
      <div className="main">
        <Container text="Hi"></Container> 
        <Container text="Hi"></Container> 
      </div>
    </div>
  );
}

export default App;
