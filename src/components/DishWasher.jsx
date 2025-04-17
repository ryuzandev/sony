import React, { useState } from 'react';
import { Carousel, Button, Row, Col, Container } from 'react-bootstrap';
import "../componentsCss/DishWasher.css";

// Fixed imports for modal functionality
import BookNowForm from './AssestComponents/BookNowForm';
import TroubleshootModal from './AssestComponents/TroubleshootModal';

// Image sources
import done from "../componentsSrcAssets/done.jpg";
import dtwo from "../componentsSrcAssets/dtwo.jpg";
import dthree from "../componentsSrcAssets/dthree.jpg";
import dfour from "../componentsSrcAssets/dfour.jpg";
import dfive from "../componentsSrcAssets/dfive.jpg";
import dsix from "../componentsSrcAssets/dsix.jpg";

function DishWasher() {
  // States to handle modal visibility
  const [showBookNowModal, setShowBookNowModal] = useState(false);
  const [showTroubleshootModal, setShowTroubleshootModal] = useState(false);

  // Functions to handle modal visibility
  const handleBookNowClick = () => setShowBookNowModal(true);
  const handleTroubleshootClick = () => setShowTroubleshootModal(true);
  const closeBookNowModal = () => setShowBookNowModal(false);
  const closeTroubleshootModal = () => setShowTroubleshootModal(false);

  return (
    <div className="dw-component-container">
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <div className="dw-carousel-item-content">
            <img src={done} alt="Dishwasher Repair" className="dw-carousel-img" />
            <div className="dw-carousel-caption">
              <h3>Dishwasher Repair</h3>
              <Button variant="primary" className="dw-carousel-btn primary" onClick={handleBookNowClick}>Book Now</Button>
              <Button variant="secondary" className="dw-carousel-btn secondary" onClick={handleTroubleshootClick}>Troubleshoot</Button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="dw-carousel-item-content">
            <img src={dtwo} alt="Dishwasher Installation" className="dw-carousel-img" />
            <div className="dw-carousel-caption">
              <h3>Dishwasher Installation</h3>
              <Button variant="primary" className="dw-carousel-btn primary" onClick={handleBookNowClick}>Book Now</Button>
              <Button variant="secondary" className="dw-carousel-btn secondary" onClick={handleTroubleshootClick}>Troubleshoot</Button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="dw-carousel-item-content">
            <img src={dthree} alt="Dishwasher Maintenance" className="dw-carousel-img" />
            <div className="dw-carousel-caption">
              <h3>Dishwasher Maintenance</h3>
              <Button variant="primary" className="dw-carousel-btn primary" onClick={handleBookNowClick}>Book Now</Button>
              <Button variant="secondary" className="dw-carousel-btn secondary" onClick={handleTroubleshootClick}>Troubleshoot</Button>
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
            <h4>Dishwasher Repair Services</h4>
            <p>
              Get your dishwasher running like new with our expert repair services, handling everything from drainage issues to electrical faults.
            </p>
            <Button variant="outline-info" className="dw-learn-more-btn">Learn More</Button>
          </Col>
        </Row>

        <Row className="dw-grid-item dw-reverse">
          <Col md={5} className="dw-grid-img-container">
            <img src={dfour} alt="Dishwasher Installation" className="dw-grid-img" />
          </Col>
          <Col md={7} className="dw-grid-description">
            <h4>Dishwasher Installation Services</h4>
            <p>
              Professional dishwasher installation for homes and offices, ensuring proper setup for efficient cleaning performance.
            </p>
            <Button variant="outline-info" className="dw-learn-more-btn">Learn More</Button>
          </Col>
        </Row>

        <Row className="dw-grid-item">
          <Col md={5} className="dw-grid-img-container">
            <img src={dsix} alt="Dishwasher Maintenance" className="dw-grid-img" />
          </Col>
          <Col md={7} className="dw-grid-description">
            <h4>Dishwasher Maintenance</h4>
            <p>
              Regular maintenance keeps your dishwasher working efficiently, reducing energy consumption and preventing breakdowns.
            </p>
            <Button variant="outline-info" className="dw-learn-more-btn">Learn More</Button>
          </Col>
        </Row>
      </Container>

      {/* Modals for Book Now and Troubleshoot */}
      {showBookNowModal && <BookNowForm onClose={closeBookNowModal} />}
      {showTroubleshootModal && <TroubleshootModal onClose={closeTroubleshootModal} />}
    </div>
  );
}

export default DishWasher;
