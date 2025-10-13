import { useState } from "react";
import styles from '../css/loginstyles.module.css';
import registration_img from '../assets/sample subd.jpg'; 
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

function RegistrationPage(){

    const [regFN, setRegFN] = useState('');
    const [regLN, setRegLN] = useState('');
    const [regContact, setRegContact] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const sheetdbUrl = 'https://sheetdb.io/api/v1/y3gntqh4y7qn8';

    const handleRegister = async (e) => {
        e.preventDefault();

        if(regPassword.length < 8) {
            setMessage("Password length must be atleast 8 characters")
            return;
        }


        try{
            const response = await fetch(sheetdbUrl, {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({data : [{first_name:regFN, last_name:regLN, contact_number:regContact, email:regEmail, password:regPassword}]})
            });

            if(response.ok){
                setMessage("Register successfully!");
                setTimeout(() => {
                    navigate("../login");
                }, 1000);
                
            }
        }

        catch (error){
            console.error("Error:", error);
            setMessage("Error, please try again later.");
        }
    };

    return(
        <>
        <NavbarComponent/>

         <div className={styles.login_body}>
      <div className={styles.image_section}>
        <img src={registration_img} alt="Login Illustration" />
      </div>

        <div className={styles.login_box}>
            <section className="container-login">
            <h1><b>Register</b></h1>
            <p>Please enter your credentials</p>
            <br/>
        <form id="registrationForm" onSubmit={handleRegister}>
        <div className={styles.namefields}>
          <input type="text" id="firstName" placeholder="First Name" required value={regFN} onChange={(e) => setRegFN(e.target.value)}/>
          <input type="text" id="lastName" placeholder="Last Name" required value={regLN} onChange={(e) => setRegLN(e.target.value)}/>
        </div>
        <input type="number" id="contactNumber" placeholder="Contact Number" required value={regContact} onChange={(e) => setRegContact(e.target.value)}/>
        <input type="email" id="email" placeholder="Email Address" required value={regEmail} onChange={(e) => setRegEmail(e.target.value)}/>
        <input type="password" id="password" placeholder="Password" required value={regPassword} onChange={(e) => setRegPassword(e.target.value)}/>
        <br/>
        {message}
        <br/>
        <button type="submit">Register</button>
        <br/>
        
        <br/>
        <NavLink to="/login" className={styles.register_link}>
                      Click here to sign in
                    </NavLink>
      </form>
        </section>
        </div>

        </div>
        </>
    );

}

export default RegistrationPage;