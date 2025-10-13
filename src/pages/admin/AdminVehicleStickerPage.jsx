import { Container, Table } from 'react-bootstrap';
import styles from '../../css/adminstyles.module.css';
import AdminNavbarComponent from '../../components/AdminNavbarComponent';
import { useState, useEffect } from 'react';




function AdminVehicleStickerPage(){

    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [updatedEmail, setUpdatedEmail] = useState('');
    const [updatedHomeownerName, setUpdatedHomeownerName] = useState('');
    const [updatedAddress, setUpdatedAddress] = useState('');
    const [updatedLicenseNum, setUpdatedLicenseNum] = useState('');
    const [updatedPlateNum, setUpdatedPlateNum] = useState('');
    const [updatedCarBrand, setUpdatedCarBrand] = useState('');
    const [updatedModel, setUpdatedModel] = useState('');
    const [updatedYearModel, setUpdatedYearModel] = useState('');
    const [updatedColor, setUpdatedColor] = useState('');
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    const sheetdbUrl = 'https://sheetdb.io/api/v1/c61zc8oy73ti6';
    
    useEffect(() => {
      fetchUsers();
    }, []);

    const fetchUsers = async () => {
    try {
      const response = await fetch(sheetdbUrl);
      const data = await response.json();
      setUsers(data);
    }
    
    catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load user data.");
    }
  };

  const handleDelete = async (email) => {
    try {
      const response = await fetch(`${sheetdbUrl}/email/${email}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        fetchUsers();
      } else {
        setError("Failed to delete user.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      setError("Error deleting user.");
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

    return (
    <>
    <div className={styles.admin_page_section}>

      <AdminNavbarComponent/>

      <Container mt={5}>
          <h1>Manage Vehicle Stickers</h1>
          <Table>
            <thead>
              <tr>
                <th>email</th>
                <th>homeowner name</th>
                <th>address</th>
                <th>license number</th>
                <th>plate number</th>
                <th>car brand</th>
                <th>model</th>
                <th>year model</th>
                <th>vehicle color</th>
              </tr>
            </thead>

            <tbody>
              {currentUsers.map((user, index) => (
            <tr key={index}>

              {/*Email table*/}
              <td>
                {editingUser === user.email ? (
                  <input
                    value={updatedEmail}
                    onChange={(e) => setUpdatedEmail(e.target.value)}
                  />
                ) : (
                  user.email
                )}
              </td>

              {/*Homeowner table*/}
              <td>
                {editingUser === user.email ? (
                  <input
                    value={updatedHomeownerName}
                    onChange={(e) => setUpdatedHomeownerName(e.target.value)}
                  />
                ) : (
                  user.homeowner_name
                )}
              </td>

              {/*Address table*/}
              <td>
                {editingUser === user.email ? (
                  <input
                    value={updatedAddress}
                    onChange={(e) => setUpdatedAddress(e.target.value)}
                  />
                ) : (
                  user.address
                )}
              </td>

              {/*License Number table*/}
              <td>
                {editingUser === user.email ? (
                  <input
                    value={updatedLicenseNum}
                    onChange={(e) => setUpdatedLicenseNum(e.target.value)}
                  />
                ) : (
                  user.license_number
                )}
              </td>

              {/*Password table*/}
              <td>
                {editingUser === user.email ? (
                  <input
                    value={updatedPlateNum}
                    onChange={(e) => setUpdatedPlateNum(e.target.value)}
                  />
                ) : (
                  user.plate_number
                )}
              </td>

              {/*Car Brand table*/}
              <td>
                {editingUser === user.email ? (
                  <input
                    value={updatedCarBrand}
                    onChange={(e) => setUpdatedCarBrand(e.target.value)}
                  />
                ) : (
                  user.car_brand
                )}
              </td>

              {/*Model table*/}
              <td>
                {editingUser === user.email ? (
                  <input
                    value={updatedModel}
                    onChange={(e) => setUpdatedModel(e.target.value)}
                  />
                ) : (
                  user.model
                )}
              </td>

              {/*Year Model table*/}
              <td>
                {editingUser === user.email ? (
                  <input
                    value={updatedYearModel}
                    onChange={(e) => setUpdatedYearModel(e.target.value)}
                  />
                ) : (
                  user.year_model
                )}
              </td>

              {/*Vehicle Color table*/}
              <td>
                {editingUser === user.email ? (
                  <input
                    value={updatedColor}
                    onChange={(e) => setUpdatedColor(e.target.value)}
                  />
                ) : (
                  user.vehicle_color
                )}

              </td>
              <td>
                {editingUser === user.email ? (
                  <>
                  </>
                ) : (
                  <>
                    <button className="btn btn-success btn-sm" onClick={() => handleDelete(user.email)}>Approve</button>
                  </>
                )}
              </td>
            </tr>
          ))}
            </tbody>
          </Table>
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
    </>
  );
}
export default AdminVehicleStickerPage;