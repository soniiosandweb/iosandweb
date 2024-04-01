import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import SEO from "../../../components/SEO";
import OwlCarousel from "react-owl-carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCircle, faCircleDot, faListCheck, faRocket, faCog, faCubes, faCheckSquare, faFileCode } from "@fortawesome/free-solid-svg-icons";

import generativeAIBanner from '../../../images/industries/generative-ai/generative-ai-banner.webp';

// reasons to choose images
import modelDevelopment from '../../../images/industries/generative-ai/model-development.png';
import modelReplication from '../../../images/industries/generative-ai/model-replication.png';
import modelDeployment from '../../../images/industries/generative-ai/model-deployment.png';
import maintenance from '../../../images/industries/generative-ai/maintenance.png';
import modelTuning from '../../../images/industries/generative-ai/model-tuning.png';
import modelArchitecting from '../../../images/industries/generative-ai/architecting.png';

// industries images
import healthCare from '../../../images/home/health-care.png';
import finance from '../../../images/home/finance.png';
import restaurant from '../../../images/home/restaurant.png';
import ecommerce from '../../../images/home/ecommerce-indus.svg';
import realEstate from '../../../images/home/real-estate.png';
import banking from '../../../images/home/banking.png';
import travel from '../../../images/home/travel.png';
import entertainment from '../../../images/home/entertainment.png';
import onDemand from '../../../images/home/on-demand-indus.svg';
import socialMedia from '../../../images/home/social-networking-indus.svg';
import edtech from '../../../images/home/education-indus.svg';

// capabilities section images
import seasonedExperts from '../../../images/industries/generative-ai/expert-teams.webp';
import collaborate from '../../../images/industries/generative-ai/collaborate.webp';
import innovativeSolutions from '../../../images/industries/generative-ai/innovative-solutions.webp';
import upgradeMaintenance from '../../../images/industries/generative-ai/upgrade-maintenance.webp';

function GenerativeAI(){

    const changeNumberProcess=(event) =>{
        if (event.item) {
            var count     = event.item.count;
            var current      = (event.item.index + 1) - event.relatedTarget._clones.length / 2;

            if (current > count) {
                current = 1;
            }
            
            if(current === 0) {
                current = event.item.count;
            }

            document.getElementById('slide_number_process').innerHTML = current;
            document.getElementById('slide_total_number_process').innerHTML = count;
           
        }
    }

    return(
        <>
            <SEO
                title="Generative AI Development - IosAndWeb Technologies"
            />

            {/* Banner section */}
            <div className="industries-banner banner-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <div className="heading-wrapper industries-header text-center">
                                <h1 className="text-black"><span className="text-highlight">Generative AI</span> Development Services</h1>
                                <div className="heading5">Deploy the revolutionary capabilities of Generative AI to scale your business to a new growth landscape</div>

                                <div className="btn-section mb-5">
                                    <a href="/contact-us" className="btn btn-blue-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                                </div>

                            </div>
                            <div className="industries-banner-image">
                                <img className="responsive-img" src={generativeAIBanner} alt="Generative AI" />
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
                            <h2 className="heading2 max-width-70">Capture Global Attention with State-of-the-Art Generative AI Services</h2>
                            <div className="heading5 max-width-70">Our 100+ adept professionals leverage generative artificial intelligence to create intelligent applications unlocking boundless possibilities. By seamlessly integrating generative AI into your digital products, we help you enhance efficiency, streamline processes, and skyrocket your business to new heights.</div>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><FontAwesomeIcon icon={faCircleDot} /> Generative AI Model Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><FontAwesomeIcon icon={faCircleDot} /> Generative AI Model Replication</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><FontAwesomeIcon icon={faCircleDot} /> Model Integration and Deployment</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><FontAwesomeIcon icon={faCircleDot} /> Upgrade and Maintenance</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><FontAwesomeIcon icon={faCircleDot} /> AI Model Fine Tuning</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth"><FontAwesomeIcon icon={faCircleDot} /> AI Model Architecting</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <img src={modelDevelopment} alt="Model Development" className="reasons-content-icon" />
                                            <h3 className="heading3">Generative AI Model Development</h3>
                                            <p className="paragraph">Our team harnesses the power of machine learning algorithms, including RNNs, Transformers, Markov Chain, GANs, and Autoencoders for developing bespoke generative AI models that meet your specific business requirements. We carefully configure and train these models as per industry standards to ensure high-quality generative AI solutions development.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <img src={modelReplication} alt="Model Replication" className="reasons-content-icon" />
                                            <h3 className="heading3">Generative AI Model Replication</h3>
                                            <p className="paragraph">As a leading generative AI development company, we offer high-end generative AI model replication services that enable businesses to replicate successful models such as ChatGPT and DALL-E, thus accelerating growth and innovation. Our generative AI modeling services help them unlock new growth opportunities and gain a competitive edge in their niche.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <img src={modelDeployment} alt="Model Deployment" className="reasons-content-icon" />
                                            <h3 className="heading3">Model Integration and Deployment</h3>
                                            <p className="paragraph">Our team thoroughly evaluates your business needs to guarantee a secure and efficient integration and deployment of AI models. Our all-inclusive Generative AI development services comprise building the most suitable model, customizing it to meet your specifications, and effectively managing the integration, testing, and deployment process.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <img src={maintenance} alt="Maintenance" className="reasons-content-icon" />
                                            <h3 className="heading3">Upgrade and Maintenance</h3>
                                            <p className="paragraph">Our highest priority is helping our clients stay at the forefront of technology. As a leading generative AI consulting services provider, our skilled developers upgrade and maintain generative AI models, allowing businesses to optimize performance, adapt to evolving requirements, and drive continued growth and innovation.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <img src={modelTuning} alt="Model Tuning" className="reasons-content-icon" />
                                            <h3 className="heading3">AI Model Fine Tuning</h3>
                                            <p className="paragraph">Our AI model fine-tuning service involves optimizing and customizing the previously-trained AI models, allowing them to adapt to changing or domain-specific use cases and data sets. Leveraging the existing AI models and tweaking them finely allows for more accurate predictions and improved decision-making capabilities.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <div className="reasons-tab-content">
                                            <img src={modelArchitecting} alt="Model Architecting" className="reasons-content-icon" />
                                            <h3 className="heading3">AI Model Architecting</h3>
                                            <p className="paragraph">Our team of artificial intelligence experts is highly equipped to collaborate with you in designing and architecting new or existing AI models, selecting the appropriate neural network architecture and optimizing hyperparameters. As a dedicated Generative AI solutions provider, our unmatched efficiency and proven experience can convert your business vision into functional solutions that effectively addresses real-world problems in real time.</p>
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
                                    <h2 className="heading2">Build a strong ground to grow your Generative AI idea</h2>
                                    <a href="/contact-us" className="btn btn-blue-border">Consult Our Experts <FontAwesomeIcon icon={faChevronRight} /></a>
                                </div>
                                <div className="industries-numbers-right">
                                    <ul className="industries-numbers-list">
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">50+</span>
                                            <span className="industries-numbers-text">Tech Experts Under One Roof</span>
                                        </li>
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">10+</span>
                                            <span className="industries-numbers-text">Years of experience</span>
                                        </li>
                                        <li className="industries-numbers-list-item">
                                            <span className="industries-numbers-span">95%</span>
                                            <span className="industries-numbers-text">Client Satisfaction Rate</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* services section */}
            <div className="designing-services-section industries-ai-section section-padding no-top-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 max-width-70 m-auto text-center">Leveraging Artificial Intelligence across Multiple Industrial Domains</h2>
                            <div className="heading5 max-width-70 mx-auto text-center">The rapidly evolving AI technology is transforming the business landscape across various industries. As a dedicated Generative AI development company, we continuously explore innovative use cases to unlock the potential benefits of Generative AI tools for organizations across sectors.</div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/ecommerce-app-development">
                                    <figure>
                                        <img src={ecommerce} alt="eCommerce" />
                                    </figure>
                                    <h4 className="heading4">eCommerce</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/real-estate-app-development">
                                    <figure>
                                        <img src={realEstate} alt="Real Estate" />
                                    </figure>
                                    <h4 className="heading4">Real Estate</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={healthCare} alt="Healthcare" />
                                    </figure>
                                    <h4 className="heading4">Healthcare</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={finance} alt="Finance" />
                                    </figure>
                                    <h4 className="heading4">Finance</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={restaurant} alt="Restaurant" />
                                    </figure>
                                    <h4 className="heading4">Restaurant</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={banking} alt="Banking" />
                                    </figure>
                                    <h4 className="heading4">Banking</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={travel} alt="Travel" />
                                    </figure>
                                    <h4 className="heading4">Travel</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={entertainment} alt="Entertainment" />
                                    </figure>
                                    <h4 className="heading4">Entertainment</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={onDemand} alt="On-Demand" />
                                    </figure>
                                    <h4 className="heading4">On-Demand</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={socialMedia} alt="Social Media" />
                                    </figure>
                                    <h4 className="heading4">Social Media</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={edtech} alt="Education" />
                                    </figure>
                                    <h4 className="heading4">Education</h4>
                                </a>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3} className="industries-ai-col">
                            <div className="specification-block">
                                <a className="specification-block-link" href="/">
                                    <figure>
                                        <img src={finance} alt="eCommerce" />
                                    </figure>
                                    <h4 className="heading4">Agriculture</h4>
                                </a>
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
                                <h2>Know Why Leaders Make Us Their Go-To Generative AI Development Company</h2>
                            </div>
                            <div className="leadsubtxt max-width-70">
                            With our custom Generative AI services, we enable businesses to embark on a transformative journey while paving the way to unparalleled growth and innovation.
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
                                                <Nav.Link eventKey="cpfirst"><FontAwesomeIcon icon={faCircle} /> Seasoned Experts</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpsecond"><FontAwesomeIcon icon={faCircle} /> Integrated Collaboration</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpthird"><FontAwesomeIcon icon={faCircle} /> Innovative Solutions</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="cpfourth"><FontAwesomeIcon icon={faCircle} /> Continuous Upgrades and Maintenance</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="capabilities-tab-right capabilities-tab-cols">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="cpfirst">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={seasonedExperts} className="responsive-img" alt="Seasoned Experts" />
                                                    </div>
                                                    <p className="paragraph">Our team comprises experienced machine learning engineers, data scientists, and domain experts specialized in building Generative AI models. As a dedicated generative AI consulting services provider, we harness the power of Generative AI to create dynamic and intelligent solutions custom to your business goals.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpsecond">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={collaborate} className="responsive-img" alt="Integrated Collaboration" />
                                                    </div>
                                                    <p className="paragraph">As a trusted Generative AI development company, we place a high premium on effective communication and collaboration. Our team of experts is dedicated to ensuring seamless collaboration, providing regular updates, and promptly addressing any concerns or questions you may have.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpthird">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={innovativeSolutions} className="responsive-img" alt="Innovative Solutions" />
                                                    </div>
                                                    <p className="paragraph">Our team of experts combines amplified creativity with the latest tech stack to transform your business using Generative AI models. As a dedicated generative AI development firm, our domain expertise provides unique access and insights into cutting-edge AI technology and base models, resulting in business breakthroughs and innovation.</p>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="cpfourth">
                                                <div className="capabilities-tab-content">
                                                    <div className="capabilities-content-img">
                                                        <img src={upgradeMaintenance} className="responsive-img" alt="Upgrades and Maintenance" />
                                                    </div>
                                                    <p className="paragraph">Our company provides constant upgrades and maintenance services to ensure that your business solution stays up-to-date with the latest AI trends. Our Generative AI development services also include post-optimization upgrades, fine-tuning, utilization of robust hardware, and development of new algorithms.</p>
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

            {/* Industries process slider */}
            <div className="industries-process-slider section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Our Seamless Generative AI Software Development Process</h2>
                            <div className="heading5 text-center">Our expert Generative AI developers take a comprehensive approach to understanding your organization's objectives and goals. As a dedicated Generative AI development agency, we strive to develop an engaging, user-friendly, and seamless Generative AI solution tailored to your target audience.</div>

                            <div className="industries-slider-block">

                                <div className="industries-slider-numbers">
                                    <span className="slide_number" id="slide_number_process"></span>
                                    <span className="slide_dash"></span>
                                    <span className="slide_total_number" id="slide_total_number_process"></span>
                                </div>

                                <OwlCarousel className="owl-theme industries-process" loop autoplay={true} autoplayTimeout={4000} autoplayHoverPause={true} margin={15} nav={true} dots={false} items={4} onInitialized={changeNumberProcess} onTranslated={changeNumberProcess} responsive={
                                    {
                                        '0': {
                                            items: 1,
                                        },
                                        '768': {
                                            items: 2,
                                        },
                                        '992': {
                                            items: 2.5,
                                        },
                                        '1200': {
                                            items: 3.5,
                                        }
                                    }
                                }>
                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faCubes} /></span>
                                            <h4 className="heading4">Data Gathering</h4>
                                            <p className="paragraph">This stage involves comprehending the client's goals and needs by collecting information on the intended functionality, target audience, and business objectives. This ensures that the generative AI solution aligns with the client's vision.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faListCheck} /></span>
                                            <h4 className="heading4">Data Preparation</h4>
                                            <p className="paragraph"> In the subsequent stage of Generative AI software development, our expert team organizes the essential data to train the generative AI models. This comprises obtaining the datasets, refining and prepping them, and validating their quality and reliability to ensure precise model training.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faCheckSquare} /></span>
                                            <h4 className="heading4">Model Training</h4>
                                            <p className="paragraph">Advanced deep learning algorithms are employed to train models during this stage of generative AI application development. These models learn from the provided data, capturing patterns and generating outputs accordingly. Through iterations and fine-tuning, the training process optimizes the model's performance, ensuring it generates the desired output with enhanced accuracy and effectiveness.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faCog} /></span>
                                            <h4 className="heading4">Testing and Validation</h4>
                                            <p className="paragraph"> After the generative AI models are trained, they undergo a thorough testing and validation process. This includes evaluating the model's performance, accuracy, reliability, and robustness. Our rigorous testing techniques carried out during generative AI product development identify potential issues or areas for improvement before deploying the solution.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faRocket} /></span>
                                            <h4 className="heading4">Deployment and Integration</h4>
                                            <p className="paragraph"> After the generative AI solution has been successfully tested, it is deployed and integrated into the client's existing systems or applications. The integration process is carefully executed to ensure seamless integration, compatibility, and scalability to support the client's operational needs.</p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="industries_process_block">
                                            <span className="process-icon"><FontAwesomeIcon icon={faFileCode} /></span>
                                            <h4 className="heading4">Monitoring and Maintenance</h4>
                                            <p className="paragraph"> Continuous monitoring and maintenance are essential for the optimal performance of the generative AI solution after deployment. This stage of generative AI software development includes monitoring for issues, updating models, and incorporating feedback to improve the solution over time.</p>
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

export default GenerativeAI;