import React from "react";
import './style.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import SEO from "../../../components/SEO";
import NumbersCards from "../../../components/NumbersCards";
import ContactForm from "../../../components/ContactForm";
import GetStarted from "../../../components/GetStarted";

// reasons to choose images
import reactNative from '../../../images/services/mobile-app-development/react-native.png';
import flutter from '../../../images/services/mobile-app-development/flutter.png';
import ionic from '../../../images/services/mobile-app-development/ionic.png';
import cordova from '../../../images/services/mobile-app-development/cordova.png';
import unity from '../../../images/services/mobile-app-development/unity.png';
import xamarin from '../../../images/services/mobile-app-development/xamarin.png';

function MobileAppDevelopment(){
    return(
        <>
            <SEO
                title='Mobile App Development Services | Contact Now'
                description='We offer mobile app development services in Birmingham, London and many areas of UK. Hire experienced mobile app developer at IAW.'
                name='IosAndWeb Technologies'
            />

            {/* Web Development Banner */}
            <div className="mobile-app-development-banner banner-padding text-white position-relative">
                <Container className="z-index-1">
                    <Row>
                        <Col lg={8} xl={6}>
                            <div className="heading-wrapper full-width">
                                <h1>Mobile <span className="text-highlight">App Development</span> Services</h1>
                                <div className="heading5">Your dreams have no limits. What do you think where your dreams can live except your imagination. The right place may be an Apple App Store and Google Play Store. At IosAndWeb Technologies we provide <b>mobile app development services</b> according to the requirements of our clients and their budget.</div>
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
                            <h2 className="heading2 text-center">Mobile App development Company</h2>
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
                                <h2>Mobile App development Services - Let's Discuss</h2>
                            </div>
                            <div className="leadsubtxt">
                                Instead of designing apps for just one platform, cross-platform app development is the ideal option for businesses to create apps more quickly. Discuss your project with our certified team of developers and get quote <b>Mobile app development services</b>. 
                                <br/>As the top company offering mobile app development services, we talked with our cross-platform app developers and wrote a comprehensive guide emphasising cross-platform app frameworks and the advantages of cross-platform apps with the help of Mobile app development company. You may fast release your software to the market with this. Let's start now.
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

            {/* Reasons to choose section */}
            <div className="reasons-to-choose framework-sections section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2">6 Best Cross-Platform Mobile App Development Frameworks</h2>
                            <div className="heading5">The best cross-platform app development frameworks are covered in this part to assist you in creating reliable cross-platform apps for your small or large-scale business. These appear to be the most used cross-platform frameworks worldwide, according to a Statista analysis.</div>
                        </Col>
                    </Row>
                    <div className="reasons-tab-block">
                        <Tab.Container id="reasons-tab" defaultActiveKey="first">
                            <div className="reasons-tab-left reasons-tab-cols">
                                <Nav variant="pills" className="reasons-tab flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><img src={reactNative} alt="React Native" className="reasons-content-icon" />React Native</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><img src={flutter} alt="Flutter" className="reasons-content-icon" />Flutter</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third"><img src={ionic} alt="Ionic" className="reasons-content-icon" />Ionic</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth"><img src={cordova} alt="Cordova" className="reasons-content-icon" />Cordova</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fifth"><img src={unity} alt="Unity" className="reasons-content-icon" />Unity</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="sixth"><img src={xamarin} alt="Xamarin" className="reasons-content-icon" />Xamarin</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="reasons-tab-right reasons-tab-cols">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">React Native</h3>
                                            <p className="paragraph">Ever wonder if developing mobile apps with React Native is a smart idea? For the purpose of building cross-platform iOS and Android application development, Facebook developed this open-source framework. Although the application functionality is handled in JavaScript, the user interface is entirely native. As a result, numerous sacrifices typically associated with HTML5-based UI are readily avoided with React Native. With the same UI components and codebase, you can quickly create a cross-platform project using React Native. React Native may also be used to build a brand-new cross-platform software from scratch or to integrate it into your current Android and iOS apps with the help of the <b>best mobile development agency.</b></p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Flutter</h3>
                                            <p className="paragraph">The greatest cross-platform app framework available today allows you to create apps for both iOS and Android without having to create separate codebases. In actuality, web programmes for browsers, Linux and Windows, may all be created using the same codebase. In the marketplace, Flutter is well-known. Currently, Google uses it for both the Google Home hub's user interface and the Google Assistant's modules. For a consistent feel and look in mobile and web apps, large eCommerce juggernauts like eBay and Alibaba Group, in addition to Google, also adopt Flutter. These apps can be used for all types of industries like <b>mobile app development for restaurants.</b></p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Ionic</h3>
                                            <p className="paragraph">Ionic is an open-source SDK that enables developers to create top-notch cross-platform applications with realistic native user interfaces. It includes numerous mobile-optimised UI elements and motions that enable you to create powerful cross-platform applications.
                                            <br />
                                            Using cutting-edge web development tools like CSS and HTML, Ionic enables you to create cross-platform applications that are then delivered through app stores for download.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Cordova</h3>
                                            <p className="paragraph">Apache Cordova, formerly known as PhoneGap, enables app developers to create hybrid mobile apps utilising open-source standards including JavaScript, CSS3, and HTML5. To access the features of the device, you use Cordova, which converts your HTML/JavaScript application into a native container. This allows you to quickly target any sort of device and publish your cross-platform programme on the appropriate platforms with only one set of code.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Unity</h3>
                                            <p className="paragraph">It is a tool for cross-platform mobile development that creates gaming apps. Due to its simplified interface and workflow, it is currently one of the most used game engines for creating apps for the Android and iOS platforms.
                                            <br/>
                                            It is not, however, restricted to the creation of video games. Additionally, Unity can be used for animation, architectural visualisation, and movie previsualization. Additionally, Unity uses a simple and quick user interface to simplify the development process.
                                            <br/>
                                            Using Unity, users can drag and drop objects to add an image or button, change the font size, or do other things. Additionally, working with Unity requires less code because you won't need a background in XML to design UIs.</p>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth">
                                        <div className="reasons-tab-content">
                                            <h3 className="heading3">Xamarin</h3>
                                            <p className="paragraph">You may design a consistent user interface (UI) across platforms or create apps for iOS, Android, and Windows using the tools and technologies provided by Xamarin. You can get the best native performance from Xamarin by utilising the platform-specific hardware.
                                            <br />
                                            Since Xamarin also adheres to the “write once, run anywhere” philosophy, you may build an app with less time and money by sharing the majority of the code. Additionally, you may access native APIs and 2D visuals and utilise your preferred frameworks, tools, and libraries.</p>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </div>

            {/* Development process section */}
            <div className="section-development-process section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Our Process Of Mobile App Development</h2>
                            <div className="heading5 text-center">Use the advantages of hybrid mobile app development to hasten the development and release of your app. So if you're looking forward to Mobile app developer near me, you can Contact our skilled mobile app developers if you need assistance evaluating your app idea or creating a cross-platform app.</div>
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
                                        <h4 className="card-title">Mobile app strategy</h4>
                                        <p className="card-text">IosAndWeb Technologies a <b>Mobile app development company</b> showcase a portion of our ability and capacity. We know how much your dream is important for you and the conversion of your vision into reality is a hard task to do. We have worked on numerous projects and with every project we understood that each project is different from one another and requires special attention. That is why we spend enough time in planning and researching.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">User Experience Design</h4>
                                        <p className="card-text">There is a solution to every problem and every problem can be solved in a new and creative way. Designers and Prototype Engineers at IosAndWeb has solutions to your problems. They will show you a different angle to solve your problem. Also, they will let you know new ways to approach your <b>mobile app development</b> solutions. Our android developer and IOS developer will help you to increase customers retention rates and app downloads.</p>
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
                                        <h4 className="card-title">Mobile app development</h4>
                                        <p className="card-text">Developing a mobile app takes a lot of effort and intelligence. IosAndWeb Technologies got an excellent team of mobile app developers which assures that there is full customer satisfaction and user's convenience. Our team has completed more than 300 in both apps and this is the least amount that anyone can expect. As there is a saying that excellence knows no boundaries. IAW comes on top for <b>Android app development company</b>.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Testing</h4>
                                        <p className="card-text">Before a mobile app project is finally presented to our clients there are a number of tests done on that mobile app. We have a team of quality analysts who ensures that the application is tested a number of times and decide whether the product is ready to present or any additional changes are meant to be done.</p>
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
                                        <h4 className="card-title">Launch</h4>
                                        <p className="card-text">Before the final release of the application, we ensure that everything is perfect for your app. After ensuring our both Android mobile developer and IOS app developers will launch your application on play store or app store. The launch of the mobile application is only done when the client's requirements are fulfilled and the application has all the desired <b>functionalities</b>. Except for this the reason behind the success of IosAndWeb Technologies as the best mobile app development company, we provide installation guides, test cases, and users guide for their convenience.</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row className="no-gutters">

                            <div className="col-lg py-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Support & Maintenance</h4>
                                        <p className="card-text">We ensure that Mobile app development Services provide by us get proper support and maintenance 24*7. We provide services even after the launch of the application. Whenever our clients want any assistance we're always there to provide our services.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-1 text-center flex-column d-none d-lg-flex dots-center">
                                <div className="row h-50">
                                    <div className="col">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                                <h5 className="m-2">
                                    <span className="badge badge-pill bg-light border">06</span>
                                </h5>
                                <div className="row h-50">
                                    <div className="col border-right">&nbsp;</div>
                                    <div className="col">&nbsp;</div>
                                </div>
                            </div>
                            <div className="col-lg"></div>
                            
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
                            <h2 className="heading2">Final Reflections</h2>
                            <div className="heading5"><b>IosAndWeb Technologies,</b> the best mobile app development company ensures the consistency and smooth running of your mobile application. We also provide periodic maintenance. Besides it, we provide both IOS app development services and Android mobile app development. To acquire our services all that you need to do is contact us and to know more about us follow our Facebook, LinkedIn and Twitter handles.</div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default MobileAppDevelopment;