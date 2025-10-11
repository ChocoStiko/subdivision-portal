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
                        <NavLink as={Link} to="../clubhouse" className={styles.card}>
                            <img src={Clubhouse} className={styles.card_img_top} alt="clubhouse_img"/>
                            <div className={styles.card_body}>
                                <h1 className="card-title">Clubhouse</h1>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            </div>
                        </NavLink>
                    </Col>

                    <Col xs={12} md={4} className={styles.reservation_cards}>
                        <NavLink as={Link} to="../pool" className={styles.card}>
                            <img src={Pool} className={styles.card_img_top} alt="pool_img"/>
                            <div className={styles.card_body}>
                                <h1 className="card-title">Community Pool</h1>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            </div>
                        </NavLink>                
                    </Col>

                    <Col xs={12} md={4} className={styles.reservation_cards}>
                        <NavLink as={Link} to="../court" className={styles.card}>
                            <img src={Court} className={styles.card_img_top} alt="court_img"/>
                            <div className={styles.card_body}>
                                <h1 className="card-title">Court</h1>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
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