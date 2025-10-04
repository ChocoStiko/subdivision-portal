import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent';
import Login from './pages/LoginPage';
import Home from './pages/HomePage';
import Registration from './pages/RegistrationPage';

function App() {
  return (
    <div className="App">
        <Router>
          <NavbarComponent/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path='/registration' element={<Registration/>} />  
          </Routes>
        </Router>
    </div>
  );
}

export default App;
