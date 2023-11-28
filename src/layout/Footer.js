import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logoWhite from "../images/IAW-logo-white.png";
import india from '../images/hq-india.svg';
import hqUk from '../images/hq-uk.svg';
import { faInstagram, faLinkedin, faSquareFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <>
            <div className="footer-top section-padding text-white">
                <Container>
                    <Row className="location-wrapper-footer">
                        <Col md={4}>
                            <div className="location-div">
                                <img src={india} alt="India" className="location-image" />
                                <div className="location-heading">HQ India</div>
                                <p className="location-text">SCO 30, First Floor, <br></br>Near Devaji Plaza, VIP Road, <br></br>Zirakpur, PB (India)</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="location-div">
                                <img src={hqUk} alt="United Kingdom" className="location-image" />
                                <div className="location-heading">United Kingdom</div>
                                <p className="location-text">Sheffield City Centre, <br></br>Sheffield, S1 1AA, <br></br>United Kingdom</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="location-div">
                                <img src={hqUk} alt="United Kingdom" className="location-image" />
                                <div className="location-heading">United Kingdom</div>
                                <p className="location-text">High St. Selly Oak, <br></br>Birmingham B29 7TJ, <br></br>United Kingdom</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="footer-section section-padding text-white">
                <Container>
                    <Row>
                        <Col md={6} lg={4}>
                            <div className="footer-col">
                                <img src={logoWhite} alt="IAW logo" className="footer-logo" />
                                <p className="footer-about">IosAndWeb Technologies believes in achieving goals and client satisfaction. We deliver inspiring & eye-catching websites and conduct profitable marketing campaigns that attract the audience and boost the client's business. We provide Support & Maintenance even after the completion of the project.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={2}>
                            <h5 className="footer-col-head">About</h5>
                            <ul className="footer-col-list">
                                <li><a href="/about">About us</a></li>
                                <li><a href="/">Team</a></li>
                                <li><a href="/">Career</a></li>
                                <li><a href="/portfolio">Portfolio</a></li>
                            </ul>
                        </Col>
                        <Col md={6} lg={3}>
                            <h5 className="footer-col-head">Services</h5>
                            <ul className="footer-col-list">
                                <li><a href="/services">Software Development</a></li>
                                <li><a href="/services">Web Development</a></li>
                                <li><a href="/services">Mobile App Development</a></li>
                                <li><a href="/services">Blockchain Development</a></li>
                                <li><a href="/services">Web / Graphic Design</a></li>
                                <li><a href="/services">Digital Marketing</a></li>
                            </ul>
                        </Col>
                        <Col md={6} lg={3}>
                            <h5 className="footer-col-head">Resources</h5>
                            <ul className="footer-col-list">
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms & Conditions</a></li>
                                <li><a href="/">Cancellation Policy</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="footer-bottom text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <p className="copyright-text">© 2023 All Rights Reserved | IosAndWeb Technologies.</p>
                        </Col>
                        <Col md={6} className="footer-social-col">
                            <ul className="social-links">
                                <li><a href="https://www.facebook.com/iosandwebtechnologies/"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                                <li><a href="https://twitter.com/Iosandwebtech"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="https://www.instagram.com/iosandwebtechnologies/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="https://www.linkedin.com/company/iosandweb-technologies"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li><a href="https://api.whatsapp.com/send/?phone=919915841204&text&type=phone_number&app_absent=0"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer;