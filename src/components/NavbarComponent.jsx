import logo from "../assets/wwhs_logo.png";
import userIcon from "../assets/user.svg";
import "../styles.css";
import {Link, NavLink} from 'react-router-dom';
import {Nav} from 'react-bootstrap';



function NavbarComponent(){
    return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
            <NavLink as={Link} to={"../homepage"} onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="Logo" width="70" height="70" className="d-inline-block align-text-top"/>
            </NavLink>
            
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top"/>
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                    <NavLink as={Link} to="../homepage" className="nav-link mx-lg-2 active" aria-current ="page" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about-us">About Us</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle mx-lg-2 active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Offices</a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="pages/hoa_page.html">HOA</a></li>
                    <li><a className="dropdown-item" href="pages/health_center_page.html">Health Center</a></li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="pages/senior_citizen_page.html">Senior Citizens</a></li>
                    </ul>
                </li>
                </ul>
            </div>
            </div>
                <div className="dropdown user-dropdown">
          <button
            className="btn user-button"
            type="button"
            id="userDrop"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={userIcon}
              alt="User Icon"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
          </button>

          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="userDrop"
          >
            <li>
              <NavLink className="dropdown-item" to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="../registration">
                Register
              </NavLink>
            </li>
          </ul>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default NavbarComponent;