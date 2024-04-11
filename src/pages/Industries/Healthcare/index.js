import React from "react";
import './style.css';
import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import SEO from "../../../components/SEO";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCircleDot } from "@fortawesome/free-solid-svg-icons";

import healthcareBanner from '../../../images/industries/healthcare/healthcare-banner.webp';

// reasons to choose images
import healthcareSoftware from '../../../images/industries/healthcare/healthcare-software.png';
import LIMS from '../../../images/industries/healthcare/LIMS.png';
import mHealthApp from '../../../images/industries/healthcare/mhealth-app.png';
import electronicHealth from '../../../images/industries/healthcare/electronic-records.png';
import telemedicineApp from '../../../images/industries/healthcare/telemedicine-app.png';
import pharmacySystem from '../../../images/industries/healthcare/pharmacy-system.png';
import hippaCompliant from '../../../images/industries/healthcare/hippa-compliant.png';
import medicalDevice from '../../../images/industries/healthcare/medical-device.png';

function Healthcare(){
    return(
        <>
            <SEO
                title="Healthcare Software Development - IosAndWeb Technologies"
            />

            {/* Banner section */}
            <div className="industries-banner banner-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="heading-wrapper industries-header text-center">
                                <h1 className="text-black"><span className="text-highlight">Healthcare</span> Software Development Services</h1>
                                <div className="heading5">Delivering world-class custom healthcare software development services to enable best medical care</div>

                                <div className="btn-section mb-5">
                                    <a href="/contact-us" className="btn btn-white-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                                </div>
                                
                            </div>
                            <div className="industries-banner-image">
                                <img className="responsive-img" src={healthcareBanner} alt="Healthcare" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Reasons to choose section */}
            <div className="reasons-to-choose industries-reasons-tab section-padding no-bottom-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 max-width-70">Empower Digital Care with Our Innovative Healthcare Software Development Services</h2>
                            <div className="heading5 max-width-70">From optimizing the present administrative process to improving efficiency and lowering operations costs, our healthcare software development services enable innovative disruptions for preventive, predictive, and protective healthcare. 
                            <br />
                            We make your software application the source of the healthcare revolution.</div>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><FontAwesomeIcon icon={faCircleDot} /> Custom Healthcare Software Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><FontAwesomeIcon icon={faCircleDot} /> Laboratory Information Management System (LIMS)</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><FontAwesomeIcon icon={faCircleDot} /> Custom mHealth App Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faCircleDot} /> Electronic Health Record Software</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><FontAwesomeIcon icon={faCircleDot} /> Telemedicine App Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth"><FontAwesomeIcon icon={faCircleDot} /> Pharmacy Management System</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="seventh"><FontAwesomeIcon icon={faCircleDot} /> HIPAA-Compliant Software</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="eighth"><FontAwesomeIcon icon={faCircleDot} /> Medical Device Software Development</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <img src={healthcareSoftware} alt="Healthcare Software" className="reasons-content-icon" />
                                            <h3 className="heading3">Custom Healthcare Software Development</h3>
                                            <p className="paragraph">As a leader in healthcare app development services, we create engaging patient experiences through our custom healthcare solutions. Our team of skilled medical app developers has hands-on experience in building complex healthcare software solutions. Our intuitive medical software development services aim to improve patient care for better medical outcomes.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <img src={LIMS} alt="LIMS" className="reasons-content-icon" />
                                            <h3 className="heading3">Laboratory Information Management System (LIMS)</h3>
                                            <p className="paragraph">As a part of our healthcare solution development services, we create customized healthcare application and software solutions for information management depending on the lab size and their specialties. To monitor laboratory storage and inventory, data integrity, security, and protocol executions, we, as a top-notch healthcare app development company, develop scalable and adaptable LIMS solutions.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <img src={mHealthApp} alt="Custom mHealth App" className="reasons-content-icon" />
                                            <h3 className="heading3">Custom mHealth App Development</h3>
                                            <p className="paragraph">Being an illustrious healthcare app development company, we create mHealth applications that are HL7, HIPAA, and FDA-compliant for remote health monitoring. Our mHealth apps allow healthcare organizations to deliver better care by streamlining workflow and ensuring smoother management of patient health records.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <img src={electronicHealth} alt="Health Record Software" className="reasons-content-icon" />
                                            <h3 className="heading3">Electronic Health Record Software</h3>
                                            <p className="paragraph">Being the best medical app development company, our experts are adept at building robust electronic health record (EHR) software systems with features that enable healthcare professionals to quickly access patient history and other medical data and stay connected to them via patient portals.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <img src={telemedicineApp} alt="Telemedicine App Development" className="reasons-content-icon" />
                                            <h3 className="heading3">Telemedicine App Development</h3>
                                            <p className="paragraph">As a top-notch telehealth app development company, we create end-to-end telemedicine software that enables contactless care and allows patients to communicate with doctors through video calling or instant messaging. Ensure quick and convenient access to patient care at reduced costs with our highly intuitive telemedicine app development services.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <div className="reasons-tab-content">
                                            <img src={pharmacySystem} alt="Pharmacy Management System" className="reasons-content-icon" />
                                            <h3 className="heading3">Pharmacy Management System</h3>
                                            <p className="paragraph">We, as an illustrious healthcare application development company, add the latest functionalities to your existing pharmacy management software or create one from scratch to support real-time communication, fully integrated payment processing, and workflow automation. This enables the management of multiple stores in your healthcare center with an all-in-one pharmacy management software.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seventh">
                                        <div className="reasons-tab-content">
                                            <img src={hippaCompliant} alt="HIPAA-Compliant Software" className="reasons-content-icon" />
                                            <h3 className="heading3">HIPAA-Compliant Software</h3>
                                            <p className="paragraph">We are one of the best healthcare mobile app development companies developing HIPAA-compliant healthcare mobility solutions. Our healthcare apps secure the confidentiality of information saved and shared within the ecosystem of patients and other associated stakeholders like hospitals and doctors.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="eighth">
                                        <div className="reasons-tab-content">
                                            <img src={medicalDevice} alt="Health Record Software" className="reasons-content-icon" />
                                            <h3 className="heading3">Medical Device Software Development</h3>
                                            <p className="paragraph">Our expert team delivers tailor-made software solutions for medical devices, enhancing efficiency, safety, and patient care, while ensuring full compliance with industry standards like FDA and HIPAA. With a focus on innovation and user experience, we transform your medical devices into advanced tools for healthcare excellence.</p>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Healthcare