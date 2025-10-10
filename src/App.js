import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/LoginPage';
import Home from './pages/HomePage';
import Registration from './pages/RegistrationPage';
import UserHome from './pages/UserHomePage';
import News from './pages/NewsPage';
import CarSticker from './pages/services/CarStickerPage';
import Reservation from './pages/services/ReservationPage';
import Move from './pages/services/MovePage';
import Hoa from './pages/offices/HoaPage';
import HealthCenter from './pages/offices/HealthCenterPage';
import Clubhouse from './pages/reserve/ClubhousePage';
import Pool from './pages/reserve/PoolPage';
import Court from './pages/reserve/CourtPage';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/homepage' element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path='/registration' element={<Registration/>} /> 
            <Route path='/userhome' element = {<UserHome/>} />
            <Route path='/news' element = {<News/>} />
            <Route path='/reservation' element = {<Reservation/>} />
            <Route path='/car_sticker'element = {<CarSticker/>} />
            <Route path='/move' element = {<Move/>} />
            <Route path='/hoa' element={<Hoa/>} />
            <Route path='/health_center' element={<HealthCenter/>} />
            <Route path='/clubhouse' element={<Clubhouse/>} />
            <Route path='/pool' element={<Pool/>} />
            <Route path='/court' element={<Court/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
