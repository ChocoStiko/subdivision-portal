import HeroComponent from "../components/HeroComponent";
import "../styles.css";
import filinvestLogo from "../assets/filinvest logo.png";
import wwhsLogo from "../assets/wwhs_logo.png"
import subdImg from "../assets/sample subd.jpg";
import clubhouseImg from "../assets/clubhouse.jpg";
import courtImg from "../assets/court.jpg";
import poolImg from "../assets/pool.jpg"
import aerialImg from "../assets/subd-aerial.jpg";
import parkImg from "../assets/park.jpg";
import FooterComponent from "../components/FooterComponent";

function HomePage() {

    return(
        <>
        <HeroComponent/>

        {/* Filinvest Section */}
        <section class="brands">
        <div class="row">
            <div class="col">
            <img src={filinvestLogo} alt="Filinvest Logo"/>
            </div>
            <div class="col">
            <img src={wwhsLogo} alt="Filinvest Logo"/>
            </div>
            <div class="col">
            <img src={filinvestLogo} alt="Filinvest Logo"/>
            </div>
            <div class="col">
            <img src={wwhsLogo} alt="Filinvest Logo"/>
            </div>
        </div>
        </section>
        
        {/*About Us Section*/}
        <section class="about-us" id="about-us">
        <div class="container">
            <div class="about-content">
            <div class="subd-aerial-img">
                <img src={aerialImg} alt="subd-aerial"/>
            </div>
            <div class="about-text">
                <h2>About Us</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            </div>
        </div>
        </section>

        {/*about us discover section*/}
        <section class="discover-sect">
        <div class="container">
            <div class="row g-3 no-wrap-row">

            <div class="col-3">
                <div class="card text-bg-dark">
                <img src={clubhouseImg} class="card-img" alt="WWHS Clubhouse"/>
                <div class="card-img-overlay">
                    <h5 class="card-title">Clubhouse</h5>
                    <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
            </div>

            <div class="col-3">
                <div class="card text-bg-dark">
                <img src={poolImg} class="card-img" alt="WWHS Pool"/>
                <div class="card-img-overlay">
                    <h5 class="card-title">Community Pool</h5>
                    <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
            </div>

            <div class="col-3">
                <div class="card text-bg-dark">
                <img src={courtImg} class="card-img" alt="WWHS Court"/>
                <div class="card-img-overlay">
                    <h5 class="card-title">Basketball Court</h5>
                    <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
            </div>

            <div class="col-3">
                <div class="card text-bg-dark">
                <img src={parkImg} class="card-img" alt="WWHS Park"/>
                <div class="card-img-overlay">
                    <h5 class="card-title">Park</h5>
                    <p class="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
            </div>

            </div>
        </div>
        </section>

        {/*About Us Why Choose Us*/}
        <section class="about-us-choose">
            <h2 class="title">Why Choose Us?</h2>

            <div class="grid-box">
            <div class="square">
            <span class="num">01</span>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At a, quo labore quis nam modi?</p>
            </div>


            <div class="square">
            <span class="num">02</span>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At a, quo labore quis nam modi?</p>
            </div>

            <div class="square">
            <span class="num">03</span>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At a, quo labore quis nam modi?</p>
            </div>

            <div class="square">
            <span class="num">04</span>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At a, quo labore quis nam modi?</p>
            </div>
        </div>
        </section>

        {/*get in touch section*/}
        <section class="get-in-touch">
        <div class="get-in-touch">
            <h2>Get in Touch</h2>
            <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </section>
        <FooterComponent/>
        </>
    );
    
}

export default HomePage;