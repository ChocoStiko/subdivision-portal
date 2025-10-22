import FooterComponent from '../../components/FooterComponent';
import UserNavbarComponent from '../../components/UserNavbarComponent';
import styles from '../../css/servicestyles.module.css';
import Pool from '../../assets/pool.jpg';
import Clubhouse from '../../assets/clubhouse.jpg';
import Court from '../../assets/court.jpg';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import {Link, NavLink} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

function ReservationPage(){
    const navigate = useNavigate();

    return(
        <>
        <UserNavbarComponent/>

        <Container fluid>
            <div className={styles.header}>
                <h>Reservation Type</h>

                <Row className="justify-content-center g-3 mt-4">
                    <Col xs={12} md={4} className={styles.reservation_cards}>
                        <NavLink as={Link} to="../clubhouse" className={styles.card} onClick={() => setTimeout(() => {window.scrollTo(0, 0);}, 100)}>
                            <img src={Clubhouse} className={styles.card_img_top} alt="clubhouse_img"/>
                            <div className={styles.card_body}>
                                <h1 className="card-title">Clubhouse</h1>
                                <p className="card-text">The clubhouse may be reserved for private events such as birthdays, meetings, or gatherings.Residents must book at least five (5) days in advance and ensure the venue is returned in clean condition after use.</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col xs={12} md={4} className={styles.reservation_cards}>
                        <NavLink as={Link} to="../pool" className={styles.card} onClick={() => setTimeout(() => {window.scrollTo(0, 0);}, 100)}>
                            <img src={Pool} className={styles.card_img_top} alt="pool_img"/>
                            <div className={styles.card_body}>
                                <h1 className="card-title">Community Pool</h1>
                                <p className="card-text">The community pool can be reserved for exclusive family or small group use. Proper swimwear and pool regulations must be observed. Reservations are open from 8:00 AM to 6:00 PM, subject to approval by the HOA office.</p>
                            </div>
                        </NavLink>                
                    </Col>

                    <Col xs={12} md={4} className={styles.reservation_cards}>
                        <NavLink as={Link} to="../court" className={styles.card} onClick={() => setTimeout(() => {window.scrollTo(0, 0);}, 100)}>
                            <img src={Court} className={styles.card_img_top} alt="court_img"/>
                            <div className={styles.card_body}>
                                <h1 className="card-title">Court</h1>
                                <p className="card-text">The subdivision court is available for basketball, volleyball, or other recreational activities. Reservations may be made per hour, with priority given to residents. Please observe courtesy and proper conduct while using the facility.</p>
                                </div>
                        </NavLink>
                    </Col>
                </Row>
            </div>
        </Container>
        <FooterComponent/>
        </>

    )
}
export default ReservationPage;