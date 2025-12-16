import '../styles.css';
import styles from '../css/loginstyles.module.css';
import login_img from '../assets/login_subd.jpg'; 
import React, {useState, useEffect} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import api from "../api/axiosConfig";

function LoginPage(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  //const sheetdbSrc = 'https://sheetdb.io/api/v1/y3gntqh4y7qn8';

  useEffect(() => {
    if(sessionStorage.getItem("loggedInUser")) {
      navigate("../userhome");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await api.post("/login_user.php", { email: email, password });

      console.log("response", res.data);


      if (res.data.valid) {
        sessionStorage.setItem("loggedInUser", JSON.stringify(res.data.user));
        navigate("../userhome");
      }

      else{
        setMessage("Incorrect email or password");
        return;
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

            <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="passwordLogin"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingRight: "35px" }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "35%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  fontSize: "20px",
                  color: "#555"
                }}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
          
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