import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeBanner from '../images/home-banner.webp';
import homeVideo from '../images/home-video.mp4';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import goodFirmLogo from '../images/good-firms-logo.png';
import trustPilot from '../images/trustpilot.png';

function Home() {
    return (
        <>
            {/* Banner */}
            <div className="home-banner">
                <Container>
                    <Row>
                        <Col>
                            <div className="intro-content">
                                <h1 className="banner-heading">Custom Software Development Company</h1>
                                <p className="banner-text">We offer complete business software development solutions.<br></br>We combine this culture of innovation with our capabilities and industry expertise to go beyond the other traditional technology.</p>
                                <a href="/about" className="consult-expert-btn">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                            </div>
                            <video className="intro_video" poster={homeBanner} autoPlay={true} muted={true} loop={true}> 
                                <source src={homeVideo} type="video/mp4"></source> 
                            </video>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Award Panel */}

            <div className="award-panel text-white">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="award-block">
                                <div className="award-logo">
                                    <img src={goodFirmLogo} alt="App development"/>
                                </div>
                                <div className="award-text">
                                    <span>App development company of the year</span>
                                </div>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="award-block">
                                <div className="award-logo">
                                    <img src={trustPilot} alt="App solution"/>
                                </div>
                                <div className="award-text">
                                    <span>Most promising mobile app solution provider</span>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Home;