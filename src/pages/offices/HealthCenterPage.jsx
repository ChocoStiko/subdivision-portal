import styles from "../../css/officesstyle.module.css";
import icon1 from "../../assets/health_i_1.png";
import icon2 from "../../assets/health_i_2.png";
import icon3 from "../../assets/health_i_3.png";
import icon4 from "../../assets/health_i_4.png";
import health1Img from "../../assets/health1.jpg";
import health2Img from "../../assets/health2.jpg";
import health3Img from "../../assets/health3.jpg";
import FooterComponent from "../../components/FooterComponent";
import { NavbarCollapse } from "react-bootstrap";
import NavbarComponent from "../../components/NavbarComponent";

function HealthCenterPage() {
    return(
        <>
        <NavbarComponent/>

        {/* hero health center */}
         <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <h1>Welcome to our Health Center!</h1>
                    <p>The Health Care Office is dedicated to promoting the well-being and safety of all residents. It provides basic first aid services, health monitoring, and assistance during emergencies. The office also maintains partnerships with nearby clinics and hospitals to ensure quick medical response and access to proper care when needed. Regular health programs, such as check-ups and awareness campaigns, help residents stay informed and healthy within the community.</p>
                </div>


                    {/*carousel*/}

                    <div className={styles.heroCarousel}>
                        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={health1Img} className="d-block w-100" alt="health center" />
                                </div>
                                <div className="carousel-item">
                                    <img src={health2Img} className="d-block w-100" alt="medicines" />
                                </div>
                                <div className="carousel-item">
                                    <img src={health3Img} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* profile cards */}
            <section className={styles.profiles}>
                <div className={styles.center}>
                    <h1>Health Center Staff</h1>
                    <p>From first aid assistance to health awareness programs, they help create a safe and nurturing environment where everyone’s well-being comes first.</p>
                </div>

                <div className={styles["profile-container"]}>
                    <div className={styles.box}>
                        <img src={icon1} alt="icon" />
                        <h3>Lorem Ipsum</h3>
                        <h5>Position</h5>
                    </div>

                    <div className={styles.box}>
                        <img src={icon2} alt="icon" />
                        <h3>Lorem Ipsum</h3>
                        <h5>Position</h5>
                    </div>

                    <div className={styles.box}>
                        <img src={icon3} alt="icon" />
                        <h3>Lorem Ipsum</h3>
                        <h5>Position</h5>
                    </div>

                    <div className={styles.box}>
                        <img src={icon4} alt="icon" />
                        <h3>Lorem Ipsum</h3>
                        <h5>Position</h5>
                    </div>
                </div>
            </section>


        
        <FooterComponent/>
        </>
    );
    
}

export default HealthCenterPage;