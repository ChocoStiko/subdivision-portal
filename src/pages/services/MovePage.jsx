import { Col, Container, Row } from 'react-bootstrap';
import FooterComponent from '../../components/FooterComponent';
import UserNavbarComponent from '../../components/UserNavbarComponent';
import styles from '../../css/servicestyles.module.css';
import form from '../../downloads/move_form_template.pdf'

function MovePage(){
    return(
        <>
        <UserNavbarComponent/>

        <div className={styles.move_section}>
        <Container>
            <Row className="justify-content-center text-start">
                <h1>Move In & Move Out Application</h1>
                <Col xs={12} md={6}>
                        <div className={styles.move_body}>
                            <h2>Requirements</h2>
                            <ul>
                                <li>Donec eget tellus.</li>
                                <li>Vestibulum vitae mauris semper tempus urna.</li>
                                <li>Morbi aliquet purus.</li>
                            </ul>
                            <br/><br/>

                            <h2>Instructions</h2>
                            <ol>
                                <li>Ut non ligula quis elit dignissim aliquam ac eu dui.</li>
                                <li>Aenean ullamcorper nisi eu ultricies rhoncus.</li>
                                <li>Nam scelerisque velit a urna pretium luctus.</li>
                                <li>Nam vitae turpis tristique, facilisis lacus ac, varius purus.</li>
                                <li>Donec in arcu viverra, scelerisque metus eget, iaculis tellus.</li>
                                <li>Donec eget lectus nec metus convallis viverra.</li>
                            </ol>
                        </div>
                            <div className="text-center mt-4">
                                <a href={form} className={styles.download_link} download={"move_form_template"}>Click here to download the form template</a>
                            </div>
                </Col>
            </Row>
        </Container>
        </div>

        <FooterComponent/>
        </>

    )
}
export default MovePage;