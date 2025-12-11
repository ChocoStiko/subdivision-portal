import FooterComponent from '../components/FooterComponent';
import UserNavbarComponent from '../components/UserNavbarComponent';
import style from '../css/userhomestyles.module.css';
import React from 'react';
import motorSign from '../assets/motor_sign.jpg'
import clampSign from '../assets/clamp_sign.jpg'
import kmSign from '../assets/20km_sign.jpg'
import villarSign from '../assets/villar.jpg'
import Pool from '../assets/pool.jpg';
import Clubhouse from '../assets/clubhouse.jpg';
import Court from '../assets/court.jpg';
import { Container, Row, Col } from 'react-bootstrap'
import filinvestLogo from "../assets/filinvest logo.png";
import wwhsLogo from "../assets/wwhs_logo.png"
import useScrollAnimation from '../scrollAnimation';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';


function UserHomePage() {
  const navigate = useNavigate();
  useScrollAnimation();

  return (
    <>
      <UserNavbarComponent />

      {/*Hero*/}
      <section className={style.hero_user}>
        <div className={style.hero_content}>
          <h1>Welcome to the WWHS Portal</h1>
          <p className={style.hero_caption}>Your one-stop place for venue reservations, announcements, and community updates.</p>
        </div>
      </section>

      {/* Brand Filinvest Section */}
      <section className={style.brands}>
        <div className={style.row}>

          <div className="col">
            <img src={filinvestLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={wwhsLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={filinvestLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={wwhsLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={filinvestLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={wwhsLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={filinvestLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={wwhsLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={filinvestLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={wwhsLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={filinvestLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={wwhsLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={filinvestLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={wwhsLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={filinvestLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={wwhsLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={filinvestLogo} alt="Filinvest Logo" />
          </div>
          <div className="col">
            <img src={wwhsLogo} alt="Filinvest Logo" />
          </div>
        </div>
      </section>

       {/* Road Advisories Section */}

      <section className={style.road_advisories}>
        <Container>
          <h2 className={style.section_title}>Road Advisories</h2>
          <Row className="g-4 justify-content-center">
            <Col xs={12} md={6} lg={3}>
              <div className={style.card} style={{ width: '100%' }}>
                <img src={motorSign} alt="Subd Aerial" className={style.card_img_top} />
                <div className={style.card_body}>
                  <p className={style.card_text}>
                    This road is open exclusively to motorcycles with 200cc engine capacity and above. Smaller motorcycles and tricycles are not permitted beyond this point to maintain safety and traffic flow within the subdivision.
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} lg={3}>
              <div className={style.card} style={{ width: '100%' }}>
                <img src={clampSign} alt="Subd Aerial" className={style.card_img_top} />
                <div className={style.card_body}>
                  <p className={style.card_text}>
                    No illegal parking. Vehicles parked in restricted areas or blocking driveways will be clamped or towed at the owner’s expense. Please park only in designated spaces to keep the roads clear and safe for all.
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} lg={3}>
              <div className={style.card} style={{ width: '100%' }}>
                <img src={kmSign} alt="Subd Aerial" className={style.card_img_top} />
                <div className={style.card_body}>
                  <p className={style.card_text}>
                    For everyone’s safety, all vehicles are required to observe a maximum speed of 20 km/h within Windward Hills Subdivision. Slow down — children, pedestrians, and pets may be crossing.
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} lg={3}>
              <div className={style.card} style={{ width: '100%' }}>
                <img src={villarSign} alt="Subd Aerial" className={style.card_img_top} />
                <div className={style.card_body}>
                  <p className={style.card_text}>
                    This entry serves as the designated public access route to Villar City Road. Drivers are reminded to follow traffic rules, respect residents’ right of way, and maintain low speed while passing through the subdivision.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*reservations section*/}

      <section className={style.reservations}>
        <Container>
          <div className={style.reservation_flex}>
            <div className={style.text_side}>
              <h2 className={style.section_title}>Reserve Now!</h2>
              <p className={style.section_description}>
                From family gatherings to community events, reserve your venue effortlessly and keep track of all your bookings in one place.
              </p>
              <button onClick={() => navigate("/reservation")} className={style.reserve_button}>
                Book Your Venue
              </button>
            </div>

            <div className={style.carousel_side}>
              <Carousel interval={3000} pause={false}>
                <Carousel.Item>
                  <img className="d-block w-100 carousel-image" src={Clubhouse} alt="Clubhouse" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 carousel-image" src={Pool} alt="Pool" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100 carousel-image" src={Court} alt="Court" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </Container>
      </section>

     

      <FooterComponent />
    </>
  )
}

export default UserHomePage;