import React, { useState } from "react";
import styles from '../css/adminnavbarstyle.module.css';
import icon from "../assets/icon.png";


function AdminNavbarComponent({ isActive }) {
  return (
    <>
      <div className={`${styles.sidebar} ${isActive ? styles.active : ""}`}>
        <img src = {icon} alt="icon" className={styles.icon}/>
      <div className={styles.sidebarHeader}>
      </div>

      <ul className={styles.sidebarLinks}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Manage Users</a>
        </li>
         <li>
          <a href="/">Vehicle Stickers</a>
        </li>
         <li>
          <a href="/">Reservation</a>
        </li>
        <li>
          <a href="/">News</a>
        </li>
      </ul>
    </div>
    </>
  );
}

export default AdminNavbarComponent;
