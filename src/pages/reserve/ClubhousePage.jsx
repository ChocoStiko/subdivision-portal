import FooterComponent from "../../components/FooterComponent";
import UserNavbarComponent from "../../components/UserNavbarComponent";
import styles from '../../css/servicestyles.module.css';
import clubhouseImg from '../../assets/clubhouse_reservation_img.jpg';
import PopupReserveComponent from "../../components/PopupReserveComponent";
import { Container, Col , Row} from "react-bootstrap";





function ClubhousePage(){

    return(
    <>
    <UserNavbarComponent/>
    <div className={styles.reservation_type_section}>
        <Container fluid className={`container ${styles.reservation_container}`}>
            <Row className="align-items-center">
                <Col xs={{order : 1}} md={{order : 2}} className={styles.reservation_text}>
                    <h2 className={`fw-bold text-success ${styles.text_title}`}>Lorem ipsum dolor sit</h2>
                    <p className="text-dark">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ornare blandit.
                    Aliquam bibendum diam leo, sit amet luctus tellus consectetur at. Aenean mollis fringilla justo eget malesuada.
                    </p>
                    <div className={styles.btn_area}>
                        <PopupReserveComponent/> 
                    </div>   
                </Col>
                <Col xs={12} md={6} className="position-relative text-center">
                    <img src={clubhouseImg} className="img-fluid rounded shadow" alt="Clubhouse" />
                </Col>
            </Row>
        </Container>
    </div>
    <FooterComponent/>
    </>  
    )

}
export default ClubhousePage;