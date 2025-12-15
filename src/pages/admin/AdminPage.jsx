import React, { useEffect, useState } from 'react';
import AdminNavbarComponent from '../../components/AdminNavbarComponent';
import FooterComponent from '../../components/FooterComponent';
import { GiHamburgerMenu } from "react-icons/gi";
import adminLogo from '../../assets/admin_card.png';
import userLogo from '../../assets/user_admin.png';
import reservationLogo from '../../assets/reserve_admin.png';
import stickerLogo from '../../assets/car_admin.png';
import styles from '../../css/adminstyles.module.css';
import { Container } from 'react-bootstrap';
import api from '../../api/axiosConfig';


function AdminPage(){
    const [isActive, setIsActive] = useState(false);

    const [stats, setStats] = useState({
      total_users: 0,
      pending_reservations: 0,
      pending_stickers: 0
    });

    const toggleSidebar = () => {
    setIsActive(prev => !prev);
    };

    useEffect(() => {
      api.get("/admin_dashboard.php")
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


          <div className={styles.title_card}>
                <h1>Welcome, Admin!</h1>
                <p>This is the WWHS Portal Admin Dashboard. Let's get started!</p>
              </div>

              <img
                src={adminLogo}
                alt="Admin illustration"
                className={styles.admin_logo}
              />



              <div className={styles.admin_cards}>
                <div
                  className={styles.card}
                  style={{
                    background: `url(${userLogo}) no-repeat right center`,
                    backgroundSize: '80px auto'
                  }}
                >
                  <h5>Total Users</h5>
                  <h2>{stats.total_users}</h2>
                </div>

                <div
                  className={styles.card}
                  style={{
                    background: `url(${reservationLogo}) no-repeat right center`,
                    backgroundSize: '80px auto'
                  }}
                >
                  <h5>Pending Reservations</h5>
                  <h2>{stats.pending_reservations}</h2>
                </div>

                <div
                  className={styles.card}
                  style={{
                    background: `url(${stickerLogo}) no-repeat right center`,
                    backgroundSize: '80px auto'
                  }}
                >
                  <h5>Pending Car Stickers</h5>
                  <h2>{stats.pending_stickers}</h2>
                </div>
              </div>


        </Container>
      </div>
    </div>

    </>
  );
}


export default AdminPage;