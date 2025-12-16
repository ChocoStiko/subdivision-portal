import logo from "../assets/wwhs_logo.png";
import userIcon from "../assets/user.svg";
import "../styles.css";
import { Link, NavLink } from "react-router-dom";
import api from "../api/axiosConfig";
import { useEffect, useState } from "react";


function UserNavbarComponent() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedName = sessionStorage.getItem("loggedInUser");
    setUsername(JSON.parse(storedName));
  }, []);


  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">

        <NavLink as={Link} to="../userhome" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="Logo" width="70" height="70" className="d-inline-block align-text-top"/>
        </NavLink>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <img  src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top"/>
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink as={Link} to="../userhome" className="nav-link mx-lg-2 active" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle mx-lg-2 active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink as={Link} to="../reservation" className="dropdown-item" onClick={() => setTimeout(() => {window.scrollTo(0, 0);}, 100)}>
                      Reservation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink as={Link} to="../car_sticker" className="dropdown-item" onClick={() => setTimeout(() => {window.scrollTo(0, 0);}, 100)}>
                      Car Sticker
                    </NavLink>
                  </li>
                  <li>
                    <NavLink as={Link} to="../move" className="dropdown-item" onClick={() => setTimeout(() => {window.scrollTo(0, 0);}, 100)}>
                      Move In & Move Out
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink as={Link} to="../news" className="nav-link mx-lg-2 active" onClick={() => setTimeout(() => {window.scrollTo(0, 0);}, 100)}>News</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex align-items-center ms-auto">

                    <div className="dropdown user-dropdown ms-auto me-1">
          <button className="btn user-button d-flex" type="button" id="userDrop" data-bs-toggle="dropdown" aria-expanded="false">
            <div className="username">
              <p className="mb-0 fw-semibold">
                {username ? `${username.first_name} ${username.last_name}` : ""}
              </p>
            </div>
            <img src={userIcon} alt="User Icon" width="30" height="30" className="d-inline-block align-text-top"/>
          </button>

          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDrop">

            <li>
              <NavLink as={Link} to="../account_details" className="dropdown-item" onClick={() => {
                 
                }}
              >Account Details
              </NavLink>
            </li>
            
            <li>
              <NavLink as={Link} to="../homepage" className="dropdown-item" onClick={() => {
                  sessionStorage.removeItem("loggedInUser");
                }}
              >Logout
              </NavLink>
            </li>

          </ul>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>          
        </div>
      </div>
    </nav>
  );
}

export default UserNavbarComponent;
