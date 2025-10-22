import { Container, Row, Col, Button, Form } from "react-bootstrap";
import UserNavbarComponent from "../../components/UserNavbarComponent";
import FooterComponent from "../../components/FooterComponent";
import styles from "../../css/servicestyles.module.css";
import NoticePopupComponent from "../../components/NoticePopupComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




function CarStickerPageForm(){
    const [email, setEmail] = useState('');
    const [homeownerName, setHomeownerName] = useState('');
    const [address, setAddress] = useState('');
    const [licenseNum, setLicenseNum] = useState('');
    const [plateNum, setPlateNum] = useState('');
    const [carBrand, setCarBrand] = useState('');
    const [model, setModel] = useState('');
    const [yearModel, setYearModel] = useState('');
    const [color, setColor] = useState('');
    const navigate = useNavigate();

    const sheetdbUrl = 'https://sheetdb.io/api/v1/c61zc8oy73ti6';

        const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email | !address | !licenseNum) {
            return;
        }
        
        try{
            const id = Date.now();
            const response = await fetch(sheetdbUrl, {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({data : [{id:id, email:email, homeowner_name:homeownerName, address:address, license_number:licenseNum, plate_number:plateNum, car_brand:carBrand, model:model, year_model:yearModel, vehicle_color:color}]})
            });

            if(response.ok){
                setTimeout(() => {
                    navigate("/userhome");
                }, 1000);
                
            }
        }

        catch (error){
            console.error("Error:", error);
        }
    };
    
    return(
        <>
        <UserNavbarComponent/>

        <div className={styles.car_sticker_form_section}>
            <Container>
                <div className={styles.title_container}>
                <h1 className={styles.title}>Vehicle Sticker Form</h1>
                </div>             
                <br/>
                <Form onSubmit={handleSubmit} id="carForm">
                <Row className="justify-content-center text-start">
                    <Col xs={12} md={4}>
                        <h2>Driver's Information</h2>
                            
                                <Form.Group className="mb-6">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="text" required value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Homeowner's Name</Form.Label>
                                    <Form.Control type="text" required value={homeownerName} onChange={(e) => setHomeownerName(e.target.value)}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Address / Block & Lot</Form.Label>
                                    <Form.Control type="text" required value={address} onChange={(e) => setAddress(e.target.value)}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Driver's License Number</Form.Label>
                                    <Form.Control type="text" required value={licenseNum} onChange={(e) => setLicenseNum(e.target.value)}></Form.Control>
                                </Form.Group>
                                <br/><br/>
                                
                                <h2>Car Information</h2>
                                <Form.Group>
                                    <Form.Label>Plate Number</Form.Label>
                                    <Form.Control type="text" required value={plateNum} onChange={(e) => setPlateNum(e.target.value)}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Car Brand</Form.Label>
                                    <Form.Control type="text" required value={carBrand} onChange={(e) => setCarBrand(e.target.value)}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Model</Form.Label>
                                    <Form.Control type="text" required value={model} onChange={(e) => setModel(e.target.value)}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Year Model</Form.Label>
                                    <Form.Control type="text" required value={yearModel} onChange={(e) => setYearModel(e.target.value)}></Form.Control>
                                </Form.Group>
                                    <Form.Group>
                                    <Form.Label>Vehicle Color</Form.Label>
                                    <Form.Control type="text" required value={color} onChange={(e) => setColor(e.target.value)}></Form.Control>
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
                            <NoticePopupComponent formId="carForm"/>
                        </div>
                    </Col>
                </Row>
                </Form>
            </Container>
        </div>
        <FooterComponent/>
        </>
    )

}
export default CarStickerPageForm;