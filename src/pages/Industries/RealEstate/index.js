import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import SEO from "../../../components/SEO";
import OwlCarousel from "react-owl-carousel";

import realEstateBanner from '../../../images/industries/real-estate/real-estate-banner.webp';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faChevronRight, faCheckDouble, faFilter, faMapMarkerAlt, faVrCardboard, faHome, faSearch, faBrain, faCalculator, faStar, faHouseMedical } from "@fortawesome/free-solid-svg-icons";

// reasons to choose images
import mobileConsultation from '../../../images/industries/real-estate/mobile-consultation.png';
import realEstateAppDevelopment from '../../../images/industries/real-estate/real-estate-app-development.png';
import enterpriseRealEstate from '../../../images/industries/real-estate/enterprise-real-estate.png';
import realEstateWebApplication from '../../../images/industries/real-estate/real-estate-web-application.png';

// capabilities section images
import qualifiedLeads from '../../../images/industries/real-estate/qualified-leads.webp';
import globalBuyers from '../../../images/industries/real-estate/global-buyers.webp';
import managementLarge from '../../../images/industries/real-estate/management-large.webp';
import advancedTechnologies from '../../../images/industries/real-estate/advanced-technologies.webp';

function RealEstate(){

    const changeNumber=(event) =>{
        if (event.item) {
            var count     = event.item.count;
            var current      = (event.item.index + 1) - event.relatedTarget._clones.length / 2;

            if (current > count) {
                current = 1;
            }
            
            if(current === 0) {
                current = event.item.count;
            }

            document.getElementById('slide_number').innerHTML = current;
            document.getElementById('slide_total_number').innerHTML = count;
           
        }
    }

    return (
        <>
            <SEO
                title="Real Estate App Development - IosAndWeb Technologies"
            />

            {/* Banner section */}
            <div className="industries-banner banner-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="heading-wrapper industries-header text-center">
                                <h1 className="text-black"><span className="text-highlight">Real Estate</span> App Development Company</h1>
                                <div className="heading5">Navigating the future of real estate with next-gen tech-driven custom applications</div>
                            </div>
                            <div className="industries-banner-image">
                                <img className="responsive-img" src={realEstateBanner} alt="Real Estate" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Reasons to choose section */}
            <div className="reasons-to-choose industries-reasons-tab section-padding no-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 max-width-70">Our Full Spectrum of Real Estate App Development Services</h2>
                            <div className="heading5 max-width-70">Our suite of real estate app development services helps buyers find a place they love, and agents close the deal in a shorter duration.</div>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><FontAwesomeIcon icon={faCircleDot} /> Mobile App Consultation</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><FontAwesomeIcon icon={faCircleDot} /> Real Estate App Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><FontAwesomeIcon icon={faCircleDot} /> Enterprise Real Estate Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faCircleDot} /> Real Estate Web Application Development</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <img src={mobileConsultation} alt="Mobile App Consultation" className="reasons-content-icon" />
                                            <h3 className="heading3">Mobile App Consultation</h3>
                                            <p className="paragraph">Get expert insights into the feasibility and profitability of your real estate app idea from our dedicated team of real estate software developers. This insightful consultation will guide you in understanding your app's prospects and strategies you need to make your app a huge success.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <img src={realEstateAppDevelopment} alt="Real Estate App Development" className="reasons-content-icon" />
                                            <h3 className="heading3">Real Estate App Development</h3>
                                            <p className="paragraph">As a leading real estate software development company, we have extensive expertise in developing robust mobile apps for the sector. Our team of real estate app developers assists with end-to-end real estate app development services and solutions that cater to all your stakeholders' current and future needs.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <img src={enterpriseRealEstate} alt="Enterprise Real Estate Development" className="reasons-content-icon" />
                                            <h3 className="heading3">Enterprise Real Estate Development</h3>
                                            <p className="paragraph">Our enterprise real estate services cater to the unique demands of large-scale enterprises. From advanced analytics to seamless process integration, our enterprise development services help businesses optimize operations, enhance the decision-making process, and achieve strategic real estate goals.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <img src={realEstateWebApplication} alt="Real Estate Web Application" className="reasons-content-icon" />
                                            <h3 className="heading3">Real Estate Web Application Development</h3>
                                            <p className="paragraph">Our real estate web application development services include specialized features for smooth property searches, listings, and transactions. We also design user-friendly interfaces and incorporate safe payment methods to ensure a seamless experience for users.</p>
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
                                            <span className="industries-numbers-span">100+</span>
                                            <span className="industries-numbers-text">Successful Projects Delivered</span>
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
                            <h2 className="heading2 max-width-70">Elevate Your Real Estate Business with Our Custom App Solutions</h2>
                            <div className="heading5 max-width-70">Our real estate mobile app developers create tailored solutions that meet your specific business needs. <br />From property listings to lead management, our solutions offer a comprehensive suite of features to help you stay ahead in the competitive real estate market.</div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={4} lg={3}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                <h4 className="heading4">Online Property Booking Solutions</h4>
                            </div>
                        </Col>
                        <Col md={4} lg={3}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                <h4 className="heading4">Property Management Apps</h4>
                            </div>
                        </Col>
                        <Col md={4} lg={3}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                <h4 className="heading4">Home Search Solution</h4>
                            </div>
                        </Col>
                        <Col md={4} lg={3}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                <h4 className="heading4">Brokerage Application</h4>
                            </div>
                        </Col>
                        <Col md={4} lg={3}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                <h4 className="heading4">Centralized Realtor Solution</h4>
                            </div>
                        </Col>
                        <Col md={4} lg={3}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                <h4 className="heading4">Apartment-For-Rent Applications</h4>
                            </div>
                        </Col>
                        <Col md={4} lg={3}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                <h4 className="heading4">Land-For-Sale Applications</h4>
                            </div>
                        </Col>
                        <Col md={4} lg={3}>
                            <div className="specification-block">
                                <FontAwesomeIcon icon={faCheckDouble}></FontAwesomeIcon>
                                <h4 className="heading4">Lead Management Solutions</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Industries Capabilities section */}
            <div className="what-software-section industries-capabilities-section section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="leadtxt max-width-70">
                                <h2>Why Partner with IosAndWeb as Your Real Estate App Development Company?</h2>
                            </div>
                            <div className="leadsubtxt max-width-70">
                            With a real estate software development company like ours, you don't just get a functional mobile app for all your stakeholders; you get innumerable other advantages.
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
                                                <Nav.Link eventKey="cpfirst">Qualified Leads</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpsecond">Global Buyers Access</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpthird">Management of Large Inventory</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpfourth">Technology Infused Offering</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="capabilities-tab-right capabilities-tab-cols">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="cpfirst">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={qualifiedLeads} className="responsive-img" alt="Qualified Leads" />
                                                    </div>
                                                    <p className="paragraph">More smartphone users = more leads = more conversion opportunities = more revenue. Our targeted development approach brings you closer to warm leads.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpsecond">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={globalBuyers} className="responsive-img" alt="Global Buyers Access" />
                                                    </div>
                                                    <p className="paragraph">We help you connect clients and agents from any corner of the world. This connection with international clients widens your exposure while enriching your portfolio.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpthird">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={managementLarge} className="responsive-img" alt="Management of Large Inventory" />
                                                    </div>
                                                    <p className="paragraph">We are a real estate mobile app development company that helps you maintain large inventory from multiple agents and brokers. We help your real estate marketplace contain and manage an inventory made of a variety of home sizes, costs, neighborhoods, and amenities.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpfourth">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={advancedTechnologies} className="responsive-img" alt="Technology Infused Offering" />
                                                    </div>
                                                    <p className="paragraph">We infuse advanced technologies such as AR/VR, Blockchain, IoT, and AI that offer seamless functionalities to your real estate mobile applications. This addresses the requirements of your tech-savvy stakeholders and enhances your app's value proposition.</p>
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

            {/* Industries features slider */}
            <div className="industries-process-slider industries-features-slider section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Features That Make Real Estate Apps Stand Out</h2>
                            <div className="heading5 text-center">As leaders in the field of real estate application development, we develop scalable applications with exceptional features that boost user engagement and improve business efficiency.</div>

                            <div className="industries-slider-block">

                                <div className="industries-slider-numbers">
                                    <span className="slide_number" id="slide_number"></span>
                                    <span className="slide_dash"></span>
                                    <span className="slide_total_number" id="slide_total_number"></span>
                                </div>

                                <OwlCarousel className="owl-theme industries-process" loop autoplay={true} autoplayTimeout={4000} autoplayHoverPause={true} margin={15} nav={true} dots={false} onInitialized={changeNumber} onTranslated={changeNumber} responsive={
                                    {
                                        '0': {
                                            items: 1,
                                        },
                                        '768': {
                                            items: 2,
                                        },
                                        '992': {
                                            items: 3.5,
                                        },
                                        '1200': {
                                            items: 4.5,
                                        }
                                    }
                                }>
                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faFilter} /></span>
                                            <h4 className="heading4">Advanced Search Filters</h4>
                                            <p className="paragraph">This feature includes specific search criteria like location, property price, property type, amenities, and more to help users quickly find properties that suit their needs.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                            <h4 className="heading4">Property Listing Maps</h4>
                                            <p className="paragraph">The interactive property listing map feature allows users to locate the best properties, surrounding amenities, and neighborhood details.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faVrCardboard} /></span>
                                            <h4 className="heading4">AR/VR Tour</h4>
                                            <p className="paragraph">This innovative feature provides virtual property tours using augmented and virtual reality, allowing users to thoroughly and remotely examine properties.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faHome} /></span>
                                            <h4 className="heading4">Property Comparison</h4>
                                            <p className="paragraph">The property comparison feature allows customers to contrast different properties side by side, emphasizing important attributes like costs and features to help them make wise choices.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faSearch} /></span>
                                            <h4 className="heading4">Save Searches</h4>
                                            <p className="paragraph">Users can save their searches and create alerts for new listings that meet their criteria, ensuring they don't miss out on property-related chances.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faBrain} /></span>
                                            <h4 className="heading4">AI-Powered Recommendations</h4>
                                            <p className="paragraph">The feature leverages artificial intelligence to assess user preferences and behavior and provide tailored real estate recommendations.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faCalculator} /></span>
                                            <h4 className="heading4">Mortgage Calculator</h4>
                                            <p className="paragraph">The mortgage calculator feature in real estate apps assists users in estimating monthly payments depending on the cost of a house, interest rates, and the down payment amount.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faHouseMedical} /></span>
                                            <h4 className="heading4">Property Management</h4>
                                            <p className="paragraph">The property management feature allows users to handle property listings, tenant applications, rent collecting, and maintenance requests.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faStar} /></span>
                                            <h4 className="heading4">User Reviews and Ratings</h4>
                                            <p className="paragraph">This feature allows users to give feedback on properties and agents, promoting transparency and trust among app users.</p>
                                        </div>
                                    </div>

                                </OwlCarousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default RealEstate