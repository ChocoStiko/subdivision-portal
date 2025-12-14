import { Container, Table } from 'react-bootstrap';
import styles from '../../css/adminstyles.module.css';
import AdminNavbarComponent from '../../components/AdminNavbarComponent';
import { useState, useEffect } from 'react';
import api from '../../api/axiosConfig';




function AdminReservationPage(){

  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [updatedId, setUpdatedId] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedType, setUpdatedType] = useState('');
  const [updatedDate, setUpdatedDate] = useState('');
  const [updatedFromTime, setUpdatedFromTime] = useState('');
  const [updatedToTime, SetUpdatedToTime] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  //const sheetdbUrl = 'https://sheetdb.io/api/v1/4qurz55lumbus';

    useEffect(() => {
      fetchUsers();
    }, []);

    const fetchUsers = async () => {
    try {
        const res = await api.get("/read_reservation.php");
        setUsers(res.data.data || []);
      } catch (err) {
        console.error(err);
        setMsg("Failed to fetch users");
      }
        finally {
        setLoading(false);
      }
  };

  const handleAction = async (uid, action) => {
    try {
    const res = await api.post("/update_reservation_status.php", {
      uid,
      status: action
    });

    setMsg(res.data.message || "Status updated");

    setUsers(prev =>
      prev.map(app =>
        app.uid === uid
          ? { ...app, status: action }
          : app
      )
    );
  } catch (err) {
    console.error(err.response ?? err);
    setMsg("Failed to update status");
  }
    finally {
    setLoading(false);
  }

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
          <h1>Manage Reservations</h1>
          <div className='d-flex table-responsive'>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>email</th>
                <th>reservation type</th>
                <th>date</th>
                <th>from</th>
                <th>to</th>
                <th>status</th>
              </tr>
            </thead>

            <tbody>
              {currentUsers.map((user, index) => (
            <tr key={index}>

              {/*ID table*/}
              <td>{user.uid}</td>

              {/*Email table*/}
              <td>
                {editingUser === user.id ? (
                  <input
                    value={updatedEmail}
                    onChange={(e) => setUpdatedEmail(e.target.value)}
                  />
                ) : (
                  user.email
                )}
              </td>

              {/*Reservation Type table*/}
              <td>
                {editingUser === user.id ? (
                  <input
                    value={updatedType}
                    onChange={(e) => setUpdatedType(e.target.value)}
                  />
                ) : (
                  user.reservation_type
                )}
              </td>

              {/*Date table*/}
              <td>
                {editingUser === user.id ? (
                  <input
                    value={updatedDate}
                    onChange={(e) => setUpdatedDate(e.target.value)}
                  />
                ) : (
                  user.date
                )}
              </td>

              {/*From Time table*/}
              <td>
                {editingUser === user.id ? (
                  <input
                    value={updatedFromTime}
                    onChange={(e) => setUpdatedFromTime(e.target.value)}
                  />
                ) : (
                  user.time_from
                )}
              </td>

              {/*To Time table*/}
              <td>
                {editingUser === user.id ? (
                  <input
                    value={updatedToTime}
                    onChange={(e) => SetUpdatedToTime(e.target.value)}
                  />
                ) : (
                  user.time_to
                )}
              </td>
              
              {/*Status table*/}
              <td>{user.status}</td>
              
              {/*Approve and reject button*/}
                <td>
                  {user.status === 'pending' ? (
                    <>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => handleAction(user.uid, 'approved')}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleAction(user.uid, 'rejected')}
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <></>
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
export default AdminReservationPage;