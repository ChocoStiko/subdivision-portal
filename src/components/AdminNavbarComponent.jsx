import React, { useState } from "react";
import styles from '../css/adminnavbarstyle.module.css';
import { Link, NavLink } from 'react-router-dom';
import icon from "../assets/icon.png";
import { GiHamburgerMenu } from "react-icons/gi";


function AdminNavbarComponent() {
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
    setIsActive(!isActive);
    }
  return (
    
    <>
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

      <div className={`${styles.sidebar} ${isActive ? styles.active : ""}`}>
        <img src = {icon} alt="icon" className={styles.icon}/>
      <div className={styles.sidebarHeader}>
      </div>

      <ul className={styles.sidebarLinks}>
        <li>
          <NavLink as={Link} to={"/admin_page"}>Home</NavLink>
        </li>
        <li>
          <NavLink as={Link} to={"/manage_users"}>Manage Users</NavLink>
        </li>
         <li>
          <NavLink as={Link} to={"/manage_stickers"}>Vehicle Stickers</NavLink>
        </li>
         <li>
          <NavLink as={Link} to={"/manage_reservation"}>Reservation</NavLink>
        </li>
        <li>
          <NavLink as={Link} to={"/manage_news"}>News</NavLink>
        </li>
          <li>
          <NavLink as={Link} to={"/"} onClick={() => {
                  sessionStorage.removeItem("loggedInAdmin");
                }}>Logout</NavLink>
        </li>
      </ul>
    </div>
    </>
  );
}

export default AdminNavbarComponent;
