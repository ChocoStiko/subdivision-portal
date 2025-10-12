import '../styles.css';
import styles from '../css/loginstyles.module.css';
import login_img from '../assets/sample subd.jpg'; 
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function AdminLoginPage(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const sheetdbSrc = "https://sheetdb.io/api/v1/7fgbs5k566r91";

  useEffect(() => {
    if(sessionStorage.getItem("loggedInAdmin")) {
      navigate("/admin_page");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch(`${sheetdbSrc}/search?email=${email}&password=${password}`);
      const data = await response.json();
      if(data.length > 0){
        sessionStorage.setItem("loggedInAdmin", email);
        navigate("/admin_page");
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

    <div className={styles.login_body}>
      <div className={styles.image_section}>
        <img src={login_img} alt="Login Illustration" />
      </div>

      <div className={styles.login_box}>
        <section className={styles.container_login}>
          <form id="loginform" onSubmit={handleSubmit}>
            <h1><b>Admin Login</b></h1>
            <p>Enter your Admin Credentials</p>
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
          </form>
        </section>
      </div>
    </div>
    </>
  );
}



export default AdminLoginPage;