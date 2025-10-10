import styles from "../../css/officesstyle.module.css";
import iconImg from "../../assets/icon.png";
import subdImg from "../../assets/sample subd.jpg";
import hoa1Img from "../../assets/hoa1.jpg";
import hoa2Img from "../../assets/hoa2.jpg";
import hoa3Img from "../../assets/hoa3.jpg";
import FooterComponent from "../../components/FooterComponent";
import { NavbarCollapse } from "react-bootstrap";
import NavbarComponent from "../../components/NavbarComponent";

function HoaPage() {
    return(
        <>
        <NavbarComponent/>

        {/* hero hoa */}
         <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <h1>Home Owners Association</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quos dolores eos sit eveniet, voluptates corrupti, aperiam inventore provident illum, similique nemo nostrum. Minima, iure quae aspernatur consequatur autem provident.</p>
                </div>


                    {/*carousel*/}

                    <div className={styles.heroCarousel}>
                        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={hoa1Img} className="d-block w-100" alt="health center" />
                                </div>
                                <div className="carousel-item">
                                    <img src={hoa2Img} className="d-block w-100" alt="medicines" />
                                </div>
                                <div className="carousel-item">
                                    <img src={hoa3Img} className="d-block w-100" alt="..." />
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
                    <h1>HOA Officers</h1>
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

export default HoaPage;