import logo from "../assets/wwhs_logo.png";
import userIcon from "../assets/user.svg";
import "../styles.css";
import {Link, NavLink} from 'react-router-dom';
import {Nav} from 'react-bootstrap';



function UserNavbarComponent(){
    return(
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
            <NavLink as={Link} to={"../userhome"} onClick={() => window.scrollTo(0, 0)}>
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
                    <NavLink as={Link} to="../userhome" className="nav-link mx-lg-2 active" aria-current="page" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle mx-lg-2 active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                    <ul className="dropdown-menu">
                    <li><NavLink as={Link} to={"../reservation"} className="dropdown-item">Reservation</NavLink></li>
                    <li><NavLink as={Link} to={"../car_sticker"} className="dropdown-item">Car Sticker</NavLink></li>
                    <li><NavLink as={Link} to={"../move"} className="dropdown-item">Move in & Move out</NavLink></li>
                    </ul>
                </li>

                <li className="nav-item">
                    <NavLink as={Link} to="../news" className="nav-link mx-lg-2 active" aria-current="page">News</NavLink>
                </li>
                
                </ul>
            </div>
            </div>

            <div className="d-flex align-items-center ms-auto me-1">
                <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle mx-lg-2 active" href="#" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            <img src={userIcon} alt="User Icon" width="40" height="40" className="d-inline-block align-text-top"/>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><NavLink as={Link} to="../login" className="dropdown-item">Account</NavLink></li>
                            <li><NavLink as={Link} to="../homepage" className="dropdown-item" onClick={() => {
                                sessionStorage.removeItem("loggedInUser");
                            }}>Logout</NavLink>
                            </li>
                        </ul>
                </li>
            </div>
        </div>
        </nav>
    );
}

export default UserNavbarComponent ;