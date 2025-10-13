import FooterComponent from "../../components/FooterComponent";
import UserNavbarComponent from "../../components/UserNavbarComponent";
import styles from "../../css/servicestyles.module.css";
import courtImg from "../../assets/court_reservation_img.jpg";
import PopupReserveComponent from "../../components/PopupReserveComponent";
import { Container, Row, Col } from "react-bootstrap";





function CourtPage(){
    return(
    <>
    <UserNavbarComponent/>
    <div className={styles.reservation_type_section}>
        <Container fluid className={`container ${styles.reservation_container}`}>
            <Row className="align-items-center">
                <Col xs={{order : 1}} md={{order : 2}} className={styles.reservation_text}>
                    <h2 className={`fw-bold text-success ${styles.text_title}`}>Court</h2>
                    <p className="text-dark">
                    The Windward Hills Sports Court is a versatile open-air facility designed for residents who enjoy active recreation.
                    It features a well-maintained playing surface suitable for basketball, volleyball, or badminton, surrounded by safety fencing and ample lighting for both daytime and evening use.
                    Benches and shaded waiting areas are available nearby for players and spectators, creating a comfortable space for friendly matches and community tournaments.

                    Whether for casual play, team practice, or special events, residents can reserve the court exclusively through the HOA office or online system.
                    </p>
                    <div className={styles.btn_area}>
                        <PopupReserveComponent/> 
                    </div>   
                </Col>
                <Col xs={12} md={6} className="position-relative text-center">
                    <img src={courtImg} className="img-fluid rounded shadow" alt="Clubhouse" />
                </Col>
            </Row>
        </Container>
    </div>
    <FooterComponent/>
    </>  
    )

}
export default CourtPage;