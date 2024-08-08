import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar/index.jsx'; 
import LandingPage from './containers/LandingPage/index.jsx';  

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
    </div>
  );
}

export default App;
