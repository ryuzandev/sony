import React, { useState } from 'react';
import { Carousel, Button, Row, Col, Container } from 'react-bootstrap';
import "../componentsCss/DishWasher.css";
import EnquiryModuleCommon from './EnquiryModuleCommon';

// Fixed imports for modal functionality
import BookNowForm from './AssestComponents/BookNowForm';
import TroubleshootModal from './AssestComponents/TroubleshootModal';

// Image sources
import done from "../componentsSrcAssets/psone.jpg";
import dtwo from "../componentsSrcAssets/psseven.jpg";
import dthree from "../componentsSrcAssets/psthree.jpg";
import dfour from "../componentsSrcAssets/psfour.jpg";
import dfive from "../componentsSrcAssets/psfive.jpg";
import dsix from "../componentsSrcAssets/pssix.jpg";

function PlayStation() {
  // States to handle modal visibility
  const [showBookNowModal, setShowBookNowModal] = useState(false);
  const [showTroubleshootModal, setShowTroubleshootModal] = useState(false);

  // Functions to handle modal visibility
  const handleBookNowClick = () => setShowBookNowModal(true);
  const handleTroubleshootClick = () => setShowTroubleshootModal(true);
  const closeBookNowModal = () => setShowBookNowModal(false);
  const closeTroubleshootModal = () => setShowTroubleshootModal(false);

  return (
    <>
    <div className="dw-component-container">
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <div className="dw-carousel-item-content">
            <img src={done} alt="Dishwasher Repair" className="dw-carousel-img" />
            <div className="dw-carousel-caption">
              <h3>Play station Repair</h3>
              <Button variant="primary" className="dw-carousel-btn primary" onClick={handleBookNowClick}>Complaint-Specimen</Button>
              {/* <Button variant="secondary" className="dw-carousel-btn secondary" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="dw-carousel-item-content">
            <img src={dtwo} alt="Dishwasher Installation" className="dw-carousel-img" />
            <div className="dw-carousel-caption">
              <h3>Play Station Installation</h3>
              <Button variant="primary" className="dw-carousel-btn primary" onClick={handleBookNowClick}>Complaint-Specimen</Button>
              {/* <Button variant="secondary" className="dw-carousel-btn secondary" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="dw-carousel-item-content">
            <img src={dthree} alt="Dishwasher Maintenance" className="dw-carousel-img" />
            <div className="dw-carousel-caption">
              <h3>Play Station Maintenance</h3>
              <Button variant="primary" className="dw-carousel-btn primary" onClick={handleBookNowClick}>Complaint-Specimen</Button>
              {/* <Button variant="secondary" className="dw-carousel-btn secondary" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Grid System with Image and Description */}
      <Container className="dw-grid-container">
        <Row className="dw-grid-item">
          <Col md={5} className="dw-grid-img-container">
            <img src={dfive} alt="Dishwasher Repair" className="dw-grid-img" />
          </Col>
          <Col md={7} className="dw-grid-description">
            <h4>Playstation Repair Services</h4>
            <p>
            "Game over? Not on our watch. We bring your PlayStation back to life! 🎮🛠️ #PlayStationRepair #BackInTheGame"
            </p>
            <Button variant="outline-info" className="dw-learn-more-btn">Learn More</Button>
          </Col>
        </Row>

        <Row className="dw-grid-item dw-reverse">
          <Col md={5} className="dw-grid-img-container">
            <img src={dfour} alt="Dishwasher Installation" className="dw-grid-img" />
          </Col>
          <Col md={7} className="dw-grid-description">
            <h4>Playstation Installation Services</h4>
            <p>
            "Set up. Power on. Game strong. We handle the setup so you can handle the leaderboard. 🎮⚡ #PlayStationInstallation #GameReady"
            </p>
            <Button variant="outline-info" className="dw-learn-more-btn">Learn More</Button>
          </Col>
        </Row>

        <Row className="dw-grid-item">
          <Col md={5} className="dw-grid-img-container">
            <img src={dsix} alt="Dishwasher Maintenance" className="dw-grid-img" />
          </Col>
          <Col md={7} className="dw-grid-description">
            <h4>Playstation Maintenance</h4>
            <p>
            "Keep your console cool, clean, and battle-ready. Maintenance today, victory tomorrow. 🎮🧰 #PlayStationMaintenance #GameOnAlways"
            </p>
            <Button variant="outline-info" className="dw-learn-more-btn">Learn More</Button>
          </Col>
        </Row>
      </Container>

      {/* Modals for Book Now and Troubleshoot */}
      {showBookNowModal && <BookNowForm onClose={closeBookNowModal} />}
      {showTroubleshootModal && <TroubleshootModal onClose={closeTroubleshootModal} />}
    </div>
    <EnquiryModuleCommon/>
    </>
  );
}

export default PlayStation;
