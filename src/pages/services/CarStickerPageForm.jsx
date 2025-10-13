import { Container, Row, Col, Button, Form } from "react-bootstrap";
import UserNavbarComponent from "../../components/UserNavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import styles from "../../css/servicestyles.module.css";
import NoticePopupComponent from "../../components/NoticePopupComponent";




function CarStickerPageForm(){
    
    return(
        <>
        <UserNavbarComponent/>

        <div className={styles.car_sticker_form_section}>
            <Container>
                <div className={styles.title_container}>
                <h1 className={styles.title}>Vehicle Sticker Form</h1>
                </div>             
                <br/>
                <Row className="justify-content-center text-start">
                    <Col xs={12} md={4}>
                        <h2>Driver's Information</h2>
                        <Form.Group className="mb-6">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Homeowner's Name</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address / Block & Lot</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Driver's License Number</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        <br/><br/>
                        
                        <h2>Car Information</h2>
                        <Form.Group>
                            <Form.Label>Plate Number</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Car Brand</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Model</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Year Model</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                            <Form.Group>
                            <Form.Label>Vehicle Color</Form.Label>
                            <Form.Control type="text"></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={4}>
                        <h2>Required Documents</h2>
                        <Form.Group>
                            <Form.Label>OR/CR Copy</Form.Label>
                            <Form.Control type="file"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Valid ID</Form.Label>
                            <Form.Control type="file"></Form.Control>
                        </Form.Group>
                        <br/>
                        
                        <div className={styles.btn_container}>
                            <NoticePopupComponent/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <FooterComponent/>
        </>
    )

}
export default CarStickerPageForm;