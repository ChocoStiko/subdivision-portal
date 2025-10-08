import FooterComponent from '../../components/FooterComponent';
import UserNavbarComponent from '../../components/UserNavbarComponent';
import '../../styles.css';
import '../../reservationstyles.css';
import Pool from '../../assets/pool.jpg'
import Clubhouse from '../../assets/clubhouse.jpg'
import Court from '../../assets/court.jpg'
import { useNavigate } from 'react-router-dom';

function ReservationPage(){
    const navigate = useNavigate();

    return(
        <>
        <UserNavbarComponent/>

        <div className='header'>

        <h> Reservation Type</h>
        </div>


        <div className='reservation_cards'>
            <div className="card" style={{width: 50 + 'rem'}} onClick={() => navigate('/reserve/clubhouse')}>
                <img src={Clubhouse} className="card-img-top stretch-img" alt="..."/>
                <div className="card-body">
                    <h1 className="card-title">Clubhouse</h1>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>

            <div className="card" style={{width: 50 + 'rem'}} onClick={() => navigate('/reserve/pool')}>
                <img src={Pool} className="card-img-top stretch-img" alt="..."/>
                <div className="card-body">
                    <h1 className="card-title">Community Pool</h1>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>

            <div className="card" style={{width: 50 + 'rem'}} onClick={() => navigate('/reserve/court')}>
                <img src={Court} className="card-img-top stretch-img" alt="..."/>
                <div className="card-body">
                    <h1 className="card-title">Court</h1>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </div>
        </div>


        <FooterComponent/>
        </>

    )
}
export default ReservationPage;