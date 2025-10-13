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

      <AdminNavbarComponent isActive={isActive} />

      <Container>
          <h1>Welcome, Admin!</h1>
      </Container>

      <main style={{ marginTop: "100px", padding: "20px" }}>
        
      </main>

    </div>
    </>
  );
}


export default AdminPage;