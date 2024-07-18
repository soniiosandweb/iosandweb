import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";

import onmen from '../../images/partners/ONMEN.png';
import gopuff from '../../images/partners/Gopuff.webp';
import seamless from '../../images/partners/seamless.png';
import doorDash from '../../images/partners/DoorDash.png';
import uber from '../../images/partners/Uber-Eats-Logo.png';
import srgn from '../../images/partners/srgn.png';
import lowes from '../../images/partners/Lowes.png';
import aesthetic from '../../images/partners/aesthetic.png';
import grubhub from '../../images/partners/Grubhub.png';
import chownow from '../../images/partners/chownow.png';
import vertical from '../../images/partners/vertical.png';
import Instacart from '../../images/partners/Instacart.png';
import mygermany from '../../images/partners/mygermany.png';
import walgreeens from '../../images/partners/walgreeens-logo.png';

import ten from '../../images/partners/ten-white-2.png';

function Partners(){
    return(
        <>
            <div className="partners-panel section-padding">
                <Container>
                    <Row>
                        <Col>
                            <div className="leadtxt text-center">
                                <h3>Our Efforts Have Revolutionized <br/>Your Experience With These Global Leaders</h3>
                            </div>
                            <ul className="partner-logos">
                                <li className="partner-logo">
                                    <img src={onmen} alt="ONMEN" />
                                </li>
                                <li className="partner-logo">
                                    <img src={srgn} alt="srgn" />
                                </li>
                                <li className="partner-logo">
                                    <img src={aesthetic} alt="aesthetic" />
                                </li>
                                <li className="partner-logo">
                                    <img src={vertical} alt="vertical" />
                                </li>
                                <li className="partner-logo">
                                    <img src={mygermany} alt="mygermany" />
                                </li>
                                <li className="partner-logo">
                                    <img src={ten} alt="ten" />
                                </li>
                                <li className="partner-logo">
                                    <img src={lowes} alt="lowes" />
                                </li>
                                <li className="partner-logo">
                                    <img src={gopuff} alt="gopuff" />
                                </li>
                                <li className="partner-logo">
                                    <img src={grubhub} alt="grubhub" />
                                </li>
                                <li className="partner-logo">
                                    <img src={chownow} alt="chownow" />
                                </li>
                                <li className="partner-logo">
                                    <img src={doorDash} alt="doorDash" />
                                </li>
                                <li className="partner-logo">
                                    <img src={Instacart} alt="Instacart" />
                                </li>
                                <li className="partner-logo">
                                    <img src={seamless} alt="seamless" />
                                </li>
                                <li className="partner-logo">
                                    <img src={walgreeens} alt="walgreeens" />
                                </li>
                                <li className="partner-logo">
                                    <img src={uber} alt="uber" />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Partners