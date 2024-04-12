import React from "react";
import './style.css';
import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import SEO from "../../../components/SEO";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCircleDot, faCheckDouble, faCircle } from "@fortawesome/free-solid-svg-icons";

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

// capabilities section images
import healthcareApp from '../../../images/industries/healthcare/healthcare-app-developer.webp';
import flexibleModels from '../../../images/industries/healthcare/flexible-models.webp';
import agileProcesses from '../../../images/industries/healthcare/agile-processes.webp';
import innovativeSolutions from '../../../images/industries/healthcare/innovative-solutions.webp';
import logicallyDesigned from '../../../images/industries/healthcare/logically-designed.webp';
import qualityCode from '../../../images/industries/healthcare/code-quality.webp';

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

            {/* Industries Numbers section */}
            <div className="industries-numbers-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <div className="industries-numbers">
                                <div className="industries-numbers-left">
                                    <h2 className="heading2">Build a strong ground to grow your Real Estate app idea</h2>
                                    <a href="/contact-us" className="btn btn-blue-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                                </div>
                                <div className="industries-numbers-right">
                                    <ul className="industries-numbers-list">
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">50+</span>
                                            <span className="industries-numbers-text">Tech Experts Under One Roof</span>
                                        </li>
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">75+</span>
                                            <span className="industries-numbers-text">Custom Healthcare Projects Delivered</span>
                                        </li>
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">95%</span>
                                            <span className="industries-numbers-text">Happy Clients</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
            
            {/* services section */}
            <div className="designing-services-section industries-services-section section-padding no-top-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 max-width-70">We Develop a Wide Range of High-Performing Healthcare Apps</h2>
                            <div className="heading5 max-width-70">Our healthcare application development services make your product an integral element of the complete homecare and healthcare ecosystem. Our extensive exposure to working with doctors, patients, pharmacies, delivery systems, prescription systems, and EHR mechanisms makes customized development easy and error-free. Our healthcare mobile app development services include the development of these types of apps:</div>
                        </Col>
                    </Row>

                    <div className="industries-services-tab-block mt-4">
                        <Tab.Container id="industries-services-tab" defaultActiveKey="firstInd">
                            <div className="industries-services-tab-cols">
                                <Nav variant="pills" className="industries-services-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="firstInd">Apps for Patients</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="secondInd">Apps for Medical Professionals</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="thirdInd">Apps for Healthcare Providers</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="industries-services-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="firstInd">
                                        <Row className="mt-5">
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Appointment Scheduling Applications</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Symptom Checkers</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Patient Engagement Applications</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Medication Reminder Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Healthy Lifestyle App</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Chronic Disease Management App</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Telemedicine Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Doctor On Demand App</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Mental Health Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Urgent Care App</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="secondInd">
                                        <Row className="mt-5">
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Remote Patient Monitoring Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Medical Research Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">EHR Data Aggregation And Analysis Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Hospital Communication Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Practice Management Apps</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="thirdInd">
                                        <Row className="mt-5">
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Clinical Assistance Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Medical Device Data Collection Platforms</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Time Table Scheduling Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Wearable Tech Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Billing Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Pharmacy Delivery Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Electronic Health Record (EHR) Systems</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Drug Inventory Tracking Apps</h4>
                                                </div>
                                            </Col>
                                            <Col md={4} lg={3}>
                                                <div className="specification-block">
                                                    <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                                    <h4 className="heading4">Population Health Management Software</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </div>

            {/* Industries Capabilities section */}
            <div className="what-software-section industries-capabilities-section section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="leadtxt max-width-70">
                                <h2>We Are Your Trusted Partner for Healthcare App Development Services</h2>
                            </div>
                            <div className="leadsubtxt max-width-70">
                                From prototyping to design, development, and deployment, we provide end-to-end healthcare application development services. As a renowned healthcare app development company, we integrate user-centric design principles into every stage, fostering intuitive interfaces for both medical practitioners and patients alike.
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="capabilities-tab-div">
                                <Tab.Container id="capabilities-tab" defaultActiveKey="cpfirst">
                                    <div className="capabilities-tab-left capabilities-tab-cols">
                                        <Nav variant="pills" className="capabilities-tab flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpfirst"><FontAwesomeIcon icon={faCircle} /> Proven mHealth Experience</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpsecond"><FontAwesomeIcon icon={faCircle} /> Flexible Engagement Models</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpthird"><FontAwesomeIcon icon={faCircle} /> Transparent and Agile Processes</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpfourth"><FontAwesomeIcon icon={faCircle} /> Innovative Solutions</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpfifth"><FontAwesomeIcon icon={faCircle} /> Logically Designed Architecture</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpsixth"><FontAwesomeIcon icon={faCircle} /> Superior Code Quality</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="capabilities-tab-right capabilities-tab-cols">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="cpfirst">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={healthcareApp} className="responsive-img" alt="Our healthcare app" />
                                                    </div>
                                                    <p className="paragraph">Our healthcare app developers have deep experience in developing cutting-edge mHealth solutions that allow users to track their diagnostic data, schedule appointments, find doctors, and manage their prescriptions. With our proven experience in mHealth, we bring a digital revolution to the healthcare ecosystem.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpsecond">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={flexibleModels} className="responsive-img" alt="Flexible Models" />
                                                    </div>
                                                    <p className="paragraph">As the finest healthcare software development company, we offer flexible engagement models that are customized to our client's specific needs, ensuring the best results for their healthcare software solutions. We allow our clients to choose their engagement models and delegate the entire project to us.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpthird">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={agileProcesses} className="responsive-img" alt="Agile Processes" />
                                                    </div>
                                                    <p className="paragraph">Our healthcare app development process is entirely transparent, so our clients are aware of each stage of the development process and can put forth their feedback in real-time. As one of the prominent medical software companies, we use DevOps and agile methodology during our development cycle to ensure that changes are made quickly and efficiently.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpfourth">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={innovativeSolutions} className="responsive-img" alt="Innovative Solutions" />
                                                    </div>
                                                    <p className="paragraph">As one of the most reputed healthcare software companies, we use the latest technology trends and tools to build innovative medical software solutions that improve patient care and make health management easier. Our experts identify the most functional technology stack and build custom medical software development for healthcare businesses.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpfifth">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={logicallyDesigned} className="responsive-img" alt="Logically Designed" />
                                                    </div>
                                                    <p className="paragraph">Being one of the esteemed healthcare app development companies, we are aware of the importance of a well-planned architecture in ensuring the security of the solution and saving end users' time. The significance of your end goal to our healthcare software developers can be seen in our decision between monolithic and microservice architectures as per your business needs.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpsixth">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={qualityCode} className="responsive-img" alt="Quality Code" />
                                                    </div>
                                                    <p className="paragraph">Every design, performance, and security effort we make has an impact on the unmatched quality of our code. As a pioneering healthcare app development company, we understand the need to minimize the number of patches, including increased stability and reduced maintenance requirements.</p>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Tab.Container>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Healthcare