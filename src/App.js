import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent';
import Login from './pages/LoginPage';

function App() {
  return (
    <div className="App">
        <Router>
          <NavbarComponent/>
          <HeroComponent/>
          <Routes>
            <Route path="/login" element={<Login/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
