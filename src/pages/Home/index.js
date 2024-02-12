import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../components/SEO";
import OwlCarousel from "react-owl-carousel";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import homeBanner from '../../images/home/home-banner.png';
import homeVideo from '../../images/home/home-video.mp4';

// Award
import AwardsSlider from "../../components/AwardsSlider";

// partners section
import Partners from "../../components/Partners";

// why choose section
import WhyChoose from "../../components/WhyChoose";

// services images
import aiml from '../../images/home/service-ai-ml.svg';
import mobileApp from '../../images/home/Mobile-app.svg';
import softwareDevelopment from '../../images/home/Software-Development.svg';
import digitalTransformation from '../../images/home/Digital-Transformation.svg';
import dataScience from '../../images/home/Data-Science-Analytics.svg';
import cloudServices from '../../images/home/Cloud-Services.svg';
import blockChain from '../../images/home/Blockchain-Services.svg';
import ideationDesign from '../../images/home/ideation-design.svg';

// industries images
import healthCare from '../../images/home/healthcare-indus.svg';
import finance from '../../images/home/finance-indus.svg';
import restaurant from '../../images/home/restaurant-indus.svg';
import ecommerce from '../../images/home/ecommerce-indus.svg';
import ev from '../../images/home/ev-indus.svg';
import saas from '../../images/home/saas-indus.svg';
import travel from '../../images/home/travel-indus.svg';
import entertainment from '../../images/home/entertainment-indus.svg';
import onDemand from '../../images/home/on-demand-indus.svg';
import socialMedia from '../../images/home/social-networking-indus.svg';
import logistics from '../../images/home/logistics-indus.svg';
import edtech from '../../images/home/education-indus.svg';

// Partnership images
import awsLogo from '../../images/home/aws-partner.svg';
import mongoDB from '../../images/home/mongodb-partner.svg';
import googleCloud from '../../images/home/google-cloud-partner.svg';
import cloudinary from '../../images/home/cloudinary-partner.svg';

// Testimonial images
import danKurth from '../../images/home/dan-kurth.png';
import josh from '../../images/home/josh-testimonial.png';
import geema from '../../images/home/geema-testimonial.png';
import ericBakey from '../../images/home/eric-bakey.png';
import paulAzzurro from '../../images/home/Paul-Azzurro.png';
import kevinTang from '../../images/home/kevin-tang.png';
import martyJames from '../../images/home/Marty-James.png';
import robertTa from '../../images/home/Robert-Ta.png';

function Home() {

    return (
        <>
            <SEO
                title='Custom Software Development Company - IosAndWeb Tech'
                description='Looking for a reliable Custom Software Development Company to build your next big idea? Look no further than IosAndWeb Technologies.'
                name='IosAndWeb Technologies'
            />

            {/* Banner */}
            <div className="home-banner">
                <Container>
                    <Row>
                        <Col>
                            <div className="intro-content">
                                <h1 className="banner-heading">Custom Software Development Company</h1>
                                <p className="banner-text">We offer complete business software development solutions.<br></br>We combine this culture of innovation with our capabilities and industry expertise to go beyond the other traditional technology.</p>
                                <a href="/contact" className="consult-expert-btn">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                            </div>
                            <video className="intro_video" poster={homeBanner} autoPlay={true} muted={true} loop={true}>
                                <source src={homeVideo} type="video/mp4"></source>
                            </video>
                            <div className="home-banner-overlay"></div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Services panel */}
            <div className="services-panel section-padding">
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
                                <a href="/services" className="btn btn-blue-border">Our Services <FontAwesomeIcon icon={faChevronRight} /></a>
                            </div>

                            <div className="services-cards">
                                
                                <div className="service-card">
                                    <a href="/software-development" className="bg-orange">
                                        <div className="service-icon">
                                            <img src={softwareDevelopment} className="service-img" alt="Software Development" />
                                        </div>
                                        <p className="service-text">Software<br></br>Development</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services" className="bg-purple">
                                        <div className="service-icon">
                                            <img src={mobileApp} className="service-img" alt="Mobile App" />
                                        </div>
                                        <p className="service-text">Mobile App<br></br>Development</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services" className="bg-blue">
                                        <div className="service-icon">
                                            <img src={digitalTransformation} className="service-img" alt="Web Development" />
                                        </div>
                                        <p className="service-text">Web<br></br>Development</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="https://www.blockchain77.com/services/" className="bg-red">
                                        <div className="service-icon">
                                            <img src={aiml} className="service-img" alt="Development of POC & ICO" />
                                        </div>
                                        <p className="service-text">Development of <br></br>POC & ICO</p>
                                    </a>
                                </div>
                                
                                <div className="service-card">
                                    <a href="/services" className="bg-green">
                                        <div className="service-icon">
                                            <img src={dataScience} className="service-img" alt="Digital Transformation" />
                                        </div>
                                        <p className="service-text">Digital <br></br>Transformation</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services" className="bg-gray">
                                        <div className="service-icon">
                                            <img src={cloudServices} className="service-img" alt="PPC Services" />
                                        </div>
                                        <p className="service-text">Pay Per Click <br></br>Services</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="https://www.blockchain77.com/services/" className="bg-pink">
                                        <div className="service-icon">
                                            <img src={blockChain} className="service-img" alt="Blockchain Services" />
                                        </div>
                                        <p className="service-text">Blockchain<br></br>Services</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services" className="bg-yellow">
                                        <div className="service-icon">
                                            <img src={ideationDesign} className="service-img" alt="Ideation and Design" />
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
                                    <figure>
                                        <img src={healthCare} alt="Healthcare" />
                                    </figure>
                                    <div className="grid_colm_head">Healthcare</div>
                                </div>
                                <div className="grid_colm_item">
                                    <figure>
                                        <img src={finance} alt="Finance" />
                                    </figure>
                                    <div className="grid_colm_head">Finance</div>
                                </div>
                                <div className="grid_colm_item">
                                    <figure>
                                        <img src={restaurant} alt="Restaurant" />
                                    </figure>
                                    <div className="grid_colm_head">Restaurant</div>
                                </div>
                                <div className="grid_colm_item">
                                    <figure>
                                        <img src={ecommerce} alt="eCommerce" />
                                    </figure>
                                    <div className="grid_colm_head">eCommerce</div>
                                </div>
                                <div className="grid_colm_item">
                                    <figure>
                                        <img src={ev} alt="EV" />
                                    </figure>
                                    <div className="grid_colm_head">EV</div>
                                </div>
                                <div className="grid_colm_item">
                                    <figure>
                                        <img src={saas} alt="SaaS" />
                                    </figure>
                                    <div className="grid_colm_head">SaaS</div>
                                </div>
                                <div className="grid_colm_item">
                                    <figure>
                                        <img src={travel} alt="Travel" />
                                    </figure>
                                    <div className="grid_colm_head">Travel</div>
                                </div>
                                <div className="grid_colm_item">
                                    <figure>
                                        <img src={entertainment} alt="Entertainment" />
                                    </figure>
                                    <div className="grid_colm_head">Entertainment</div>
                                </div>
                                <div className="grid_colm_item border-bottom-none">
                                    <figure>
                                        <img src={onDemand} alt="On-Demand" />
                                    </figure>
                                    <div className="grid_colm_head">On-Demand</div>
                                </div>
                                <div className="grid_colm_item border-bottom-none">
                                    <figure>
                                        <img src={socialMedia} alt="Social Media" />
                                    </figure>
                                    <div className="grid_colm_head">Social Media</div>
                                </div>
                                <div className="grid_colm_item border-bottom-none">
                                    <figure>
                                        <img src={logistics} alt="Logistics" />
                                    </figure>
                                    <div className="grid_colm_head">Logistics</div>
                                </div>
                                <div className="grid_colm_item border-bottom-none">
                                    <figure>
                                        <img src={edtech} alt="Edtech" />
                                    </figure>
                                    <div className="grid_colm_head">Edtech</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Business partners*/}
            <Partners />

            {/* Testimonial section */}
            <div className="testimonial-panel section-padding text-white">
                <Container>
                    <Row>
                        <Col>
                            <div className="leadtxt text-center">
                                <h3>First-Hand Opinions of Clients on
                                    <br></br>Their Partnership Experience
                                </h3>
                            </div>
                            <div className="leadsubtxt text-center">
                                We are a software and mobile application development company that ensures its expertise extends <br></br>to offer a seamlessly productive and growth-oriented partnership to its clients.
                            </div>
                        </Col>
                    </Row>
                </Container>

                <OwlCarousel className="owl-theme client_says" loop autoplay={true} autoplayTimeout={3000} autoplayHoverPause={true} margin={80} nav={true} dots={false} items={1} responsive={
                    {
                        '0': {
                            items: 1,
                            stagePadding: 20
                        },
                        '600': {
                            items: 1,
                            stagePadding: 50
                        },
                        '1000': {
                            items: 1,
                            stagePadding: 200
                        },
                        '1200': {
                            items: 1,
                            stagePadding: 250
                        },
                        '1400': {
                            items: 1,
                            stagePadding: 300
                        },
                        '1600': {
                            items: 1,
                            stagePadding: 350
                        },
                        '1800': {
                            items: 1,
                            stagePadding: 400
                        }
                    }
                }>
                    <div className="item">
                        <div className="testimonial_box">
                            <p className="p_text">I have tried several different website developers for our Legacy Alpha site and the service we received from losAndWeb Technology was more specific, accurate and timely than any we have gotten from other service. If you are serious about getting your website done the way you want it, in a direct and timely way, there is no better service available that I have found. I will be recommending him to my business clients.</p>
                            <div className="client_bottom">
                                <div className="client_details">
                                    <div className="client_img">
                                        <img src={danKurth} alt="Dan Kurth" />
                                    </div>
                                    <div className="client_text">
                                        <div className="client_name">Dan Kurth</div>
                                        <div className="client_des"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial_box">
                            <p className="p_text">losAndWeb Technologies is well versed and extremely professional. They are committed to excellence. The company is well spoken, eager to please and super responsive. First class! Highly recommended.</p>
                            <div className="client_bottom">
                                <div className="client_details">
                                    <div className="client_img">
                                        <img src={josh} alt="Josh" />
                                    </div>
                                    <div className="client_text">
                                        <div className="client_name">Josh</div>
                                        <div className="client_des"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial_box">
                            <p className="p_text">Thanks to IosAndWeb team for Swiss Swaps. You guys managed a lot of functions that I thought weren't quite possible. The best thing I liked is that you guys never stopped until I was satisfied with the product.</p>
                            <div className="client_bottom">
                                <div className="client_details">
                                    <div className="client_img">
                                        <img src={geema} alt="Geema" />
                                    </div>
                                    <div className="client_text">
                                        <div className="client_name">Geema</div>
                                        <div className="client_des"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial_box">
                            <p className="p_text">Very Happy. Utkarsh also circled back to ensure I was happy with my website and went above and beyond to ensure I knew how to use it. I'm not tech-savvy that's why I hired him. He more than understood that. Even though he was in another country, he ensured he communicated with me quickly and by 7am EST I always had a response to my questions. His design is unique and user-friendly. Absolutely recommended.</p>
                            <div className="client_bottom">
                                <div className="client_details">
                                    <div className="client_img">
                                        <img src={ericBakey} alt="Eric Bakey" />
                                    </div>
                                    <div className="client_text">
                                        <div className="client_name">Eric Bakey</div>
                                        <div className="client_des"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial_box">
                            <p className="p_text">Hi Finally I found a web designer who has created me the coolest designed chess site ever love it (chessondemand.com). I have had several developers throughout the years some good most just hold you hostages and never seem to finish what they started. Utkarsh and his team have exceeded my expectations great service honest affordable pricing and their skill level with web design and seo is top notch. I highly recommend them they are the real deal. Thank you</p>
                            <div className="client_bottom">
                                <div className="client_details">
                                    <div className="client_img">
                                        <img src={paulAzzurro} alt="Paul Azzurro" />
                                    </div>
                                    <div className="client_text">
                                        <div className="client_name">Paul Azzurro</div>
                                        <div className="client_des"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial_box">
                            <p className="p_text">He was a pleasure to work with! He was accommodating to all changes along the way and did a great job. Will work with him again.</p>
                            <div className="client_bottom">
                                <div className="client_details">
                                    <div className="client_img">
                                        <img src={kevinTang} alt="Kevin Tang" />
                                    </div>
                                    <div className="client_text">
                                        <div className="client_name">Kevin Tang</div>
                                        <div className="client_des"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial_box">
                            <p className="p_text">Amazing experience! The team genuinely cares about delivering results and the way of reports like every single link you can check where they promote our website. I have been working with the losandweb team for 1.8 year now. I think my search for SEO is over and I can assure my further work with Utkarsh and his team. Satisfied with the results and professional behavior. I will recommend losandweb team.</p>
                            <div className="client_bottom">
                                <div className="client_details">
                                    <div className="client_img">
                                        <img src={martyJames} alt="Marty James" />
                                    </div>
                                    <div className="client_text">
                                        <div className="client_name">Marty James</div>
                                        <div className="client_des"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial_box">
                            <p className="p_text">Yea Good experience. No complains, job done on time. This is by far the best web development team I hired. Thank you for your attitude and commitment.</p>
                            <div className="client_bottom">
                                <div className="client_details">
                                    <div className="client_img">
                                        <img src={robertTa} alt="Robert Ta." />
                                    </div>
                                    <div className="client_text">
                                        <div className="client_name">Robert Ta.</div>
                                        <div className="client_des"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            </div>

            {/* why choose section */}
            <WhyChoose />

            {/* Partnership section */}
            <div className="partnership-panel section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="leadtxt">
                                <h3>Strategic Partnerships to Unlock Greater Business Value</h3>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="card_grid_panel">
                                <div className="card_logo">
                                    <img src={awsLogo} alt="aws" />
                                </div>
                                <div className="card_logo">
                                    <img src={mongoDB} alt="Mongo DB" />
                                </div>
                                <div className="card_logo">
                                    <img src={googleCloud} alt="Google Cloud" />
                                </div>
                                <div className="card_logo">
                                    <img src={cloudinary} alt="Cloudinary" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* FAQ section */}
            <div className="faq-panel section-padding">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="leadtxt text-center">
                                <h3>Frequently Asked Questions</h3>
                            </div>
                            <Accordion>
                                <div className="faq_col_panel">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What mobile app development services do you offer? </Accordion.Header>
                                        <Accordion.Body>
                                            <p>As a leading mobile application development company, we offer a comprehensive array of services, including:</p>
                                            <ul>
                                                <li>iOS App Development</li>
                                                <li>Android App Development</li>
                                                <li>Flutter App Development</li>
                                                <li>React Native App Development</li>
                                                <li>Web App Development</li>
                                            </ul>
                                            <p>Our client-centric approach allows us to assist our clients all the way from the initial idea validation to execution and post maintenance. This involves rigorous planning, design, development, testing, and deployment, ensuring that the mobile app is not only technologically robust but also aligns with the client's business vision and user expectations.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Do you develop software for both mobile and web platforms?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>As a dedicated software and mobile application developer company, our expertise encompasses across all platforms. Be it native, hybrid, or web, we cater to all your development needs.</p>
                                            <p>Our agile development approach is highly adaptable and tailored to your business goals and target audience. Whether you operate in healthcare, finance, eCommerce, or any other industry, we have the skill to create custom software that delivers exceptional value to your organization.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Do you offer app maintenance and support services?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Yes, we offer comprehensive maintenance and support services tailored to meet your business requirements. Being one of the best mobile app development agencies, our approach is centered around helping you choose the maintenance strategy that best aligns with your needs, ensuring the seamless operation of your software applications.</p>
                                            <p>Our app maintenance services encompass a wide range of offerings, including:</p>
                                            <ul>
                                                <li>Software upgrades as per emerging technologies</li>
                                                <li>Automated backups</li>
                                                <li>Issue management and response</li>
                                                <li>Ongoing support and bug fixes</li>
                                                <li>Regular performance and security enhancements</li>
                                                <li>Version upgrades</li>
                                                <li>Comprehensive user support</li>
                                                <li>Performance monitoring</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                               
                                <div className="faq_col_panel">
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>What software development services do you offer?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>With a dedicated team of software developers and a track record of more than 3000 successful project deliveries, we are a leading mobile application developer company with the expertise and experience to cater to your unique software needs. Our comprehensive suite of software development services encompasses:</p>
                                            <ul>
                                                <li>Software Consulting</li>
                                                <li>Custom Software Development</li>
                                                <li>Enterprise Software Development</li>
                                                <li>Software Product Development</li>
                                                <li>Software Integration</li>
                                                <li>Custom CRM Development</li>
                                                <li>API Development</li>
                                                <li>ERP Software Development</li>
                                            </ul>
                                            <p>Our development approach is based on comprehending your specific business requirements, carefully crafting the most effective development plan, delivering results-oriented recommendations, and ensuring that your business objectives are met with utmost precaution.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>How do you ensure the security and quality of the software you develop?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>As the best software and mobile application development agency, we hold security and software quality in the highest regard. We begin the project by signing a Non-Disclosure Agreement (NDA) to safeguard your information. This legally binding document emphasizes our commitment to maintaining the confidentiality of your sensitive data and establishing a secure and trustworthy partnership.</p>
                                            <p>Paying utmost importance to mobile app security, we align our development processes with industry-specific compliance standards, including GDPR, HIPAA, PCI DSS, etc. These serve as guiding frameworks for development, ensuring that our software not only meets your business objectives but also adheres to the highest levels of security and quality.</p>
                                            <p>Furthermore, quality assurance is one of the vital pillars of our development process. We adhere to industry best practices and stringent testing protocols to guarantee the utmost quality of your software. Our comprehensive testing techniques encompass functional, performance, user, and security testing, which are vital in identifying and mitigating potential vulnerabilities or risks.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </div>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            {/* Award Panel */}
            <AwardsSlider />
        </>
    )
}

export default Home;