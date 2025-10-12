import React, { useState } from 'react';
import AdminNavbarComponent from '../components/AdminNavbarComponent';
import FooterComponent from '../components/FooterComponent';
import { GiHamburgerMenu } from "react-icons/gi";


function AdminPage(){
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
    setIsActive(!isActive);

    };

    return (
    <>
    <div className="admin-page">

      <header style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1100 }}>
        <GiHamburgerMenu
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: "white",
            marginLeft: "20px",
          }}
          onClick={toggleSidebar}
        />
      </header>

      <AdminNavbarComponent isActive={isActive} />

      <main style={{ marginTop: "100px", padding: "20px" }}>
        <h1>Welcome, Admin!</h1>
      </main>

      </div>
      </>
  );
}


export default AdminPage;