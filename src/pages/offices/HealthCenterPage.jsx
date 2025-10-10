import styles from "../../css/officesstyle.module.css";
import iconImg from "../../assets/icon.png";
import subdImg from "../../assets/sample subd.jpg";
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos dolores eos sit eveniet, voluptates corrupti, aperiam inventore provident illum, similique nemo nostrum. Minima, iure quae aspernatur consequatur autem provident.</p>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className={styles["profile-container"]}>
                    <div className={styles.box}>
                        <img src={iconImg} alt="icon" />
                        <h3>Lorem Ipsum</h3>
                        <h5>Position</h5>
                    </div>

                    <div className={styles.box}>
                        <img src={iconImg} alt="icon" />
                        <h3>Lorem Ipsum</h3>
                        <h5>Position</h5>
                    </div>

                    <div className={styles.box}>
                        <img src={iconImg} alt="icon" />
                        <h3>Lorem Ipsum</h3>
                        <h5>Position</h5>
                    </div>

                    <div className={styles.box}>
                        <img src={iconImg} alt="icon" />
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