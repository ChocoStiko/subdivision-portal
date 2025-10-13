import FooterComponent from "../../components/FooterComponent";
import UserNavbarComponent from "../../components/UserNavbarComponent";
import styles from "../../css/servicestyles.module.css";
import poolImg from "../../assets/pool_reservation_img.jpg";
import PopupReserveComponent from "../../components/PopupReserveComponent";
import { Container, Col, Row } from "react-bootstrap";

function PoolPage(){
    return(
    <>
    <UserNavbarComponent/>
    <div className={styles.reservation_type_section}>
        <Container fluid className={`container ${styles.reservation_container}`}>
            <Row className="align-items-center">
                <Col xs={{order : 1}} md={{order : 2}} className={styles.reservation_text}>
                    <h2 className={`fw-bold text-success ${styles.text_title}`}>Community Pool</h2>
                    <p className="text-dark">
                    The Windward Hills Community Pool offers a refreshing escape for residents and guests.
                    Surrounded by palm trees and landscaped gardens, the pool area provides a relaxing environment for both leisure and private gatherings.
                    It features a spacious deck with shaded seating areas, clean shower and changing rooms, and a designated children’s pool for family-friendly enjoyment.
                
                    Whether for swimming practice, family bonding, or private poolside parties, residents can reserve the pool exclusively on selected schedules approved by the HOA.
                    </p>
                    <div className={styles.btn_area}>
                        <PopupReserveComponent type = "Pool"/> 
                    </div>   
                </Col>
                <Col xs={12} md={6} className="position-relative text-center">
                    <img src={poolImg} className="img-fluid rounded shadow" alt="Clubhouse" />
                </Col>
            </Row>
        </Container>
    </div>
    <FooterComponent/>
    </>
    )

}
export default PoolPage;