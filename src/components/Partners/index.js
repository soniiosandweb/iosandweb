import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";

import ikea from '../../images/partners/ikea-logo-color.svg';
import google from '../../images/partners/google-logo-color.svg';
import bcc from '../../images/partners/bcc-logo-color.svg';
import kfc from '../../images/partners/kfc-logo-color.svg';
import fridays from '../../images/partners/friday-logo-color.svg';
import moo from '../../images/partners/moo-logo-color.svg';
import hrispy from '../../images/partners/kk-logo-color.svg';
import hardees from '../../images/partners/hardees-logo-color.svg';
import bajaj from '../../images/partners/bajaj-allianz-logo-color.svg';
import dominos from '../../images/partners/domin-logo-color.svg';
import supershe from '../../images/partners/supershe-logo-color.svg';
import wimpy from '../../images/partners/wimpy-logo-color.svg';
import empire from '../../images/partners/empirehotels-logo-color.svg';
import jobGet from '../../images/partners/jobget-lgo-color.svg';
import asianBank from '../../images/partners/asian-bank.svg';

import onmen from '../../images/partners/ONMEN.png';
import gopuff from '../../images/partners/Gopuff.png';
import seamless from '../../images/partners/seamless.png';
import doorDash from '../../images/partners/DoorDash.png';
import uber from '../../images/partners/uber.png';
import srgn from '../../images/partners/srgn.png';
import lowes from '../../images/partners/Lowes.png';
import aesthetic from '../../images/partners/aesthetic.png';
import grubhub from '../../images/partners/Grubhub.png';
import chownow from '../../images/partners/chownow.png';
import vertical from '../../images/partners/vertical.png';
import Instacart from '../../images/partners/Instacart.png';
import mygermany from '../../images/partners/mygermany.png';

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
                                {/* <li className="partner-logo">
                                    <img src={srgn} alt="srgn" />
                                </li>
                                <li className="partner-logo">
                                    <img src={lowes} alt="lowes" />
                                </li>
                                <li className="partner-logo">
                                    <img src={aesthetic} alt="aesthetic" />
                                </li>
                                <li className="partner-logo">
                                    <img src={grubhub} alt="grubhub" />
                                </li>
                                <li className="partner-logo">
                                    <img src={chownow} alt="chownow" />
                                </li>
                                <li className="partner-logo">
                                    <img src={vertical} alt="vertical" />
                                </li>
                                <li className="partner-logo">
                                    <img src={Instacart} alt="Instacart" />
                                </li>
                                <li className="partner-logo">
                                    <img src={mygermany} alt="mygermany" />
                                </li>
                                <li className="partner-logo">
                                    <img src={jobGet} alt="Job Get" />
                                </li>
                                <li className="partner-logo">
                                    <img src={asianBank} alt="Asian Bank" />
                                </li> */}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Partners