import { useLocation } from "react-router-dom"
import SEO from "../../../../components/SEO";
import './style.css';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import NumbersCards from "../../../../components/NumbersCards";
import ContactForm from "../../../../components/ContactForm";
import onlineMarketingImg from '../../../../images/services/seo-service-sheffield/online-marketing.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleDot } from "@fortawesome/free-solid-svg-icons";

// steps images
import fundamental from '../../../../images/services/seo-service-sheffield/fundamental.png';
import technicalSeo from '../../../../images/services/seo-service-sheffield/technical-seo.png';
import seoProcess from '../../../../images/services/seo-service-sheffield/seo-process.png';
import contentOptimization from '../../../../images/services/seo-service-sheffield/content-optimization.png';
import backlink from '../../../../images/services/seo-service-sheffield/backlink.png';
import keepMind from '../../../../images/services/seo-service-sheffield/keep-mind.png';
import newThings from '../../../../images/services/seo-service-sheffield/new-things.png';
import optimising from '../../../../images/services/seo-service-sheffield/optimising.png';
import GetStarted from "../../../../components/GetStarted";

// Conclusion images
import pageSpeed from '../../../../images/services/digital-marketing/page-speed.png';
import proofreading from '../../../../images/services/digital-marketing/proofreading.png';
import b2b from '../../../../images/services/digital-marketing/b2b.png';

function SEOServiceSheffield(){

    const location = useLocation();

    return(
        <>
            <SEO
                title={"SEO Agency Services in Sheffield | Boost Rankings & Traffic"}
                description={"Enhance your online presence with professional SEO services in Sheffield. Boost keywords rankings, increase traffic, and grow your business. Get started today!"}
                keywords={"SEO Sheffield, Sheffield SEO services, local SEO Sheffield, digital marketing Sheffield, SEO agency Sheffield, search engine optimization Sheffield"}
                name={"IosAndWeb Technologies"}
                canonicalUrl={`${process.env.REACT_APP_API_URL}${location.pathname}`}
            />

            {/* SEO Sheffield Banner */}
            <div className="seo-service-sheffield-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1>SEO Services in <span className="text-highlight">Sheffield</span></h1>
                                <div className="heading5">Learning search engine optimization needs to be standardized (SEO). There is always a story about someone starting their career in some industry. Similarly, the Seo team at Iosandweb has its own story to tell to its potential clients as its success story. It therefore cannot be enjoyable.</div>
                                <div className="heading5">Or you're not getting the traffic you want to your current website. Or perhaps you wish to begin a brand-new, in-demand career. Even for a newbie, SEO is relatively easy to learn despite all the technical terminology. While we can't promise you'll be on page one of Google, we can promise you'll see results if you do the work.</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="banner-overlay bg-60"></div>
            </div>

            {/* Services numbers */}
            <div className="services-numbers section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Get SEO Services in Sheffield @IAW</h2>
                            <div className="heading5 text-center">At some point, the term SEO was undoubtedly used in a discussion of digital marketing tactics. The importance of SEO and how it connects to search engines may already be known to you. But what exactly is SEO? In this article, we'll talk about SEO, its advantages for your business, and why it's important to be a Seo Specialist in Sheffield.</div>

                            <NumbersCards />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Sharing Is Caring section */}
            <div className="what-software-section section-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="leadtxt">
                                <h2>How Natural Searches Affect Share Clicks in the "Sharing Is Caring" Movement</h2>
                            </div>
                            <div className="leadsubtxt">
                                Understanding click sharing is a prerequisite for understanding the benefits of SEO for your business. Click share is a projection of all the clicks that your business will receive. This will only be visible for search and shopping adverts. It is a tool to assist you in expanding your company because it might enable you to receive more clicks with Professional Seo Services in Sheffield. Due to the high click-through rate of organic results, the better your SEO, the greater your click-through rate will be.
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

            {/* Instructional Guide for SEO */}
            <div className="instructional-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Your Instructional Guide For SEO</h2>
                            <p className="paragraph">Let's quickly examine what search engine optimization comprises before we begin the first step on your path to becoming an SEO expert. Put another way, and it entails figuring out precisely what changes your website needs to make it more relevant to search queries. On-page and off-page SEO elements can be categorised for easy understanding into two groups. On the other hand, off-page SEO components are ranking variables that originate outside your domain. This primarily focuses on link building and attracting links to your content from other excellent websites.</p>
                            <p className="paragraph">But exactly how do you create links? Would we ask that and then not have another excellent ebook that thoroughly explains the answer?</p>
                            <p className="paragraph">In Addition to moving further, how about we begin on the strategy for dominating Search engine optimization?</p>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey={"first"}>
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pill" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey={"first"}><FontAwesomeIcon icon={faCircleDot} /> Learn the Fundamentals</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"second"}><FontAwesomeIcon icon={faCircleDot} /> Examine the technical side more thoroughly</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"third"}><FontAwesomeIcon icon={faCircleDot} /> Create an SEO process</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"fourth"}><FontAwesomeIcon icon={faCircleDot} /> Content Optimization</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"fifth"}><FontAwesomeIcon icon={faCircleDot} /> Create Backlinks</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"sixth"}><FontAwesomeIcon icon={faCircleDot} /> Keep in Mind Humans</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"seventh"}><FontAwesomeIcon icon={faCircleDot} /> Keep learning new things</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"eighth"}><FontAwesomeIcon icon={faCircleDot} /> Stay Current and Start Optimising</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey={"first"}>
                                        <div className="reasons-tab-content">
                                            <img src={fundamental} alt="Fundamental" className="reasons-content-icon" />
                                            <h3 className="heading3">Learn the Fundamentals</h3>
                                            <p className="paragraph">One of Google's most significant benefits is the <a href="https://dictionary.cambridge.org/dictionary/english/abundance" target="_blank" rel="noreferrer">abundance</a> of information it provides. The search engine giant is open about what factors into rankings and what doesn't, even though it won't reveal the formula that powers its algorithm.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"second"}>
                                        <div className="reasons-tab-content">
                                            <img src={technicalSeo} alt="Technical SEO" className="reasons-content-icon" />
                                            <h3 className="heading3">Examine the technical side more thoroughly</h3>
                                            <p className="paragraph">It's high time to work on the technical concepts once you're sure you understand SEO principles. The webmaster standards for preserving your site's SEO are an excellent place to enhance your education. It might help you get started with intermediate to advanced techniques to raise your ranking or solve other SEO issues.</p>
                                            <p className="paragraph">This includes tips on handling duplicate content and canonical pages, telling Google which pages to crawl and index using robots.txt files, and creating and uploading sitemaps.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"third"}>
                                        <div className="reasons-tab-content">
                                            <img src={seoProcess} alt="SEO Process" className="reasons-content-icon" />
                                            <h3 className="heading3">Create an SEO process</h3>
                                            <p className="paragraph">Ideally, you have a firm thought of what Website optimization is and how it works.</p>
                                            <p className="paragraph">Now that your SEO strategy has been developed and put into action, it's time to put your research into action. It is a rather large project, but Iosandweb comes to the rescue again!</p>
                                            <p className="paragraph">With month-by-month directions to help you assess results and raise your rankings, this is a step-by-step guide (including a template) for creating your year-long SEO strategy.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"fourth"}>
                                        <div className="reasons-tab-content">
                                            <img src={contentOptimization} alt="Content Optimization" className="reasons-content-icon" />
                                            <h3 className="heading3">Content Optimization</h3>
                                            <p className="paragraph">It is impossible to emphasise the importance of the material on your website. The reason your site exists in the first place and what draws visitors to it is its content and motivates them to take action. However, it's time to concentrate on your content when you've accomplished the backend, technical, and strategic work required to improve your rating.</p>
                                            <p className="paragraph">The last phase covered how vital your content strategy should have been to your entire plan, but this is where the action takes place.</p>
                                            <p className="paragraph">It is where you'll write the keyword-rich (but not stuffy) prose, establish a vital structure that both people and bots can understand, and enhance your content experience overall.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"fifth"}>
                                        <div className="reasons-tab-content">
                                            <img src={backlink} alt="Backlinks" className="reasons-content-icon" />
                                            <h3 className="heading3">Create Backlinks</h3>
                                            <p className="paragraph">Although it has already been mentioned, this merits its phase. Your inbound links tell Google a lot about the dependability of your website.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"sixth"}>
                                        <div className="reasons-tab-content">
                                            <img src={keepMind} alt="Keep in Mind Humans" className="reasons-content-icon" />
                                            <h3 className="heading3">Keep in Mind Humans</h3>
                                            <p className="paragraph">With all the technical aspects of SEO, it may be straightforward to lose sight of the primary goal of your website, which is to offer value to real people. And lest you believe that the Google search algorithm is entirely made up of various computer programs, remember that real people check the algorithm's work. To determine how well Google search results satisfy the querier's needs and assess the calibre of your content, they adhere to a detailed procedure.</p>
                                            <p className="paragraph">However, keep in mind that people are what matter most, despite your best attempts to optimise your title tags, photos, and responsive design.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"seventh"}>
                                        <div className="reasons-tab-content">
                                            <img src={newThings} alt="Keep learning new things" className="reasons-content-icon" />
                                            <h3 className="heading3">Keep learning new things</h3>
                                            <p className="paragraph">That was a lot; oh my. You may now unwind and take pride in your new sixth-degree SEO black belt rank, right? Not in the least. Search engines' algorithms are constantly changing.</p>
                                            <p className="paragraph">Some of these changes are so minor that you won't even notice them, while others significantly alter the results your queries provide. The most awful thing you can do when everything is constantly changing is to sit on your trees.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"eighth"}>
                                        <div className="reasons-tab-content">
                                            <img src={optimising} alt="Optimising" className="reasons-content-icon" />
                                            <h3 className="heading3">Stay Current and Start Optimising</h3>
                                            <p className="paragraph">As you can see, Seo Optimisation involves several different factors. And every day, even specialists pick up new skills. By now, you should have gained some knowledge of the fundamentals of SEO and where to find further information. It's time to put your new knowledge to work after reviewing a few connected resources. Regardless of whether you get results immediately, continue onward since Search engine optimization is a long distance race, not a run. Your modifications may only appear in search engine results for a few months (SERPs). This is partly because unethical SEO experts manipulated the system by employing spun articles and keyword stuffing (i.e., recreating content with different words). All you need is to collaborate with an expert team who can take care of all the Seo activities to elevate the level of your business growth with systematic approach.  The fundamental driver for your need to stay on top of the local Seo Agency is Google's never-ending push to deliver better, more accurate results.</p>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </div>

            {/* How SEO Work section */}
            <div className="section-development-process section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="text-center heading2">How SEO Works?</h2>
                            <div className="heading5 text-center">
                                The two pillars of SEO are number and quality. If your website page seo is optimized for front and back ends, it will increase visitors and climb the search engine results. Using a data-driven methodology, building SEO combines SEO components with Seo Expert in Sheffield.
                            </div>
                            <div className="heading5 text-center">
                                Let's look at how each of these influences SEO for digital marketing.
                            </div>
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
                                    <span className="badge badge-pill bg-light border"><FontAwesomeIcon icon={faCircle} /></span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Keyword analysis</h4>
                                        <p className="card-text">Words have such power, and some words may have an impact on your online ranking. Keywords must be properly selected and placed in your article in order to employ frequently sought terms while keeping a high level of content quality.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">
                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Creation of backlinks</h4>
                                        <p className="card-text">Link building are elements of your website that direct users to other trustworthy, top-notch sites. For example, including current, well-liked events straight from the source will improve your reputation.</p>
                                        <p className="card-text">Backlink building should be done carefully to avoid having your content become buried in a sea of competing websites, which could be problematic. For instance, since copying is a serious offense, it is not recommended to pass off another person's content as your own. Iosandweb can do backlink cleaning for your website. Backlink building can surely help your SEO, but it must be done carefully and morally with the Best Seo Company in Sheffield.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border"><FontAwesomeIcon icon={faCircle} /></span>
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
                                    <span className="badge badge-pill bg-light border"><FontAwesomeIcon icon={faCircle} /></span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="row">&nbsp;</div>
                                </div>
                            </div>

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Content creation</h4>
                                        <p className="card-text">The content is where your SEO genuinely works well. Through your content, you may directly address the audience of your present and potential clients. In this area, your keywords will help you build trust, engagement, authority, and consistency. The human factor of your customer-focused company and the data-driven statistics needed to maximize your online presence may be balanced by strong content with the Best Seo Agency in Sheffield.</p>
                                        <p className="card-text">A significant element of digital marketing is search engine marketing (SEM). Not really something terrible paid search advertising, otherwise called SEM or pay-per-click promoting efforts, utilize insightful information to help you increment your profit from venture (return for capital invested). Simply know that most purchasers can differentiate among paid and natural SERP results. In the end, we want to boost organic traffic.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>

            {/* Online Marketing Section */}
            <div className="online-marketing-section background-section section-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="heading2">What SEO Does for Online Marketing</h2>
                            <p className="paragraph">IosAndWeb's digital marketing experts are aware of how frightening SEO can be. Seo Optimisation is obviously important, but how do you even get started? Once you've started, how can you possibly tell if what you're doing is helping your business?</p>
                            <p className="paragraph">Search engines' intelligence is always being improved, so trying to trick them can only hurt you and get you in trouble. The sole motto of our team is to provide effective solutions for business development.</p>
                            <p className="paragraph">We are confident that our dedication to creating ethical SEO strategies will finally be rewarded. The goal of <i>Affordable Seo in Sheffield</i> is to increase the revenues as well as the multiplications of website footfalling. Let's spend some time looking at the data and facts to help you build strong relationships with search engines such as Google, Youtube, and others.</p>
                        </Col>
                        <Col lg={6}>
                            <img src={onlineMarketingImg} alt="Online Marketing" className="responsive-img" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Get started section */}
            <GetStarted 
                title={"Let's Start Building Web Solutions To Help Achieve Your Business Goals"}
                buttonText={"Get Started"}
                link={"/contact-us"}
            />

            {/* Conclusion section */}
            <div className="conclusion-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">Conclusion</h2>
                            <div className="heading5">With the best SEO agency like IosAndWeb, your business needs to grow with digital marketing or SEO so that your website stays on search results because it needs to be added to the first page. If you use SEO optimization, your local search engine rankings will keep rising, bringing you more qualified clients.  At Iosandweb, we know how critical successful search engine optimization is. Customers in Sheffield can rely on us as an SEO company.</div>

                            <div className="services-bottom-flex">
                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/seo-page-speed-optimization-services">
                                            <img src={pageSpeed} className="services-bottom-front-image" alt="SEO Page Speed" />
                                            <h4 className="heading4">SEO Page Speed Optimization</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/english-copywriting-and-proofreading-services">    
                                            <img src={proofreading} className="services-bottom-front-image" alt="Proofreading" />
                                            <h4 className="heading4">English Copywriting & Proofreading Services</h4>
                                        </a>
                                    </div>
                                </div>

                                <div className="services-bottom-wrap">
                                    <div className="services-bottom-div">
                                        <a href="/b2b-lead-generation-campaign-services">    
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

export default SEOServiceSheffield