import { Container, Table } from 'react-bootstrap';
import styles from '../css/accountpage.module.css';
import UserNavbarComponent from "../components/UserNavbarComponent";
import { useState, useEffect } from 'react';

function AccountPage() {
    const [reservations, setReservations] = useState([]);
    const [applications, setApplications] = useState([]);
    const [error, setError] = useState('');
    const [currentPageRes, setCurrentPageRes] = useState(1);
    const [currentPageApp, setCurrentPageApp] = useState(1);
    const itemsPerPage = 5;

    const userEmail = 'user@example.com';
    const sheetdbUrl = 'https://sheetdb.io/api/v1/4qurz55lumbus';

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {

            const response = await fetch(sheetdbUrl);
            const data = await response.json();
            const userReservations = data.filter(item => item.email === userEmail && item.reservation_type);
            const userApplications = data.filter(item => item.email === userEmail && item.sticker_type);

            setReservations(userReservations);
            setApplications(userApplications);
        } catch (err) {
            console.error("Fetch error:", err);
            setError("Failed to load user data.");
        }
    };

    const handleCancelReservation = async (id) => {
        if (window.confirm('Are you sure you want to cancel your reservation?')) {
            try {
                await fetch(`${sheetdbUrl}/id/${id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ status: 'canceled' })
                });
                alert('Reservation cancceled');
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
                                        <th>Reservation Type</th>
                                        <th>Date</th>
                                        <th>From Time</th>
                                        <th>To Time</th>
                                        <th>Status</th>
                                        <th>Actions</th>
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
                        {/* Pagination for Reservations */}
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

                        {/* Applications Table */}
                        <h2>Your Sticker Applications</h2>
                        <div className='table-responsive'>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Sticker Type</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Reason (if denied)</th>
                                        <th>Actions</th>
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