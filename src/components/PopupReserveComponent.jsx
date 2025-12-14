import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../css/servicestyles.module.css';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosConfig';


function PopupReserveComponent({type}){
    const [show, setShow] = useState(false);
    const [showMsg, setShowMsg] = useState(false);
    const msgHandleClose = () => setShowMsg (false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const id = Date.now();
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toTime, setToTime] = useState('');
    const navigate = useNavigate();
    const [, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    //const sheetdbUrl = "https://sheetdb.io/api/v1/4qurz55lumbus";

    const handleSubmit = async (e) => {
        const payload = {
                uid: id,
                reservation_type: type,
                email: email.trim(),
                date: date.trim(),
                from: fromTime.trim(),
                to: toTime.trim()
            };
        e.preventDefault();

        if (!date || !fromTime || !toTime) return;


        try{
            setSubmitting(true);

            const res = await api.post("/reservation.php", payload);

            const ok = res?.data?.success ?? res?.data?.ok ?? (res?.status === 200);
            const serverMsg = res?.data?.message ?? res?.data?.msg ?? "No message from server";

            if(ok){
                setMessage(serverMsg || "Added successfully!");
                setShow(false);
                setShowMsg(true);
                setEmail(""); setDate(""); setFromTime(""); setToTime("");
            }
            else{
                setMessage(serverMsg || "Failed adding data");
                setEmail(""); setDate(""); setFromTime(""); setToTime("");
            }
        }
        

        catch (error){
            console.error("Error:", error);
        }
    };
        
    

    return(
        <>
            <Button variant="light" className={styles.reserve_btn} onClick={handleShow} aria-pressed="true"> Reserve now</Button>
                <Modal show={show} onHide={handleClose} className={styles.reservation_form}>
                    <Modal.Header className={styles.reserve_header} closeButton>
                    <Modal.Title className={styles.form_title}>Reservation Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className={styles.reservation_form} onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col'>
                                    <p>Date</p>
                                    <input type='date' required="required" onChange={(e) => setDate(e.target.value)}></input>
                                </div>

                                <div className='col'>
                                    <p>From</p>
                                    <select required defaultValue={""} onChange={(e) => setFromTime(e.target.value)}>
                                        <option value={""} selected>Choose time...</option>
                                        <option>9:00 AM</option>
                                        <option>10:00 AM</option>
                                        <option>11:00 AM</option>
                                        <option>12:00 PM</option>
                                        <option>12:00 PM</option>
                                        <option>1:00 PM</option>
                                        <option>2:00 PM</option>
                                        <option>3:00 PM</option>
                                        <option>4:00 PM</option>
                                        <option>5:00 PM</option>
                                        <option>6:00 PM</option>
                                        <option>7:00 PM</option>
                                        <option>8:00 PM</option>
                                        <option>9:00 PM</option>

                                    </select>
                                </div>

                                <div className='col'>
                                    <p>To</p>
                                    <select required defaultValue={""} onChange={(e) => setToTime(e.target.value)}>
                                        <option value={""} selected>Choose time...</option>
                                        <option>9:00 AM</option>
                                        <option>10:00 AM</option>
                                        <option>11:00 AM</option>
                                        <option>12:00 PM</option>
                                        <option>12:00 PM</option>
                                        <option>1:00 PM</option>
                                        <option>2:00 PM</option>
                                        <option>3:00 PM</option>
                                        <option>4:00 PM</option>
                                        <option>5:00 PM</option>
                                        <option>6:00 PM</option>
                                        <option>7:00 PM</option>
                                        <option>8:00 PM</option>
                                        <option>9:00 PM</option>
                                    </select>
                                </div>
                            </div>                 
                    <Modal.Footer className={styles.reserve_footer}>       
                    <Button variant="primary" className={styles.reserve_btn} type='submit'>Confirm</Button>
                    </Modal.Footer>
                    </form>
                    </Modal.Body>
                </Modal>

                

                <Modal show={showMsg} className={styles.thank_message} onHide={msgHandleClose}>
                    <Modal.Header className={styles.reserve_header}>
                        <Modal.Title className={styles.message_title}>Thank you for reserving!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className={styles.thank_message}>
                        <p>A confirmation will be sent at user@email.com</p>
                    

                    <Modal.Footer className={styles.reserve_footer}>
                        <Button variant='primary' className={styles.reserve_msg_btn} onClick={() => {setShowMsg(false); navigate("/userhome")}}>Close</Button>
                    </Modal.Footer>
                    </form>
                    </Modal.Body>
                </Modal>
                
        </>
    )
}

export default PopupReserveComponent;