import { Container, Table } from 'react-bootstrap';
import styles from '../../css/adminstyles.module.css';
import AdminNavbarComponent from '../../components/AdminNavbarComponent';
import { useState, useEffect } from 'react';
import api from '../../api/axiosConfig';




function AdminVehicleStickerPage(){

  const [applications, setApplications] = useState([]);
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const applicationsPerPage = 5;

  //const apiUrl = 'http://localhost/api/get_applications.php';
    
    useEffect(() => {
      fetchApplications();
    }, []);

    const fetchApplications = async () => {
    try {
      const res = await api.get("/read_car_sticker.php");
      setApplications(res.data.data || []);
    } catch (err) {
      console.error(err);
      setMsg("Failed to fetch data");
    }
      finally {
      setLoading(false);
    }
  };

  const handleAction = async (id, action) => {
     try {
    const res = await api.post("/update_car_sticker_status.php", {
      id,
      status: action
    });

    setMsg(res.data.message || "Status updated");

    setApplications(prev =>
      prev.map(app =>
        app.id === id
          ? { ...app, status: action }
          : app
      )
    );
  } catch (err) {
    console.error(err.response ?? err);
    setMsg("Failed to update status");
  }
  };

  const indexOfLastApp = currentPage * applicationsPerPage;
  const indexOfFirstApp = indexOfLastApp - applicationsPerPage;
  const currentApplications = applications.slice(indexOfFirstApp, indexOfLastApp);
  const totalPages = Math.ceil(applications.length / applicationsPerPage);

    return (
    <>
    <AdminNavbarComponent/>
    <div className={styles.admin_page_container}>

    
      <div className={styles.content_container}>
      <Container mt={5}>
          <h1>Manage Vehicle Stickers</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className='table-responsive'>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Homeowner Name</th>
                <th>Address</th>
                <th>License Number</th>
                <th>Plate Number</th>
                <th>Car Brand</th>
                <th>Model</th>
                <th>Year Model</th>
                <th>Vehicle Color</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentApplications.map((user, index) => (
            <tr key={user.id}>
              <td>{user.empid}</td>
              <td>{user.email}</td>
              <td>{user.homeowner_name}</td>
              <td>{user.address}</td>
              <td>{user.license_no}</td>
              <td>{user.plate_no}</td>
              <td>{user.carbrand}</td>
              <td>{user.model}</td>
              <td>{user.year_model}</td>
              <td>{user.vehicle_color}</td>
              <td>{user.status}</td>  
              <td>
                    {user.status === 'pending' ? ( 
                      <>
                        <button
                          className="btn btn-success btn-sm me-2"
                          onClick={() => handleAction(user.id, 'approved')}
                        >
                          Approve
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleAction(user.id, 'rejected')}
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span>{user.status}</span>
                    )}
                  </td>
                </tr>
              ))}
                  </tbody>
                </Table>
              </div>
              <nav>
                <ul className="pagination">
                  {[...Array(totalPages)].map((_, i) => (
                    <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
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

export default AdminVehicleStickerPage;