import React, { useEffect, useState } from 'react';
import AdminNavbarComponent from '../../components/AdminNavbarComponent';
import FooterComponent from '../../components/FooterComponent';
import { GiHamburgerMenu } from "react-icons/gi";
import styles from '../../css/adminstyles.module.css';
import { Container } from 'react-bootstrap';
import axios from 'axios';


function AdminPage(){
    const [isActive, setIsActive] = useState(false);

    const [stats, setStats] = useState({
      totalUsers: 0,
      pendingReservations: 0,
      pendingStickers: 0
    });

    const toggleSidebar = () => {
    setIsActive(isActive);
    };

    useEffect(() => {
      axios.get("/admin_dashboard.php")
      .then(res => {
        setStats(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    }, []);

    return (
    <>
    <AdminNavbarComponent isActive={isActive} />

    <div className={styles.admin_page_container}>
      <div className={styles.content_container}>
        <Container>

          <h1>Welcome, Admin!</h1>

          <div className={styles.admin_cards}>
            <div className={styles.card}>
              <h5>Total Users</h5>
              <h2>{stats.totalUsers}</h2>
            </div>

            <div className={styles.card}>
              <h5>Pending Reservations</h5>
              <h2>{stats.pendingReservations}</h2>
            </div>

            <div className={styles.card}>
              <h5>Pending Car Stickers</h5>
              <h2>{stats.pendingStickers}</h2>
            </div>
          </div>

        </Container>
      </div>
    </div>
    <FooterComponent />
    </>
  );
}


export default AdminPage;