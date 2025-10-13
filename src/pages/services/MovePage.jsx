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
                                <li>Duly accomplished Move In/Out application form.</li>
                                <li>Photocopy of valid government-issued ID (homeowner and/or tenant).</li>
                                <li>Clearance from the Homeowners Association (no pending dues).</li>
                                <li>Inventory list of furniture/appliances to be moved.</li>
                                <li>Gate pass for security check (to be issued upon approval).</li>
                            </ul>
                            <br/><br/>

                            <h2>Instructions</h2>
                            <ol>
                                <li>Secure a Move In/Out form from the HOA office or download it using the link below.</li>
                                <li>Fill out all required information completely and accurately.</li>
                                <li>Attach all necessary supporting documents listed above.</li>
                                <li>Submit your application at least 3 days before the scheduled move.</li>
                                <li>Wait for HOA verification and approval before proceeding.</li>
                                <li>Upon approval, present your gate pass to the security guard during moving day.</li>
                                <li>Moving hours are strictly between 8:00 AM to 5:00 PM only.</li>
                                <li>Ensure no damage or obstruction is caused within subdivision premises during the move.</li>
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