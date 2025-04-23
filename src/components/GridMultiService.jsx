import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../componentsCss/GridMultiService.css"; // Import the custom CSS file
import { Link } from "react-router-dom";

// image sources
import dfour from "../componentsSrcAssets/psfour.jpg";
import tvfour from "../componentsSrcAssets/televisionseven.jpg";
import rfive from "../componentsSrcAssets/speakerfive.jpg";

function GridMultiService() {
  const [isPlayingVideo1, setIsPlayingVideo1] = useState(false); // State to control video 1 play status
  const [isPlayingVideo2, setIsPlayingVideo2] = useState(false); // State to control video 2 play status
  const [isHoveredVideo1, setIsHoveredVideo1] = useState(false); // Hover state for video 1
  const [isHoveredVideo2, setIsHoveredVideo2] = useState(false); // Hover state for video 2

  // Handle mouse enter for Video 1
  const handleMouseEnterVideo1 = () => {
    setIsHoveredVideo1(true);
    setTimeout(() => {
      if (isHoveredVideo1) {
        setIsPlayingVideo1(true);
      }
    }, 5000); // Wait 5 seconds before playing the video
  };

  // Handle mouse leave for Video 1
  const handleMouseLeaveVideo1 = () => {
    setIsHoveredVideo1(false);
    setIsPlayingVideo1(false); // Stop playing video when mouse leaves
  };

  // Handle mouse enter for Video 2
  const handleMouseEnterVideo2 = () => {
    setIsHoveredVideo2(true);
    setTimeout(() => {
      if (isHoveredVideo2) {
        setIsPlayingVideo2(true);
      }
    }, 5000); // Wait 5 seconds before playing the video
  };

  // Handle mouse leave for Video 2
  const handleMouseLeaveVideo2 = () => {
    setIsHoveredVideo2(false);
    setIsPlayingVideo2(false); // Stop playing video when mouse leaves
  };

  return (
    <Container fluid className="component-background">
      {/* Banner for Services */}
      <Row className="banner-row">
        <Col>
          <div className="banner-text">
            <h2>Our Services</h2>
            <p>
              Explore our expert repair services with top-notch quality and
              quick turnaround.
            </p>
          </div>
        </Col>
      </Row>

      {/* Row for First YouTube Video and Data */}
      <Row className="align-items-center">
        {/* First YouTube Video (Left) */}
        <Col xs={12} md={6} lg={6} xl={6}>
          <div
            className={`video-container ${isPlayingVideo1 ? "expanded" : ""}`}
            onMouseEnter={handleMouseEnterVideo1}
            onMouseLeave={handleMouseLeaveVideo1}
          >
            <iframe
              width="1307"
              height="735"
              src="https://www.youtube.com/embed/Hme5BhT52_U"
              title="Introducing the PS4 Pro"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            {isPlayingVideo1 && <div className="overlay"></div>}{" "}
            {/* Show overlay when video is playing */}
          </div>
        </Col>

        {/* Data (Right) */}
        <Col xs={12} md={6} lg={6} xl={6}>
          <div className="service-container">
            <div className="service-card">
              <img
                src={dfour} // Placeholder image for Washing Machine
                alt="Washing Machine"
                className="service-image"
              />
              <h5>Playstation</h5>
              <p>
              "Level up your gaming experience. Where every play feels like a win. #PlayStation #GameOn"
              </p>
              <Link to="/washing">
                <button className="service-button">Find More</button>
              </Link>
            </div>
            {/* <div className="service-card">
              <img
                src="https://c1.wallpaperflare.com/preview/258/187/760/wall-fan-air-conditioning-box.jpg" // Placeholder image for AC
                alt="Air Conditioner"
                className="service-image"
              />
              <h5>AC Repair</h5>
              <p>
                Our technicians are skilled in repairing air conditioners of all
                makes and models for better cooling performance.
              </p>
              <Link to="/aircondition">
                <button className="service-button">Find More</button>
              </Link>
            </div> */}
          </div>
        </Col>
      </Row>

      {/* Row for Second YouTube Video and Data */}
      <Row className="align-items-center">
        {/* Data (Left) */}
        <Col xs={12} md={6} lg={6} xl={6}>
          <div className="service-container">
            <div className="service-card">
              <img
                src={tvfour} // Placeholder image for TV
                alt="TV"
                className="service-image"
              />
              <h5>TV Repair</h5>
              <p>
                We offer professional repair services for your TV, restoring
                your viewing experience to its fullest.
              </p>
              <Link to="/tv">
                <button className="service-button">Find More</button>
              </Link>
            </div>
            {/* <div className="service-card">
              <img
                src="https://imgs.search.brave.com/an9uExyqHIEqWxKoPWb5walA8KC3_pw5QY5RICtXLeM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/NDQ2NTE3OS9waG90/by93b21hbi1hdC1o/b21lLWhlYXRpbmct/Zm9vZC1hdC1taWNy/b3dhdmUtb3Zlbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/bEdyZFFCWnlwTUlG/UW1TSW4xcVp1Zlpk/N01SazhRSjc1RVJv/VHJWRHU2Zz0" // Placeholder image for Microwave Oven
                alt="Microwave Oven"
                className="service-image"
              />
              <h5>Microwave Oven</h5>
              <p>
                Quick and reliable repair services for microwave ovens, ensuring
                optimal functionality.
              </p>
              <Link to="/microwave">
                <button className="service-button">Find More</button>
              </Link>
            </div> */}
          </div>
        </Col>

        {/* Second YouTube Video (Right) */}
        <Col xs={12} md={6} lg={6} xl={6}>
          <div
            className={`video-container ${isPlayingVideo2 ? "expanded" : ""}`}
            onMouseEnter={handleMouseEnterVideo2}
            onMouseLeave={handleMouseLeaveVideo2}
          >
            <iframe
              width="1307"
              height="735"
              src="https://www.youtube.com/embed/Eplrmw9RY_k"
              title="Sony BRAVIA 4K TVC - Experience Perfection"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            {isPlayingVideo2 && <div className="overlay"></div>}{" "}
            {/* Show overlay when video is playing */}
          </div>
        </Col>
      </Row>

      {/* hahd extendion  */}
      {/* Row for First YouTube Video and Data */}
      <Row className="align-items-center">
        {/* First YouTube Video (Left) */}
        <Col xs={12} md={6} lg={6} xl={6}>
          <div
            className={`video-container ${isPlayingVideo1 ? "expanded" : ""}`}
            onMouseEnter={handleMouseEnterVideo1}
            onMouseLeave={handleMouseLeaveVideo1}
          >
            <iframe
              width="1307"
              height="735"
              src="https://www.youtube.com/embed/i5pVHiKUMpo"
              title="Virtual Surround Sound Demo for the HT-A5000 and HT-A7000 Soundbar | Sony"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            {isPlayingVideo1 && <div className="overlay"></div>}{" "}
            {/* Show overlay when video is playing */}
          </div>
        </Col>

        {/* Data (Right) */}
        <Col xs={12} md={6} lg={6} xl={6}>
          <div className="service-container">
            <div className="service-card">
              <img
                src={rfive} // Placeholder image for Washing Machine
                alt="Washing Machine"
                className="service-image"
              />
              <h5>Music Stereo</h5>
              <p>
              "Feel every beat. Hear the difference. 🎶 #SonyMusicStereo #PureSound"
              </p>
              <Link to="/DishWasher">
                <button className="service-button">Find More</button>
              </Link>
            </div>
            {/* <div className="service-card">
              <img
                src="https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg?auto=compress&cs=tinysrgb&w=600" // Placeholder image for AC
                alt="Air Conditioner"
                className="service-image"
              />
              <h5>Refrigerator</h5>
              <p>
                Our technicians are skilled in repairing air conditioners of all
                makes and models for better cooling performance.
              </p>
              <Link to="/Refridgerater">
                <button className="service-button">Find More</button>
              </Link>
            </div> */}
          </div>
        </Col>
      </Row>

      {/* hahd extension two */}
    </Container>
  );
}

export default GridMultiService;
