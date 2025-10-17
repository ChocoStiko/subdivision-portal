import FooterComponent from '../components/FooterComponent';
import UserNavbarComponent from '../components/UserNavbarComponent';
import style from '../css/userhomestyles.module.css';
import React from 'react';
import drive1 from '../assets/clubhouse.jpg'
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
          <Row className="g-4">  
            <Col xs={12} md={6} lg={3}> 
              <div className="card" style={{ width: '100%' }}> 
                <img src={drive1} alt="Subd Aerial" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} lg={3}>
              <div className="card" style={{ width: '100%' }}>
                <img src={drive1} alt="Subd Aerial" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} lg={3}>
              <div className="card" style={{ width: '100%' }}>
                <img src={drive1} alt="Subd Aerial" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card’s content.
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} lg={3}>
              <div className="card" style={{ width: '100%' }}>
                <img src={drive1} alt="Subd Aerial" className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card’s content.
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