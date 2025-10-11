import { Button, Col, Container, Row } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import FooterComponent from '../../components/FooterComponent';
import UserNavbarComponent from '../../components/UserNavbarComponent';
import styles from "../../css/servicestyles.module.css";
import CarImg from '../../assets/car_image.png';

function CarStickerPage(){
    return(
        <>
        <UserNavbarComponent/>
        <div className={styles.car_sticker_section} style={{backgroundImage: `url(${CarImg})`}}>
            <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <h className={styles.car_header}>Vehicle Sticker Application</h>
                    <br/>
                    <h className={styles.car_header_2}>Procedure</h>
                    <ol>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ornare blandit.</li>
                        <li>Aliquam bibendum diam leo, sit amet luctus tellus consectetur at. Aenean mollis fringilla justo eget malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ac erat ut magna tempor faucibus id et nisi.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ornare blandit.</li>
                    </ol>
                    <div className={styles.car_btn_container}>
                        <NavLink as={Link} to='../car_sticker_form'><Button className={styles.car_btn}>Apply now</Button></NavLink>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
        <FooterComponent/>
        </>

    )
}
export default CarStickerPage;