import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ikea from '../images/ikea-logo-color.svg';
import google from '../images/google-logo-color.svg';
import bcc from '../images/bcc-logo-color.svg';
import kfc from '../images/kfc-logo-color.svg';
import fridays from '../images/friday-logo-color.svg';
import moo from '../images/moo-logo-color.svg';
import hrispy from '../images/kk-logo-color.svg';
import hardees from '../images/hardees-logo-color.svg';
import bajaj from '../images/bajaj-allianz-logo-color.svg';
import dominos from '../images/domin-logo-color.svg';
import supershe from '../images/supershe-logo-color.svg';
import wimpy from '../images/wimpy-logo-color.svg';
import empire from '../images/empirehotels-logo-color.svg';
import jobGet from '../images/jobget-lgo-color.svg';
import asianBank from '../images/asian-bank.svg';

function Partners(){
    return(
        <>
            <div className="partners-panel section-padding">
                <Container>
                    <Row>
                        <Col>
                            <div className="leadtxt">
                                <h3>Our Efforts Have Transformed How You
                                <br></br>Experience These Global Leaders</h3>
                            </div>
                            <ul className="partner-logos">
                                <li className="partner-logo">
                                    <img src={ikea} alt="IKEA" />
                                </li>
                                <li className="partner-logo">
                                    <img src={google} alt="Google" />
                                </li>
                                <li className="partner-logo">
                                    <img src={bcc} alt="BCC" />
                                </li>
                                <li className="partner-logo">
                                    <img src={kfc} alt="KFC" />
                                </li>
                                <li className="partner-logo">
                                    <img src={fridays} alt="Fridays" />
                                </li>
                                <li className="partner-logo">
                                    <img src={moo} alt="Moo" />
                                </li>
                                <li className="partner-logo">
                                    <img src={hrispy} alt="Hrispy" />
                                </li>
                                <li className="partner-logo">
                                    <img src={hardees} alt="Hardees" />
                                </li>
                                <li className="partner-logo">
                                    <img src={bajaj} alt="Bajaj" />
                                </li>
                                <li className="partner-logo">
                                    <img src={dominos} alt="Dominos" />
                                </li>
                                <li className="partner-logo">
                                    <img src={supershe} alt="Super She" />
                                </li>
                                <li className="partner-logo">
                                    <img src={wimpy} alt="Wimpy" />
                                </li>
                                <li className="partner-logo">
                                    <img src={empire} alt="Empire" />
                                </li>
                                <li className="partner-logo">
                                    <img src={jobGet} alt="Job Get" />
                                </li>
                                <li className="partner-logo">
                                    <img src={asianBank} alt="Asian Bank" />
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