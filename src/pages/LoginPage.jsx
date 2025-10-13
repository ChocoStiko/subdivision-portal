import '../styles.css';
import styles from '../css/loginstyles.module.css';
import login_img from '../assets/sample subd.jpg'; 
import React, {useState, useEffect} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';

function LoginPage(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const sheetdbSrc = 'https://sheetdb.io/api/v1/y3gntqh4y7qn8';

  useEffect(() => {
    if(sessionStorage.getItem("loggedInUser")) {
      navigate("../userhome");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch(`${sheetdbSrc}/search?email=${email}&password=${password}`);
      const data = await response.json();
      if(data.length > 0){
        sessionStorage.setItem("loggedInUser", email);
        navigate("../userhome");
      }
      else{
        setMessage("Incorrect email or password");
      }
    }
    catch (error){
      console.error("Error:", error);
      setMessage("Error, please try again later.");
    }
  }

  return (
    <>
    <NavbarComponent/>

    <div className={styles.login_body}>
      <div className={styles.image_section}>
        <img src={login_img} alt="Login Illustration" />
      </div>

      <div className={styles.login_box}>
        <section className={styles.container_login}>
          <form id="loginform" onSubmit={handleSubmit}>
            <h1><b>Login</b></h1>
            <p>Welcome! Please enter your details.</p>
            <br />
            <input
              type="text"
              id="emailLogin"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="passwordLogin"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {message && <div className="message">{message}</div>}
            <button type="submit">Login</button>
            <br />
            <NavLink to="/registration" className={styles.register_link}>
              Click here to create account
            </NavLink>
          </form>
        </section>
      </div>
    </div>
    </>
  );
}



export default LoginPage;