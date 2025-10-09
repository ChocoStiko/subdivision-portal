import FooterComponent from '../../components/FooterComponent';
import UserNavbarComponent from '../../components/UserNavbarComponent';
import styles from '../../css/servicestyles.module.css';
import Pool from '../../assets/pool.jpg'
import Clubhouse from '../../assets/clubhouse.jpg'
import Court from '../../assets/court.jpg'
import { useNavigate } from 'react-router-dom';
import {Link, NavLink} from 'react-router-dom';

function ReservationPage(){
    const navigate = useNavigate();

    return(
        <>
        <UserNavbarComponent/>

        <div className={styles.header}>
            <h> Reservation Type</h>
        


        <div className={styles.reservation_cards}>
            <NavLink as={Link} to="../clubhouse" className={styles.card} style={{width: 50 + 'rem'}}>
                <img src={Clubhouse} className={styles.card_img_top} alt="..."/>
                <div className={styles.card_body}>
                    <h1 className="card-title">Clubhouse</h1>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </NavLink>

            <NavLink as={Link} to="../pool" className={styles.card} style={{width: 50 + 'rem'}}>
                <img src={Pool} className={styles.card_img_top} alt="..."/>
                <div className={styles.card_body}>
                    <h1 className="card-title">Community Pool</h1>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </NavLink>

            <NavLink as={Link} to="../court" className={styles.card} style={{width: 50 + 'rem'}}>
                <img src={Court} className={styles.card_img_top} alt="..."/>
                <div className={styles.card_body}>
                    <h1 className="card-title">Court</h1>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
            </NavLink>
        </div>

        </div>
        <FooterComponent/>
        </>

    )
}
export default ReservationPage;