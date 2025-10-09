import HeroComponent from "../components/HeroComponent";
import styles from "../css/homepagestyle.module.css";
import filinvestLogo from "../assets/filinvest logo.png";
import wwhsLogo from "../assets/wwhs_logo.png"
import subdImg from "../assets/sample subd.jpg";
import clubhouseImg from "../assets/clubhouse.jpg";
import courtImg from "../assets/court.jpg";
import poolImg from "../assets/pool.jpg"
import aerialImg from "../assets/subd-aerial.jpg";
import parkImg from "../assets/park.jpg";
import FooterComponent from "../components/FooterComponent";
import { NavbarCollapse } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";

function HomePage() {

    return(
        <>
        <NavbarComponent/>
        <HeroComponent/>
        

        {/* Filinvest Section */}
        <section className={styles.brands}>
        <div className={styles.row}>
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
        <section className={styles.about_us} id="about_us">
        <div className="container">
            <div className={styles.about_content}>
            <div className={styles.subd_aerial_img}>
                <img src={aerialImg} alt="subd-aerial"/>
            </div>
            <div className={styles.about_text}>
                <h2>About Us</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            </div>
        </div>
        </section>

        {/*about us discover section*/}
        <section className={styles.discover_sect}>
        <div className="container">
            <div className={`${styles.no_wrap_row} row g-3`}>

            <div className="col-12 col-sm-6 col-md-3">
                <div className={`${styles.card} card text-bg-dark`}>
                <img src={clubhouseImg} className={styles.card_img} alt="WWHS Clubhouse"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">Clubhouse</h5>
                    <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
                <div className={`${styles.card} card text-bg-dark`}>
                <img src={poolImg} className={styles.card_img} alt="WWHS Pool"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">Community Pool</h5>
                    <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
                <div className={`${styles.card} card text-bg-dark`}>
                <img src={courtImg} className="card-img" alt="WWHS Court"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">Basketball Court</h5>
                    <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
                <div className={`${styles.card} card text-bg-dark`}>
                <img src={parkImg} className="card-img" alt="WWHS Park"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">Park</h5>
                    <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
            </div>

            </div>
        </div>
        </section>

        {/*About Us Why Choose Us*/}
        <section className={styles.about_us_choose}>
            <h2 className={styles.title}>Why Choose Us?</h2>

            <div className={styles.grid_box}>
            <div className={styles.square}>
            <span className={styles.num}>01</span>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At a, quo labore quis nam modi?</p>
            </div>


            <div className={styles.square}>
            <span className={styles.num}>02</span>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At a, quo labore quis nam modi?</p>
            </div>

            <div className={styles.square}>
            <span className={styles.num}>03</span>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At a, quo labore quis nam modi?</p>
            </div>

            <div className={styles.square}>
            <span className={styles.num}>04</span>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At a, quo labore quis nam modi?</p>
            </div>
        </div>
        </section>

        {/*get in touch section*/}
        <section className={styles.get_in_touch}>
        <div className={styles.get_in_touch}>
            <h2>Get in Touch</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </section>
        <FooterComponent/>
        </>
    );
    
}

export default HomePage;