import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import logoWhite from "../images/IAW-logo-white.png";
import india from '../images/hq-india.svg';
import hqUk from '../images/hq-uk.svg';

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

            <div className="footer-section section-padding tect-white">
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="footer-col">
                                <img src={logoWhite} alt="IAW logo" className="footer-logo" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer;