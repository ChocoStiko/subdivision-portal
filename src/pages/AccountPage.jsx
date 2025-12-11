import { Container, Table } from 'react-bootstrap';
import styles from '../css/accountpage.module.css';
import UserNavbarComponent from "../components/UserNavbarComponent";
import { useState, useEffect } from 'react';
import api from '../api/axiosConfig'; 

function AccountPage() {
    const [reservations, setReservations] = useState([]);
    const [applications, setApplications] = useState([]);
    const [error, setError] = useState('');
    const [currentPageRes, setCurrentPageRes] = useState(1);
    const [currentPageApp, setCurrentPageApp] = useState(1);
    const itemsPerPage = 5;

    const userId = localStorage.getItem('userId'); 

    useEffect(() => {
        if (userId) { 
            fetchUserData();
        } else {
            setError("User not logged in.");
        }
    }, [userId]);

    const fetchUserData = async () => {
        try {
            const resResponse = await api.get(`/reservations?user_id=${userId}`);
            setReservations(resResponse.data); 

            const appResponse = await api.get(`/applications?user_id=${userId}`);
            setApplications(appResponse.data); 
        } catch (err) {
            console.error("Fetch error:", err);
            setError("Failed to load your data.");
        }
    };

    const handleCancelReservation = async (id) => {
        if (window.confirm('Are you sure you want to cancel your reservation?')) {
            try {
                await api.patch(`/reservations/${id}`, { status: 'canceled' });
                alert('Reservation canceled');
                fetchUserData(); 
            } catch (err) {
                console.error("Cancel error:", err);
                setError("Error canceling reservation.");
            }
        }
    };

    const handleResubmitApplication = (id) => {
        alert(`Resubmit functionality for application ${id} – redirect to form or API call here.`);

    };


    const indexOfLastRes = currentPageRes * itemsPerPage;
    const indexOfFirstRes = indexOfLastRes - itemsPerPage;
    const currentReservations = reservations.slice(indexOfFirstRes, indexOfLastRes);
    const totalPagesRes = Math.ceil(reservations.length / itemsPerPage);

    const indexOfLastApp = currentPageApp * itemsPerPage;
    const indexOfFirstApp = indexOfLastApp - itemsPerPage;
    const currentApplications = applications.slice(indexOfFirstApp, indexOfLastApp);
    const totalPagesApp = Math.ceil(applications.length / itemsPerPage);

    const getStatusStyle = (status) => {
        switch (status?.toLowerCase()) {
            case 'pending': return { color: 'orange' };
            case 'approved': return { color: 'green' };
            case 'denied': return { color: 'red' };
            default: return {};
        }
    };

    return (
        <>
            <UserNavbarComponent />
            <div className={styles.user_page_container}>
                <div className={styles.content_container}>
                    <Container mt={5}>
                        <h1>Your Account Details</h1>
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        {/* Reservations Table */}
                        <h2>Your Reservations</h2>
                        <div className='table-responsive'>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Venue</th>
                                        <th>Date</th>
                                        <th>From Time</th>
                                        <th>To Time</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentReservations.map((res, index) => (
                                        <tr key={index}>
                                            <td>{res.id}</td>
                                            <td>{res.reservation_type}</td>
                                            <td>{res.date}</td>
                                            <td>{res.time_from}</td>
                                            <td>{res.time_to}</td>
                                            <td style={getStatusStyle(res.status)}>{res.status || 'N/A'}</td>
                                            <td>
                                                {res.status === 'pending' && (
                                                    <button className="btn btn-danger btn-sm" onClick={() => handleCancelReservation(res.id)}>
                                                        Cancel
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>

                        <nav>
                            <ul className="pagination">
                                {[...Array(totalPagesRes)].map((_, i) => (
                                    <li key={i} className={`page-item ${currentPageRes === i + 1 ? 'active' : ''}`}>
                                        <button className="page-link" onClick={() => setCurrentPageRes(i + 1)}>
                                            {i + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Vehicle Stickers Table */}
                        <h2>Your Sticker Applications</h2>
                        <div className='table-responsive'>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Email</th>
                                        <th>Homeowner Name</th>
                                        <th>Address</th>
                                        <th>License no.</th>
                                        <th>Plate no.</th>
                                        <th>Car Brand</th>
                                        <th>Model</th>
                                        <th>Year Model</th>
                                        <th>Vehicle Color</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentApplications.map((app, index) => (
                                        <tr key={index}>
                                            <td>{app.id}</td>
                                            <td>{app.sticker_type}</td>
                                            <td>{app.date}</td>
                                            <td style={getStatusStyle(app.status)}>{app.status || 'N/A'}</td>
                                            <td>{app.reason || 'N/A'}</td>
                                            <td>
                                                {app.status === 'denied' && (
                                                    <button className="btn btn-warning btn-sm" onClick={() => handleResubmitApplication(app.id)}>
                                                        Resubmit
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>

                        <nav>
                            <ul className="pagination">
                                {[...Array(totalPagesApp)].map((_, i) => (
                                    <li key={i} className={`page-item ${currentPageApp === i + 1 ? 'active' : ''}`}>
                                        <button className="page-link" onClick={() => setCurrentPageApp(i + 1)}>
                                            {i + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default AccountPage;
