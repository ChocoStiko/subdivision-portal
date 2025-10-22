import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../css/servicestyles.module.css';
import { useNavigate } from 'react-router-dom';



function NoticePopupComponent({formId}){
    const [show, setShow] = useState(false);
    const [showMsg, setShowMsg] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    const handleClick = () => {
    const form = document.getElementById(formId);

    requestAnimationFrame(() => {
        if (form && form.checkValidity()) {
        form.requestSubmit();
        setShow(true);
        } else {
        form.reportValidity();
        }
    });

  };

    return(
        <>       
        <Button variant="primary" className={styles.reserve_btn} type='button' onClick={handleClick}>Submit</Button>
            <Modal show={show} onHide={handleClose} className={styles.reservation_form}>
                <Modal.Header className={styles.reserve_header} closeButton>
                <Modal.Title className={styles.form_title}>Application sent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <p>A confirmation will be sent at user@email.com</p>
                <Modal.Footer className={styles.reserve_footer}>       
                <Button variant="primary" className={styles.reserve_btn} onClick={() => navigate("/userhome")}>Close</Button>
                </Modal.Footer>
                </Modal.Body>
                </Modal>
        </>
    )

}
export default NoticePopupComponent;