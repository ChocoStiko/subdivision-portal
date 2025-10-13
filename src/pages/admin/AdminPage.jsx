import React, { useState } from 'react';
import AdminNavbarComponent from '../../components/AdminNavbarComponent';
import FooterComponent from '../../components/FooterComponent';
import { GiHamburgerMenu } from "react-icons/gi";
import styles from '../../css/adminnavbarstyle.module.css';


function AdminPage(){
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
    setIsActive(!isActive);

    };

    return (
    <>
    <div className="admin-page">

      <AdminNavbarComponent isActive={isActive} />

      <main style={{ marginTop: "100px", padding: "20px" }}>
        <h1>Welcome, Admin!</h1>
      </main>

    </div>
    </>
  );
}


export default AdminPage;