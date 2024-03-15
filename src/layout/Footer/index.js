import React, { useState } from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AnalogClock from "analog-clock-react";

import logoWhite from "../../images/IAW-logo-white.png";
import india from '../../images/hq-india.svg';
import hqUk from '../../images/hq-uk.png';
import hqUs from '../../images/hq-us.svg';

import { faInstagram, faLinkedin, faSquareFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Footer(){

    const clockWidth = "100px";
    const clockHeight = "100px";
    const centerColor = "#000";
    const baseColor = "#0000000a";
    const secondColor = "#ff0000";
    const minuteColor = "#000";
    const hourColor = "#000";

    // India Time
    let options = {
        width: clockWidth,
        heigth: clockHeight,
        centerColor: centerColor,
        baseColor : baseColor,
        border: true,
        handColors: {
          second: secondColor,
          minute: minuteColor,
          hour: hourColor,
        },
    };

    // UK Time
    const ukTime = new Date().toLocaleString("en-US", {
        timeZone: "Europe/London",
    });
    const ukDate = new Date(ukTime);
    const [ukHours, setukHours] = useState(ukDate.getHours());
    const [ukMin, setukMin] = useState(ukDate.getMinutes());
    const [ukSec, setukSec] = useState(ukDate.getSeconds());
    
    setInterval(() => {
        const ukTime = new Date().toLocaleString("en-US", {
          timeZone: "Europe/London",
        });
        const ukDate = new Date(ukTime);
        setukHours(ukDate.getHours());
        setukMin(ukDate.getMinutes());
        setukSec(ukDate.getSeconds());
    }, 1000);
    
    let ukOptions = {
        width: clockWidth,
        heigth: clockHeight,
        centerColor: centerColor,
        baseColor : baseColor,
        border: true,
        useCustomTime: true,
        handColors: {
          second: secondColor,
          minute: minuteColor,
          hour: hourColor,
        },
        seconds: ukSec,
        minutes: ukMin,
        hours: ukHours,
    };

    // US Time
    const usTime = new Date().toLocaleString("en-US", {
        timeZone: "America/New_York",
    });
    const usDate = new Date(usTime);
    const [usHours, setusHours] = useState(usDate.getHours());
    const [usMin, setusMin] = useState(usDate.getMinutes());
    const [usSec, setusSec] = useState(usDate.getSeconds());
    
    setInterval(() => {
        const usTime = new Date().toLocaleString("en-US", {
          timeZone: "America/New_York",
        });
        const usDate = new Date(usTime);
        setusHours(usDate.getHours());
        setusMin(usDate.getMinutes());
        setusSec(usDate.getSeconds());
    }, 1000);
    
    let usOptions = {
        width: clockWidth,
        heigth: clockHeight,
        centerColor: centerColor,
        baseColor : baseColor,
        border: true,
        useCustomTime: true,
        handColors: {
          second: secondColor,
          minute: minuteColor,
          hour: hourColor,
        },
        seconds: usSec,
        minutes: usMin,
        hours: usHours,
    };

    return(
        <>
            <div className="footer-top section-padding text-white">
                <Container>
                    <Row className="location-wrapper-footer">
                        <Col md={4}>
                            <div className="location-div">
                                <img src={india} alt="India" className="location-image" />
                                <div className="location-heading">HQ India</div>
                                <p className="location-text">SCO 30, First Floor, <br/>Near Devaji Plaza, VIP Road, <br/>Zirakpur, PB (India)</p>
                                <div className="footer-clock">
                                    <AnalogClock {...options} />
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="location-div">
                                <img src={hqUk} alt="United Kingdom" className="location-image" />
                                <div className="location-heading">United Kingdom</div>
                                <p className="location-text">Sheffield City Centre, <br/>Sheffield, S1 1AA, <br/>United Kingdom</p>
                                <div className="footer-clock">
                                    <AnalogClock {...ukOptions} />
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="location-div">
                                <img src={hqUs} alt="United States" className="location-image" />
                                <div className="location-heading">United States</div>
                                <p className="location-text">Suite #304, 11200 Manchaca, <br/>Austin, Texas, <br/>United States, 78748</p>
                                <div className="footer-clock">
                                    <AnalogClock {...usOptions} />
                                </div>
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
                                <a href="/"><img src={logoWhite} alt="IAW logo" className="footer-logo" /></a>
                                <p className="footer-about">IosAndWeb Technologies believes in achieving goals and client satisfaction. We deliver inspiring & eye-catching websites and conduct profitable marketing campaigns that attract the audience and boost the client's business. We provide Support & Maintenance even after the completion of the project.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={2}>
                            <h5 className="footer-col-head">About</h5>
                            <ul className="footer-col-list">
                                <li><a href="/about-us">About us</a></li>
                                <li><a href="/iaw-team">IAW Team</a></li>
                                <li><a href="/careers">Career</a></li>
                                <li><a href="/how-we-work">How we work</a></li>
                                <li><a href="/portfolio">Portfolio</a></li>
                            </ul>
                        </Col>
                        <Col md={6} lg={3}>
                            <h5 className="footer-col-head">Services</h5>
                            <ul className="footer-col-list">
                                <li><a href="/custom-software-development-company">Software Development</a></li>
                                <li><a href="/web-development-services">Web Development</a></li>
                                <li><a href="/mobile-app-development-services">Mobile App Development</a></li>
                                <li><a href="https://www.blockchain77.com/services/" target="_blank" rel="noreferrer">Blockchain Development</a></li>
                                <li><a href="/web-designing-services">Web / Graphic Design</a></li>
                                <li><a href="/digital-marketing-services">Digital Marketing</a></li>
                            </ul>
                        </Col>
                        <Col md={6} lg={3}>
                            <h5 className="footer-col-head">Resources</h5>
                            <ul className="footer-col-list">
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/contact-us">Contact</a></li>
                                <li><a href="/privacy">Privacy Policy</a></li>
                                <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
                                <li><a href="/cancellation-policy">Cancellation Policy</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="footer-bottom text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <p className="copyright-text">&copy; {(new Date().getFullYear())} All Rights Reserved | <a href="/">IosAndWeb Technologies</a>.</p>
                        </Col>
                        <Col md={6} className="footer-social-col">
                            <ul className="social-links">
                                <li><a href="https://www.facebook.com/iosandwebtechnologies/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                                <li><a href="https://twitter.com/Iosandwebtech" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="https://www.instagram.com/iosandwebtechnologies/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="https://www.linkedin.com/company/iosandweb-technologies" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li><a href="https://api.whatsapp.com/send/?phone=919915841204&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer;