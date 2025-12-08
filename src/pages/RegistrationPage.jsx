import { useState } from "react";
import styles from '../css/loginstyles.module.css';
import registration_img from '../assets/registration_subd.jpg'; 
import { NavLink, useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import api from "../api/axiosConfig";

function RegistrationPage(){
  const [regFN, setRegFN] = useState('');
  const [regLN, setRegLN] = useState('');
  const [regContact, setRegContact] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    if (regPassword.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return;
    }

    const payload = {
      first_name: regFN.trim(),
      last_name: regLN.trim(),
      contact_number: regContact.trim(),
      email: regEmail.trim(),
      password: regPassword
    };

    try {
      setSubmitting(true);
      console.log("POST payload:", payload);

      const res = await api.post("/user.php", payload);
      console.log("server response:", res);

      const ok = res?.data?.success ?? res?.data?.ok ?? (res?.status === 200);
      const serverMsg = res?.data?.message ?? res?.data?.msg ?? "No message from server";

      if (ok) {
        setMessage(serverMsg || "Registered successfully!");
        setRegFN(""); setRegLN(""); setRegContact(""); setRegEmail(""); setRegPassword("");
        setTimeout(() => navigate("/login"), 700);
      } else {
        setMessage(serverMsg || "Registration failed");
      }
    } catch (err) {
      console.error("Registration error:", err);
      const serverMsg = err?.response?.data?.message || err?.response?.data?.error || err?.message;
      setMessage(serverMsg || "Network or server error. Check console / server logs.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <NavbarComponent />
      <div className={styles.reg_body}>
        <div className={styles.image_section}>
          <img src={registration_img} alt="Registration" />
        </div>

        <div className={styles.reg_box}>
          <section className={styles.container_reg}>
            <h1><b>Register</b></h1>
            <p>Please enter your credentials</p>

            <form id="registrationForm" onSubmit={handleRegister}>
              <div className={styles.namefields}>
                <input type="text" id="firstName" placeholder="First Name" required value={regFN} onChange={(e) => setRegFN(e.target.value)} />
                <input type="text" id="lastName" placeholder="Last Name" required value={regLN} onChange={(e) => setRegLN(e.target.value)} />
              </div>

              <input type="text" id="contactNumber" placeholder="Contact Number" required value={regContact} onChange={(e) => setRegContact(e.target.value)} />
              <input type="email" id="email" placeholder="Email Address" required value={regEmail} onChange={(e) => setRegEmail(e.target.value)} />
              <input type="password" id="password" placeholder="Password" required value={regPassword} onChange={(e) => setRegPassword(e.target.value)} />

              <div style={{ marginTop: 8 }}>{message}</div>

              <button type="submit" disabled={submitting}>{submitting ? "Registering…" : "Register"}</button>

              <NavLink to="/login" className={styles.register_link}>Click here to sign in</NavLink>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;
