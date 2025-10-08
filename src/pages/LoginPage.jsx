import '../styles.css';
import React, {useState, useEffect} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function LoginPage(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const sheetdbSrc = "https://sheetdb.io/api/v1/c2tpy3ag3nb05";

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

  return(
    <div className="login_box">
      <section className="container-login">
        <form id="loginform" onSubmit={handleSubmit}>
          <h2><b>Login</b></h2>
          <br/>
          <input type="text" id="emailLogin" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" id="passwordLogin" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
          <div className="message" id="error_message"></div>
          <br/>
          <button type="submit">Login</button>
          <br/>
          <NavLink as={Link} to={"../registration"}>
          <a>Click here to create account</a>
          </NavLink>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;