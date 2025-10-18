import FooterComponent from '../components/FooterComponent';
import UserNavbarComponent from '../components/UserNavbarComponent';
import style from '../css/userhomestyles.module.css';
import React from 'react';
import motorSign from '../assets/motor_sign.jpg'
import clampSign from '../assets/clamp_sign.jpg'
import kmSign from '../assets/20km_sign.jpg'
import villarSign from '../assets/villar.jpg'
import { Container, Row, Col } from 'react-bootstrap'



function UserHomePage(){
    return(
        <>
        <UserNavbarComponent/>
      
      {/*Hero*/}
        <section className={style.hero_user}>
                <div className={style.hero_content}>
                    <h1>Welcome to the WWHS Portal</h1>
                </div>
            </section>

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
                <img src={villarSign} alt="Subd Aerial" className={style.card_img_top}/>
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

            <FooterComponent />
        </>
    )
}

export default UserHomePage;