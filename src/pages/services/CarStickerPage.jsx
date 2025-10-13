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
                        <li>Secure a Vehicle Sticker Application Form from the HOA office or download it from the subdivision website.</li>
                        <li>Fill out the form completely and attach all required documents (photocopy of driver’s license, OR/CR, and proof of residence).</li>
                        <li>Submit the accomplished form and documents to the Homeowners Association Office for verification.</li>
                        <li>Once verified, proceed to the cashier for payment of the sticker fee.</li>
                        <li>Wait for confirmation and schedule of sticker release.</li>
                        <li>Claim your sticker at the HOA office and have it installed by authorized personnel only.</li>
                        <li>Stickers must be affixed on the upper-right corner of the vehicle’s windshield for visibility.</li>
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