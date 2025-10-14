import styles from "../../css/officesstyle.module.css";
import iconImg from "../../assets/icon.png";
import senior1Img from "../../assets/senior1.jpg";
import senior2Img from "../../assets/senior2.jpg";
import senior3Img from "../../assets/senior3.jpg";
import FooterComponent from "../../components/FooterComponent";
import { NavbarCollapse } from "react-bootstrap";
import NavbarComponent from "../../components/NavbarComponent";

function SeniorsPage() {
    return(
        <>
        <NavbarComponent/>

        {/* hero hoa */}
         <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <h1>Senior Citizen's Office</h1>
                    <p>The Senior Citizens Office supports the welfare of elderly residents by offering programs that encourage active, engaged, and healthy living. It provides access to benefits, health services, and community activities tailored for senior citizens. The office also fosters a warm and inclusive environment where older residents can connect with others, share experiences, and continue contributing to the community’s growth and spirit.</p>
                </div>


                    {/*carousel*/}

                    <div className={styles.heroCarousel}>
                        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={senior1Img} className="d-block w-100" alt="health center" />
                                </div>
                                <div className="carousel-item">
                                    <img src={senior2Img} className="d-block w-100" alt="medicines" />
                                </div>
                                <div className="carousel-item">
                                    <img src={senior3Img} className="d-block w-100" alt="..." />
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
                    <h1>Senior Citizen's Board Officers</h1>
                    <p>Offering assistance, health services, and engagement programs. It upholds the dignity and importance of seniors in our community, promoting an active and fulfilling lifestyle for all.</p>
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

export default SeniorsPage;