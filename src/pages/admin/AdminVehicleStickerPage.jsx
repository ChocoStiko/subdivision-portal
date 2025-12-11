import { Container, Table } from 'react-bootstrap';
import styles from '../../css/adminstyles.module.css';
import AdminNavbarComponent from '../../components/AdminNavbarComponent';
import { useState, useEffect } from 'react';




function AdminVehicleStickerPage(){

   const [applications, setApplications] = useState([]);
   const [error, setError] = useState('');
   const [currentPage, setCurrentPage] = useState(1);
   const applicationsPerPage = 5;

    const apiUrl = 'http://localhost/api/get_applications.php';
    
    useEffect(() => {
      fetchApplications();
    }, []);

    const fetchApplications = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setApplications(data);
    }
    
    catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load user data.");
    }
  };

  const handleAction = async (id, action) => {
    try {
      const response = await fetch('http://localhost/api/update_application.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ id: id, action: action })
      });
      if (response.ok) {
        fetchApplications();
      } else {
        setError("Failed to update application.");
      }
    } catch (err) {
      console.error("Update error:", err);
      setError("Error updating application.");
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
              {currentApplications.map((app, index) => (
            <tr key={app.id || index}>
              <td>{app.id}</td>
              <td>{app.email}</td>
              <td>{app.homeowner_name}</td>
              <td>{app.address}</td>
              <td>{app.license_no}</td>
              <td>{app.plate_no}</td>
              <td>{app.carbrand}</td>
              <td>{app.model}</td>
              <td>{app.year_model}</td>
              <td>{app.vehicle_color}</td>
              <td>{app.status}</td>  
              <td>
                    {app.status === 'pending' ? ( 
                      <>
                        <button
                          className="btn btn-success btn-sm me-2"
                          onClick={() => handleAction(app.id, 'approve')}
                        >
                          Approve
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleAction(app.id, 'reject')}
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span>{app.status}</span>
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