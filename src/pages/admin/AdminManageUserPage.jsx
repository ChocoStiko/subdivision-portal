import { Container, Table } from 'react-bootstrap';
import styles from '../../css/adminstyles.module.css';
import AdminNavbarComponent from '../../components/AdminNavbarComponent';
import {useEffect, useState } from 'react';
import api from '../../api/axiosConfig';




function AdminManageUserPage(){
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [updatedFirstname, setUpdatedFirstname] = useState('');
  const [updatedLastname, setUpdatedLastname] = useState('');
  const [updatedContactNum, setUpdatedContactNum] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedPassword, setUpdatedPassword] = useState('');
  const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  //const sheetdbUrl = 'https://sheetdb.io/api/v1/y3gntqh4y7qn8';

  useEffect(() => {
    fetchUsers();
  }, []);


  const fetchUsers = async () => {
    try {
      const res = await api.get("/read_user.php");
      setUsers(res.data.data || []);
    } catch (err) {
      console.error(err);
      setMsg("Failed to fetch users");
    }
      finally {
      setLoading(false);
    }
  };

  const handleDelete = async (email) => {
    if (!window.confirm("Delete this user?")) 
    return;
    setMsg("");
    try {
      const res = await api.post("/delete_user.php", { email });
      setMsg(res.data.message || "Deleted");

      setUsers(prev => prev.filter(u => u.email !== email));
    } catch (err) {
      console.error(err);
      setMsg("Delete failed");
      console.log("delete failed");
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

  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

    return (
    <>
    <AdminNavbarComponent/>
    <div className={styles.admin_page_container}>
      <div className={styles.content_container}>
      <Container mt={5}>
          <h1>Manage Users</h1>
          <div className='table-responsive'>
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
                <div className={styles.user_button_container}>
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
                </div>
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
export default AdminManageUserPage;