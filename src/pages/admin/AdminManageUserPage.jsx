import { Container, Table } from 'react-bootstrap';
import styles from '../../css/adminstyles.module.css';
import AdminNavbarComponent from '../../components/AdminNavbarComponent';
import {useEffect, useState } from 'react';




function AdminManageUserPage(){
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [updatedFirstname, setUpdatedFirstname] = useState('');
  const [updatedLastname, setUpdatedLastname] = useState('');
  const [updatedContactNum, setUpdatedContactNum] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedPassword, setUpdatedPassword] = useState('');
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const sheetdbUrl = 'https://sheetdb.io/api/v1/y3gntqh4y7qn8';

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

  const handleEdit = (user) => {
    setEditingUser(user.email);
    setUpdatedFirstname(user.first_name);
    setUpdatedLastname(user.last_name);
    setUpdatedContactNum(user.contact_number);
    setUpdatedEmail(user.email);
    setUpdatedPassword(user.password);
  };

  const handleUpdate = async () => {
    console.log("Saving user:", editingUser);
    try {
      const response = await fetch(`${sheetdbUrl}/email/${editingUser}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: {
            first_name: updatedFirstname,
            last_name: updatedLastname,
            contact_number: updatedContactNum,
            email: updatedEmail,
            password: updatedPassword
          }
        })
      });

      if (response.ok) {
        setEditingUser(null);
        fetchUsers();
      } else {
        setError("Failed to update user.");
      }
    } catch (err) {
      console.error("Update error:", err);
      setError("Error updating user.");
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
          <h1>Manage Users</h1>
          <Table>
            <thead>
              <tr>
                <th>first name</th>
                <th>last name</th>
                <th>contact number</th>
                <th>email address</th>
                <th>password</th>
              </tr>
            </thead>

            <tbody>
              {currentUsers.map((user, index) => (
            <tr key={index}>

              {/*First name table*/}
              <td>
                {editingUser === user.email ? (
                  <input
                    value={updatedFirstname}
                    onChange={(e) => setUpdatedFirstname(e.target.value)}
                  />
                ) : (
                  user.first_name
                )}
              </td>

              {/*Last name table*/}
              <td>
                {editingUser === user.email ? (
                  <input
                    value={updatedLastname}
                    onChange={(e) => setUpdatedLastname(e.target.value)}
                  />
                ) : (
                  user.last_name
                )}
              </td>

              {/*Contact number table*/}
              <td>
                {editingUser === user.email ? (
                  <input
                    value={updatedContactNum}
                    onChange={(e) => setUpdatedContactNum(e.target.value)}
                  />
                ) : (
                  user.contact_number
                )}
              </td>

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

              {/*Password table*/}
              <td>
                {editingUser === user.email ? (
                  <input
                    value={updatedPassword}
                    onChange={(e) => setUpdatedPassword(e.target.value)}
                  />
                ) : (
                  user.password
                )}
              </td>
              <td>
                {editingUser === user.email ? (
                  <>
                    <button className="btn btn-success btn-sm me-2" onClick={handleUpdate}>Save</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => setEditingUser(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(user)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.email)}>Delete</button>
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
export default AdminManageUserPage;