import { Link, NavLink } from "react-router-dom";

function RegistratrionPage(){

    return(
        <div className="login_box">
            <section className="container">
            <form id="registrationForm">
            <h2><b>Register</b></h2>
            <br/>
        <div className="namefields">
          <input type="text" id="firstName" placeholder="First Name" required/>
          <input type="text" id="lastName" placeholder="Last Name" required/>
        </div>
        <input type="number" id="contactNumber" placeholder="Contact Number" required/>
        <input type="email" id="email" placeholder="Email Address" required/>
        <input type="password" id="password" placeholder="Password" required/>
        <br/><br/>
        <button type="submit">Register</button>
        <br/>
        <NavLink as={Link} to={'../login'}>
        <a>Already have an account?</a>
        </NavLink>
      </form>
        </section>

        </div>
    );

}

export default RegistratrionPage;