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
                    <h2 className={`fw-bold text-success ${styles.text_title}`}>Clubhouse</h2>
                    <p className="text-dark">
                    The Windward Hills Subdivision Clubhouse is a spacious multi-purpose venue designed for comfort and community gatherings.
                    It features an open-air lounge, high wooden ceilings, and wide glass windows that let in natural light — creating a warm and inviting atmosphere perfect for family celebrations, meetings, and special occasions.
                    The area is fully equipped with tables and chairs, ceiling fans, and access to nearby restrooms and parking spaces.
                    Surrounded by landscaped greenery, the clubhouse provides a relaxing setting for both daytime and evening events.
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