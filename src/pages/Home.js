import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import homeBanner from '../images/home-banner.webp';
import homeVideo from '../images/home-video.mp4';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import goodFirmLogo from '../images/good-firms-logo.png';
import appFutura from '../images/appfutura.png';
import itFirms from '../images/itfirm.png';
import topDevelopment from '../images/top-development.png';
import upWork from '../images/upwork.png';

// partners section
import Partners from "../components/Partners";

// services images
import aiml from '../images/service-ai-ml.svg';
import mobileApp from '../images/Mobile-app.svg';
import softwareDevelopment from '../images/Software-Development.svg';
import digitalTransformation from '../images/Digital-Transformation.svg';
import dataScience from '../images/Data-Science-Analytics.svg';
import cloudServices from '../images/Cloud-Services.svg';
import blockChain from '../images/Blockchain-Services.svg';
import ideationDesign from '../images/ideation-design.svg';

// industries images
import healthCare from '../images/healthcare-indus.svg';
import finance from '../images/finance-indus.svg';
import restaurant from '../images/restaurant-indus.svg';
import ecommerce from '../images/ecommerce-indus.svg';
import ev from '../images/ev-indus.svg';
import saas from '../images/saas-indus.svg';
import travel from '../images/travel-indus.svg';
import entertainment from '../images/entertainment-indus.svg';
import onDemand from '../images/on-demand-indus.svg';
import socialMedia from '../images/social-networking-indus.svg';
import logistics from '../images/logistics-indus.svg';
import edtech from '../images/education-indus.svg';

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
                        <Col md={6} lg={4} xl={2} className="award-col">
                            <div className="award-block">
                                <div className="award-logo">
                                    <img src={goodFirmLogo} alt="App development"/>
                                </div>
                                <div className="award-text">
                                    <span>App development company of the year</span>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} lg={4} xl={2} className="award-col">
                            <div className="award-block">
                                <div className="award-logo">
                                    <img src={appFutura} alt="App solution"/>
                                </div>
                                <div className="award-text">
                                    <span>Most promising mobile app solution provider</span>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} lg={4} xl={2} className="award-col">
                            <div className="award-block">
                                <div className="award-logo">
                                    <img src={itFirms} alt="India's Growth Champions"/>
                                </div>
                                <div className="award-text">
                                    <span>India's Growth Champions in IT</span>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} lg={4} xl={2} className="award-col">
                            <div className="award-block">
                                <div className="award-logo">
                                    <img src={upWork} alt="India's Growth Champions"/>
                                </div>
                                <div className="award-text">
                                    <span>Software development company of the year</span>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} lg={4} xl={2} className="award-col">
                            <div className="award-block">
                                <div className="award-logo">
                                    <img src={itFirms} alt="India's Growth Champions"/>
                                </div>
                                <div className="award-text">
                                    <span>India's Growth Champions in IT</span>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} lg={4} xl={2} className="award-col">
                            <div className="award-block">
                                <div className="award-logo">
                                    <img src={topDevelopment} alt="Tech Company Of The Year"/>
                                </div>
                                <div className="award-text">
                                    <span>Tech Company Of The Year</span>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            {/* Business partners*/}
            <Partners />

            {/* Services panel */}
            <div className="services-panel section-padding text-white">
                <Container>
                    <Row>
                        <Col>
                            <div className="leadtxt">
                                <h3>We Create New Solutions and Transform
                                    <br></br>Existing Ones with a Development Process That
                                    <br></br>Beats Industry-Best Timelines
                                </h3>
                            </div>
                            <div className="btn-section">
                                <a href="/services" className="btn btn-white-border">Our Services <FontAwesomeIcon icon={faChevronRight} /></a>
                            </div>

                            <div className="services-cards">
                                <div className="service-card">
                                    <a href="/services">
                                        <div className="service-icon">
                                            <img src={aiml} className="service-img" alt="AI ML" />
                                        </div>
                                        <p className="service-text">AI-ML</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services">
                                        <div className="service-icon">
                                            <img src={mobileApp} className="service-img" alt="Mobile App" />
                                        </div>
                                        <p className="service-text">Mobile App<br></br>Development</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services">
                                        <div className="service-icon">
                                            <img src={softwareDevelopment} className="service-img" alt="Software Development" />
                                        </div>
                                        <p className="service-text">Software<br></br>Development</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services">
                                        <div className="service-icon">
                                            <img src={digitalTransformation} className="service-img" alt="Software Development" />
                                        </div>
                                        <p className="service-text">Digital<br></br>Transformation</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services">
                                        <div className="service-icon">
                                            <img src={dataScience} className="service-img" alt="Software Development" />
                                        </div>
                                        <p className="service-text">Data Science<br></br>& Analytics</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services">
                                        <div className="service-icon">
                                            <img src={cloudServices} className="service-img" alt="Software Development" />
                                        </div>
                                        <p className="service-text">Cloud<br></br>Services</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services">
                                        <div className="service-icon">
                                            <img src={blockChain} className="service-img" alt="Software Development" />
                                        </div>
                                        <p className="service-text">Blockchain<br></br>Services</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services">
                                        <div className="service-icon">
                                            <img src={ideationDesign} className="service-img" alt="Software Development" />
                                        </div>
                                        <p className="service-text">Ideation and <br></br>Design Strategy</p>
                                    </a>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Industries panel */}
            <div className="industries-panel section-padding text-white">
                <Container>
                    <Row>
                        <Col>
                            <div className="leadtxt text-center">
                                <h3>A Unified Vision That Caters 
                                    <br></br>to Diverse Industry Demands
                                </h3>
                            </div>
                            <div className="grid_colm_panel">
                                <div className="grid_colm_item">
                                    <a href="/">
                                        <figure>
                                            <img src={healthCare} alt="Healthcare" />
                                        </figure>
                                        <div className="grid_colm_head">Healthcare</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a href="/">
                                        <figure>
                                            <img src={finance} alt="Finance" />
                                        </figure>
                                        <div className="grid_colm_head">Finance</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a href="/">
                                        <figure>
                                            <img src={restaurant} alt="Restaurant" />
                                        </figure>
                                        <div className="grid_colm_head">Restaurant</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a href="/">
                                        <figure>
                                            <img src={ecommerce} alt="eCommerce" />
                                        </figure>
                                        <div className="grid_colm_head">eCommerce</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a href="/">
                                        <figure>
                                            <img src={ev} alt="EV" />
                                        </figure>
                                        <div className="grid_colm_head">EV</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a href="/">
                                        <figure>
                                            <img src={saas} alt="SaaS" />
                                        </figure>
                                        <div className="grid_colm_head">SaaS</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a href="/">
                                        <figure>
                                            <img src={travel} alt="Travel" />
                                        </figure>
                                        <div className="grid_colm_head">Travel</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a href="/">
                                        <figure>
                                            <img src={entertainment} alt="Entertainment" />
                                        </figure>
                                        <div className="grid_colm_head">Entertainment</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item border-bottom-none">
                                    <a href="/">
                                        <figure>
                                            <img src={onDemand} alt="On-Demand" />
                                        </figure>
                                        <div className="grid_colm_head">On-Demand</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item border-bottom-none">
                                    <a href="/">
                                        <figure>
                                            <img src={socialMedia} alt="Social Media" />
                                        </figure>
                                        <div className="grid_colm_head">Social Media</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item border-bottom-none">
                                    <a href="/">
                                        <figure>
                                            <img src={logistics} alt="Logistics" />
                                        </figure>
                                        <div className="grid_colm_head">Logistics</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item border-bottom-none">
                                    <a href="/">
                                        <figure>
                                            <img src={edtech} alt="Edtech" />
                                        </figure>
                                        <div className="grid_colm_head">Edtech</div>
                                    </a>
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