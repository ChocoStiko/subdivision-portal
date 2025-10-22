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
    <AdminNavbarComponent isActive={isActive} />
    <div className={styles.admin_page_container}>
      <div className={styles.content_container}>
        <Container>
          <h1>Welcome, Admin!</h1>
        </Container>
      </div>
      
    </div>
    </>
  );
}


export default AdminPage;