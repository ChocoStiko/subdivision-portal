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
import HoaIcon from '../assets/home.svg';
import emaillIcon from '../assets/email.svg';
import addresslIcon from '../assets/address.svg';
import FooterComponent from "../components/FooterComponent";
import { NavbarCollapse } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import {Container, Row, Col} from "react-bootstrap";
import useScrollAnimation from '../scrollAnimation';

function HomePage() {
  useScrollAnimation();

    return(
        <>
        <NavbarComponent/>
        <HeroComponent/>
        

        {/* Brand Filinvest Section */}
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
            <div className={styles.about_text_animation}>
            <div className={styles.about_text}>
                <h2>About Us</h2>
                <p>
                Windward Hills Subdivision is a residential community located in Barangay Burol 1, Dasmariñas City, Cavite. Nestled in one of the city’s older barrios, Windward Hills stands on terrain that has long held historical significance—including remnants of old stone structures and sugar mills that mark Burol’s heritage.</p> <p>Over time, this land transitioned from rural estates and agricultural uses into a well-planned subdivision, with multiple phases (A, B, C, D, E) developed to accommodate growing families seeking both accessibility and serene living.
                </p>
            </div>
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
                    <p className="card-desc">A welcoming space for gatherings, celebrations, and community events.</p>
                </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
                <div className={`${styles.card} card text-bg-dark`}>
                <img src={poolImg} className={styles.card_img} alt="WWHS Pool"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">Community Pool</h5>
                    <p className="card-desc">A relaxing spot for families to unwind and enjoy sunny days.</p>
                </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
                <div className={`${styles.card} card text-bg-dark`}>
                <img src={courtImg} className="card-img" alt="WWHS Court"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">Basketball Court</h5>
                    <p className="card-desc">A lively area for sports and recreation where residents can play and stay active.</p>
                </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
                <div className={`${styles.card} card text-bg-dark`}>
                <img src={parkImg} className="card-img" alt="WWHS Park"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">Park</h5>
                    <p className="card-desc">A peaceful green space perfect for morning walks, family picnics, or quiet moments surrounded by nature.</p>
                </div>
                </div>
            </div>

            </div>
        </div>
        </section>

        {/*About Us Why Choose Us*/}
        <section className={styles.about_us_choose}>
            <h2 className={styles.about_us_choose_animation}>Why Choose Us?</h2>

            <div className={styles.grid_box}>
            <div className={styles.choose_section_animation}>
            <div className={styles.square}>
            <span className={styles.num}>01</span> 
            <h3>Convenient Location</h3>
            <p>Close to universities, supermarkets, and the parish church; everything you need is just minutes away.</p>
            </div>
            </div>

            <div className={styles.choose_section_animation}>
            <div className={styles.square}>
            <span className={styles.num}>02</span>
            <h3>Peaceful Community</h3>
            <p>Enjoy a quiet and secure environment perfect for families who value safety and comfort.</p>
            </div>
            </div>

            <div className={styles.choose_section_animation}>
            <div className={styles.square}>
            <span className={styles.num}>03</span>
            <h3>Quality Amenities</h3>
            <p>From the clubhouse and pool to the basketball court and park, residents enjoy spaces that support leisure and connection.</p>
            </div>
            </div>

            <div className={styles.choose_section_animation}>
            <div className={styles.square}>
            <span className={styles.num}>04</span>
            <h3>Strong Sense of Belonging</h3>
            <p>Windward Hills is a community where neighbors become friends and every family feels at home.</p>
            </div>
            </div>
        </div>
        </section>

         {/* Get in Touch Section */}
      <section className={styles.get_in_touch}>
        <div className={styles.get_in_touch_content}>
          <h2>Get in Touch</h2>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className={styles.container_git}>
          <div className={styles.contact_info}>
            <div className={styles.contact_box}>
              <div className={styles.contact_icon}>
                <img src={HoaIcon} alt="Home" width="30" height="30" />
              </div>
              <div className={styles.contact_text}>
                <h3>HOA</h3>
                <p>0928 382 8983</p>
              </div>
            </div>

            <div className={styles.contact_box}>
              <div className={styles.contact_icon}>
                <img src={emaillIcon} alt="Email" width="30" height="30" />
              </div>
              <div className={styles.contact_text}>
                <h3>Email</h3>
                <p>wwhs@gmail.com</p>
              </div>
            </div>

            <div className={styles.contact_box}>
              <div className={styles.contact_icon}>
                <img src={addresslIcon} alt="Address" width="30" height="30" />
              </div>
              <div className={styles.contact_text}>
                <h3>Address</h3>
                <p>Congressional Ave, Dasmarinas, 4115 Cavite</p>
              </div>
            </div>
          </div>

          <div className={styles.map_container}>
            <Container>
              <Row>
                <Col xs={12} md={12}>
                  <iframe 
                    className={styles.map} 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d341.6830461081288!2d120.96423585606694!3d14.328730909159702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d44a01e03809%3A0x5143ca3d77b61191!2s8XH7%2BFQ6%20Winward%20Subdivision%2C%20Main%20Ave%2C%20Dasmari%C3%B1as%2C%204114%20Cavite!5e0!3m2!1sen!2sph!4v1760107149770!5m2!1sen!2sph" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>

       <FooterComponent />
    </>
  );
}


export default HomePage;