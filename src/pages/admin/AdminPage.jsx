import React, { useState } from 'react';
import AdminNavbarComponent from '../../components/AdminNavbarComponent';
import FooterComponent from '../../components/FooterComponent';
import { GiHamburgerMenu } from "react-icons/gi";
import styles from '../../css/adminstyles.module.css';
import { Container } from 'react-bootstrap';


function AdminPage(){
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
    setIsActive(isActive);

    };

    return (
    <>
    <div className={styles.admin_page_section}>
      <Container flex>
      <AdminNavbarComponent isActive={isActive} />
      <div className={styles.content}>
          <h1>Welcome, Admin!</h1>
          </div>
      </Container>
    </div>
    </>
  );
}


export default AdminPage;