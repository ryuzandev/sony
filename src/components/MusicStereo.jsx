import React, { useState } from "react";
import { Carousel, Button, Row, Col, Container } from "react-bootstrap";
import "../componentsCss/Refridgerater.css";

// Import modals
import BookNowForm from "./AssestComponents/BookNowForm";
import TroubleshootModal from "./AssestComponents/TroubleshootModal";
import EnquiryModuleCommon from "./EnquiryModuleCommon";

// Image sources
import rone from "../componentsSrcAssets/speakerone.jpg";
import rtwo from "../componentsSrcAssets/speakertwo.jpg";
import rthree from "../componentsSrcAssets/speakerthree.jpg";
import rfour from "../componentsSrcAssets/speakerfour.jpg";
import rfive from "../componentsSrcAssets/speakerfive.jpg";
import rsix from "../componentsSrcAssets/speakersix.jpg";

function MusicStereo() {
  // States to handle modal visibility
  const [showBookNowModal, setShowBookNowModal] = useState(false);
  const [showTroubleshootModal, setShowTroubleshootModal] = useState(false);

  // Functions to show modals
  const handleBookNowClick = () => setShowBookNowModal(true);
  const handleTroubleshootClick = () => setShowTroubleshootModal(true);

  // Functions to hide modals
  const closeBookNowModal = () => setShowBookNowModal(false);
  const closeTroubleshootModal = () => setShowTroubleshootModal(false);

  return (
    <>
      <div className="fridge-container">
        {/* Carousel */}
        <Carousel>
          <Carousel.Item>
            <div className="fridge-carousel-item-content">
              <img
                src={rone}
                alt="Refrigerator Repair"
                className="fridge-carousel-img"
              />
              <div className="fridge-carousel-caption">
                <h3>Stereo Repair</h3>
                <div className="fridge-carousel-btn-container">
                  <Button
                    variant="primary"
                    className="fridge-carousel-btn"
                    onClick={handleBookNowClick}
                  >
                    Complaint-Specimen
                  </Button>
                  {/* <Button variant="secondary" className="fridge-carousel-btn" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="fridge-carousel-item-content">
              <img
                src={rtwo}
                alt="Refrigerator Installation"
                className="fridge-carousel-img"
              />
              <div className="fridge-carousel-caption">
                <h3>Stereo Installation</h3>
                <div className="fridge-carousel-btn-container">
                  <Button
                    variant="primary"
                    className="fridge-carousel-btn"
                    onClick={handleBookNowClick}
                  >
                    Complaint-Specimen
                  </Button>
                  {/* <Button variant="secondary" className="fridge-carousel-btn" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="fridge-carousel-item-content">
              <img
                src={rthree}
                alt="Refrigerator Maintenance"
                className="fridge-carousel-img"
              />
              <div className="fridge-carousel-caption">
                <h3>Stereo Maintenance</h3>
                <div className="fridge-carousel-btn-container">
                  <Button
                    variant="primary"
                    className="fridge-carousel-btn"
                    onClick={handleBookNowClick}
                  >
                    Complaint-Specimen
                  </Button>
                  {/* <Button variant="secondary" className="fridge-carousel-btn" onClick={handleTroubleshootClick}>Troubleshoot</Button> */}
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        {/* Grid System */}
        <Container className="fridge-grid-container">
          <Row className="fridge-grid-row">
            <Col md={8} className="fridge-grid-img-container">
              <img
                src={rfour}
                alt="Refrigerator Repair"
                className="fridge-grid-img"
              />
            </Col>
            <Col md={4} className="fridge-grid-description">
              <h4>Stereo Repair</h4>
              <p>
              "Don’t let the beat drop—just the bass. We fix your stereo, not your vibe. 🎧🔧 #StereoRepair #SoundRevived"
              </p>
              <Button variant="outline-dark" className="fridge-learn-more-btn">
                Learn More
              </Button>
            </Col>
          </Row>

          <Row className="fridge-grid-row fridge-reverse">
            <Col md={8} className="fridge-grid-img-container">
              <img
                src={rfive}
                alt="Refrigerator Installation"
                className="fridge-grid-img"
              />
            </Col>
            <Col md={4} className="fridge-grid-description">
              <h4>Stereo Installation</h4>
              <p>
              "Plug in. Tune up. Turn it loud. We install the sound that moves you. 🔊✨ #StereoInstallation #SoundUpgrade"
              </p>
              <Button variant="outline-dark" className="fridge-learn-more-btn">
                Learn More
              </Button>
            </Col>
          </Row>

          <Row className="fridge-grid-row">
            <Col md={8} className="fridge-grid-img-container">
              <img
                src={rsix}
                alt="Refrigerator Maintenance"
                className="fridge-grid-img"
              />
            </Col>
            <Col md={4} className="fridge-grid-description">
              <h4>Stereo Maintenance</h4>
              <p>
              "Keep the beat crystal clear. Regular care, flawless sound. 🔧🎶 #StereoMaintenance #SoundMatters"
              </p>
              <Button variant="outline-dark" className="fridge-learn-more-btn">
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>

        {/* Modals for Book Now and Troubleshoot */}
        {showBookNowModal && <BookNowForm onClose={closeBookNowModal} />}
        {showTroubleshootModal && (
          <TroubleshootModal onClose={closeTroubleshootModal} />
        )}
      </div>
      <EnquiryModuleCommon />
    </>
  );
}

export default MusicStereo;
