import HeroComponent from "../components/HeroComponent";
import "../styles.css";
import filinvestLogo from "../assets/filinvest logo.png";
import wwhsLogo from "../assets/wwhs_logo.png"
import subdImg from "../assets/sample subd.jpg";

function HomePage() {

    return(
        <>
        <HeroComponent/>

        {/* Filinvest Section */}
        <section className="brands">
            <div className="row">
                <div className="col">
                    <img src={filinvestLogo} alt="Filinvest Logo"/>
                </div>
                <div className="col">
                    <img src={wwhsLogo} alt="Filinvest Logo"/>
                </div>
                    <div className="col">
                        <img src={filinvestLogo} alt="Filinvest Logo"/>
                    </div>
                <div className="col">
                    <img src={wwhsLogo} alt="Filinvest Logo"/>
                </div>
            </div>
        </section>
        
        {/*About Us Section*/}
        <section className="about-us" id="about-us">
            <div className="container">
                <img src= {subdImg} className="subd-img rounded mx-auto d-block" alt="subd"/>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </section>

        {/*about us discover section*/}
        <section class="discover-sect">
            <div class="row">
                <div class="col">
                    <div class="card text-bg-dark">
                        <img src="..." class="card-img" alt="..."/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card text-bg-dark">
                    <img src="..." class="card-img" alt="..."/>
                    <div class="card-img-overlay">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card text-bg-dark">
                    <img src="..." class="card-img" alt="..."/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small>Last updated 3 mins ago</small></p>
                        </div>
                </div>
            </div>

            <div class="col">
                <div class="card text-bg-dark">
                <img src="..." class="card-img" alt="..."/>
                    <div class="card-img-overlay">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </section>

        {/*About Us Why Choose Us*/}
        <section class="abt-us-choose">
            <div class="about-us choose">
                <h2>Why Choose Us!</h2>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </section>

        {/*get in touch section*/}
        <section class="get-in-touch">
            <div class="get-in-touch">
                <h2>Get in Touch</h2>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </section>

        </>
    );
    
}

export default HomePage;