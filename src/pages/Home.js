import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";

import homeBanner from '../images/home-banner.webp';
import homeVideo from '../images/home-video.mp4';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import goodFirmLogo from '../images/good-firms-logo.png';
import appFutura from '../images/appfutura.png';
import itFirms from '../images/itfirm.png';
import topDevelopment from '../images/top-development.png';
import upWork from '../images/upwork.png';

// partners section
import Partners from "../components/Partners";

// services images
import aiml from '../images/service-ai-ml.svg';
import mobileApp from '../images/Mobile-app.svg';
import softwareDevelopment from '../images/Software-Development.svg';
import digitalTransformation from '../images/Digital-Transformation.svg';
import dataScience from '../images/Data-Science-Analytics.svg';
import cloudServices from '../images/Cloud-Services.svg';
import blockChain from '../images/Blockchain-Services.svg';
import ideationDesign from '../images/ideation-design.svg';

// industries images
import healthCare from '../images/healthcare-indus.svg';
import finance from '../images/finance-indus.svg';
import restaurant from '../images/restaurant-indus.svg';
import ecommerce from '../images/ecommerce-indus.svg';
import ev from '../images/ev-indus.svg';
import saas from '../images/saas-indus.svg';
import travel from '../images/travel-indus.svg';
import entertainment from '../images/entertainment-indus.svg';
import onDemand from '../images/on-demand-indus.svg';
import socialMedia from '../images/social-networking-indus.svg';
import logistics from '../images/logistics-indus.svg';
import edtech from '../images/education-indus.svg';

// Partnership images
import awsLogo from '../images/aws-partner.svg';
import mongoDB from '../images/mongodb-partner.svg';
import googleCloud from '../images/google-cloud-partner.svg';
import cloudinary from '../images/cloudinary-partner.svg';

// Testimonial images
import danKurth from '../images/dan-kurth.png';
import josh from '../images/josh-testimonial.png';
import geema from '../images/geema-testimonial.png';
import ericBakey from '../images/eric-bakey.png';
import paulAzzurro from '../images/Paul-Azzurro.png';
import kevinTang from '../images/kevin-tang.png';
import martyJames from '../images/Marty-James.png';
import robertTa from '../images/Robert-Ta.png';

function Home() {

    return (
        <>
            {/* Banner */}
            <div className="home-banner">
                <Container>
                    <Row>
                        <Col>
                            <div className="intro-content">
                                <h1 className="banner-heading">Custom Software Development Company</h1>
                                <p className="banner-text">We offer complete business software development solutions.<br></br>We combine this culture of innovation with our capabilities and industry expertise to go beyond the other traditional technology.</p>
                                <a href="/about" className="consult-expert-btn">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                            </div>
                            <video className="intro_video" poster={homeBanner} autoPlay={true} muted={true} loop={true}> 
                                <source src={homeVideo} type="video/mp4"></source> 
                            </video>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Award Panel */}

            <div className="award-panel text-white">
                <Container>
                    <Row>
                        <Col md={6} lg={4} xl={2} className="award-col">
                            <div className="award-block">
                                <div className="award-logo">
                                    <img src={goodFirmLogo} alt="App development"/>
                                </div>
                                <div className="award-text">
                                    <span>App development company of the year</span>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} lg={4} xl={2} className="award-col">
                            <div className="award-block">
                                <div className="award-logo">
                                    <img src={appFutura} alt="App solution"/>
                                </div>
                                <div className="award-text">
                                    <span>Most promising mobile app solution provider</span>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} lg={4} xl={2} className="award-col">
                            <div className="award-block">
                                <div className="award-logo">
                                    <img src={itFirms} alt="India's Growth Champions"/>
                                </div>
                                <div className="award-text">
                                    <span>India's Growth Champions in IT</span>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} lg={4} xl={2} className="award-col">
                            <div className="award-block">
                                <div className="award-logo">
                                    <img src={upWork} alt="India's Growth Champions"/>
                                </div>
                                <div className="award-text">
                                    <span>Software development company of the year</span>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} lg={4} xl={2} className="award-col">
                            <div className="award-block">
                                <div className="award-logo">
                                    <img src={itFirms} alt="India's Growth Champions"/>
                                </div>
                                <div className="award-text">
                                    <span>India's Growth Champions in IT</span>
                                </div>
                            </div>
                        </Col>

                        <Col md={6} lg={4} xl={2} className="award-col">
                            <div className="award-block">
                                <div className="award-logo">
                                    <img src={topDevelopment} alt="Tech Company Of The Year"/>
                                </div>
                                <div className="award-text">
                                    <span>Tech Company Of The Year</span>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            {/* Services panel */}
            <div className="services-panel section-padding text-white">
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
                                <a href="/services" className="btn btn-white-border">Our Services <FontAwesomeIcon icon={faChevronRight} /></a>
                            </div>

                            <div className="services-cards">
                                <div className="service-card">
                                    <a href="/services">
                                        <div className="service-icon">
                                            <img src={aiml} className="service-img" alt="AI ML" />
                                        </div>
                                        <p className="service-text">AI-ML</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services">
                                        <div className="service-icon">
                                            <img src={mobileApp} className="service-img" alt="Mobile App" />
                                        </div>
                                        <p className="service-text">Mobile App<br></br>Development</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services">
                                        <div className="service-icon">
                                            <img src={softwareDevelopment} className="service-img" alt="Software Development" />
                                        </div>
                                        <p className="service-text">Software<br></br>Development</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services">
                                        <div className="service-icon">
                                            <img src={digitalTransformation} className="service-img" alt="Software Development" />
                                        </div>
                                        <p className="service-text">Digital<br></br>Transformation</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services">
                                        <div className="service-icon">
                                            <img src={dataScience} className="service-img" alt="Software Development" />
                                        </div>
                                        <p className="service-text">Data Science<br></br>& Analytics</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services">
                                        <div className="service-icon">
                                            <img src={cloudServices} className="service-img" alt="Software Development" />
                                        </div>
                                        <p className="service-text">Cloud<br></br>Services</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services">
                                        <div className="service-icon">
                                            <img src={blockChain} className="service-img" alt="Software Development" />
                                        </div>
                                        <p className="service-text">Blockchain<br></br>Services</p>
                                    </a>
                                </div>
                                <div className="service-card">
                                    <a href="/services">
                                        <div className="service-icon">
                                            <img src={ideationDesign} className="service-img" alt="Software Development" />
                                        </div>
                                        <p className="service-text">Ideation and <br></br>Design Strategy</p>
                                    </a>
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

                <OwlCarousel className="owl-theme client_says" loop margin={80} nav={true} dots={false} items={1} responsive= {
                {
                    '0':{
                        items:1,
                        stagePadding: 20
                    },
                    '600':{
                        items:1,
                        stagePadding: 50
                    },
                    '1000':{
                        items:1,
                        stagePadding: 200
                    },
                    '1200':{
                        items:1,
                        stagePadding: 250
                    },
                    '1400':{
                        items:1,
                        stagePadding: 300
                    },
                    '1600':{
                        items:1,
                        stagePadding: 350
                    },
                    '1800':{
                        items:1,
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
                                    <a href="/">
                                        <figure>
                                            <img src={healthCare} alt="Healthcare" />
                                        </figure>
                                        <div className="grid_colm_head">Healthcare</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a href="/">
                                        <figure>
                                            <img src={finance} alt="Finance" />
                                        </figure>
                                        <div className="grid_colm_head">Finance</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a href="/">
                                        <figure>
                                            <img src={restaurant} alt="Restaurant" />
                                        </figure>
                                        <div className="grid_colm_head">Restaurant</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a href="/">
                                        <figure>
                                            <img src={ecommerce} alt="eCommerce" />
                                        </figure>
                                        <div className="grid_colm_head">eCommerce</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a href="/">
                                        <figure>
                                            <img src={ev} alt="EV" />
                                        </figure>
                                        <div className="grid_colm_head">EV</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a href="/">
                                        <figure>
                                            <img src={saas} alt="SaaS" />
                                        </figure>
                                        <div className="grid_colm_head">SaaS</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a href="/">
                                        <figure>
                                            <img src={travel} alt="Travel" />
                                        </figure>
                                        <div className="grid_colm_head">Travel</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item">
                                    <a href="/">
                                        <figure>
                                            <img src={entertainment} alt="Entertainment" />
                                        </figure>
                                        <div className="grid_colm_head">Entertainment</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item border-bottom-none">
                                    <a href="/">
                                        <figure>
                                            <img src={onDemand} alt="On-Demand" />
                                        </figure>
                                        <div className="grid_colm_head">On-Demand</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item border-bottom-none">
                                    <a href="/">
                                        <figure>
                                            <img src={socialMedia} alt="Social Media" />
                                        </figure>
                                        <div className="grid_colm_head">Social Media</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item border-bottom-none">
                                    <a href="/">
                                        <figure>
                                            <img src={logistics} alt="Logistics" />
                                        </figure>
                                        <div className="grid_colm_head">Logistics</div>
                                    </a>
                                </div>
                                <div className="grid_colm_item border-bottom-none">
                                    <a href="/">
                                        <figure>
                                            <img src={edtech} alt="Edtech" />
                                        </figure>
                                        <div className="grid_colm_head">Edtech</div>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

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

        </>
    )
}

export default Home;