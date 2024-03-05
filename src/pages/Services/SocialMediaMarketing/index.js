import React from "react";
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";

// Final Reflection images
import SEOIcon from '../../../images/services/digital-marketing/seo-icon.png';
import pageSpeed from '../../../images/services/digital-marketing/page-speed.png';
import proofreading from '../../../images/services/digital-marketing/proofreading.png';
import b2b from '../../../images/services/digital-marketing/b2b.png';

function SocialMediaMarketing(){
    return(
        <>

            <SEO
                title='Best Social Media Marketing Services | Built Customer Trust'
                description='We help you to build s good reputation of your business with Social media marketing services. Get lead generation services in London.'
                name='IosAndWeb Technologies'
            />

            {/* Social Media Marketing Banner */}
            <div className="social-media-marketing-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1>SMM-<span className="text-highlight"> Social Media Marketing</span> Services</h1>
                                <div className="heading5">Build your brand with the most reliable method of marketing i.e. social media marketing.</div>
                                <div className="heading5"><b>IosAndWeb Technologies</b> is here to provide you social media marketing services through which you can achieve your marketing objectives and goals.</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner-overlay"></div>
            </div>

            {/* Services numbers */}
            <div className="services-numbers section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Social Media Marketing Company</h2>
                            <div className="heading5 text-center">We offers customized business solutions to meet their business goals.</div>

                            <NumbersCards />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* what is Software section */}
            <div className="what-software-section section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="leadtxt">
                                <h2>Social Media Marketing Services</h2>
                            </div>
                            <div className="leadsubtxt">
                            Many large scale companies who know the power of social media are advertising their business through social media campaigns and earning lots of profits.<br /><br /></div>
                            <div className="leadsubtxt">Enhance your business or brand with social media marketing or <b>Lead generation campaign services</b> and achieve your goals.
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="leadsubtxt mb-3 text-center">
                                Fill the form and get quote for your project.
                            </div>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Development process section */}
            <div className="section-development-process section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Our Social Media Marketing Process</h2>
                        </Col>
                    </Row>
                    <div className="development-process-blocks mt-4">
                        <Row className="no-gutters">
                            <div className="col-lg"></div>
                            
                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border">01</span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                        
                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">A dedicated social media manager will be assigned</h4>
                                        <p className="card-text">Iosandweb will assign you a dedicated social media manager who will develop the plan and execute it. The project manager will study your business deeply and will be your primary contact.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Build a strategy as per the requirement of your business</h4>
                                        <p className="card-text">Before starting a social media advertising campaign, the manager and the team will do research and build a strategy. The research includes a <b><u>competitive analysis</u></b>, development of customer's persona and defining the effective content strategy. To get a roadmap to the great success we'll build advertising strategies and plans for the campaign. <u>Advertisement company near me</u>.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border">02</span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                            <div className="col-lg"></div>
                            
                        </Row>

                        <Row className="no-gutters">
                            <div className="col-lg"></div>
                            
                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border">03</span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                        
                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Make content calendars and advertisements</h4>
                                        <p className="card-text">Once the strategy gets approved by the client, we will execute it. Our team of <b><u>Social media campaign expert</u></b> will build unique advertisements and the content as per the business. To check and approve the quality, one calendar month will be allowed to develop the content. We will give a chance to the clients to check, review and approve everything.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Growth optimization and daily maintenance</h4>
                                        <p className="card-text">We give growth optimization and daily maintenance services in our social media marketing services. The staff of <b><u>online ads company</u></b> will daily monitor your social media activities i.e. likes, comments, messages, and views and respond to them in 24 hours. We also use hashtags, following, contests, events, etc. to increase your organic following. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border">04</span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                            <div className="col-lg"></div>
                            
                        </Row>

                        <Row className="no-gutters">
                            <div className="col-lg"></div>
                            
                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border">05</span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                        
                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Reporting and Communication</h4>
                                        <p className="card-text">The assigned social media manager will provide you monthly reports of the project to review. As per your convenience, we can also arrange face to face meetings on a weekly, biweekly and monthly basis to discuss the progress of the project. </p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                    </div>

                </Container>
            </div>

            {/* get started section */}
            <GetStarted 
                title="Let's Start Building Web Solutions To Help Achieve Your Business Goals"
                buttonText="Get Started"
                link="/contact"
            />

            {/* final reflection section */}
            <div className="final-reflection-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">Final Reflection</h2>
                            <div className="services-bottom-flex">

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/seo-services">
                                            <img src={SEOIcon} className="services-bottom-front-image" alt="SEO Service" />
                                            <h4 className="heading4">SEO Service</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/">
                                            <img src={pageSpeed} className="services-bottom-front-image" alt="SEO Page Speed" />
                                            <h4 className="heading4">SEO Page Speed Optimization</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/">    
                                            <img src={proofreading} className="services-bottom-front-image" alt="Proofreading" />
                                            <h4 className="heading4">English Copywriting & Proofreading Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/">    
                                            <img src={b2b} className="services-bottom-front-image" alt="B2B" />
                                            <h4 className="heading4">B2B Lead Generation Campaign Services</h4>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default SocialMediaMarketing;