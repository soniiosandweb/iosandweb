import React, { useEffect, useState } from "react";
import './style.css';
import {Container} from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

import logo from '../../images/IAW-logo-white.png';
import logoBlack from '../../images/IAW-black-logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// service menu
import mobileApp from '../../images/home/Mobile-app.svg';
import softwareDevelopment from '../../images/home/Software-Development.svg';
import digitalTransformation from '../../images/home/Digital-Transformation.svg';
import dataScience from '../../images/home/Data-Science-Analytics.svg';
import blockChain from '../../images/home/Blockchain-Services.svg';
import ideationDesign from '../../images/home/ideation-design.svg';

// industries menu
import eCommerceIcon from '../../images/eCommerce.png';
import realEstateIcon from '../../images/real-estate.png';
import generativeAI from '../../images/artificial-intelligence.png';

// about menu
import aboutIcon from '../../images/about-us.png';
import teamIcon from '../../images/our-team-icon.png';
import careerIcon from '../../images/career-icon.png';
import howWorkIcon from '../../images/how-we-work.png';

import OwlCarousel from "react-owl-carousel";

// Award images
import goodFirmLogo from '../../images/awards/good-firms-logo.webp';
import appFutura from '../../images/awards/appfutura.webp';
import itFirms from '../../images/awards/itfirm.webp';
import topDevelopment from '../../images/awards/top-development.webp';
import upWork from '../../images/awards/upwork.webp';


function Header() {

  const location = useLocation();
  const pathname = location.pathname;
  const locationValue = pathname.split("/");
  const [image, setImage] = useState(logo);
  const [fixed, setFixed] = useState("sticky-top");
  const [headerbg, setHeaderbg] = useState("white text-black");
  const [show, setShow] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showIndustry, setShowIndustry] = useState(false);

  const listenScrollEvent = () => {
    if (locationValue[1] === "") {
      if (window.scrollY > 50) {
        setImage(logoBlack);
        setHeaderbg("white text-black border-bottom");
      } else {
        setImage(logo);
        setHeaderbg("transparent text-white");
        handleResize();
      }
    } else {
      setHeaderbg("white text-black border-bottom");
    }
  };

  const changeheaderclass = () => {
    if (locationValue[1] === "") {
      setFixed("fixed-top text-white");
      setHeaderbg("transparent text-white");
      setImage(logo);
      handleResize();
    } else {
      setFixed("sticky-top text-black");
      setHeaderbg("white text-black border-bottom");
      setImage(logoBlack);
    }
  }
  const handleResize = () => {
    if(locationValue[1] === ""){
      if (window.innerWidth <= 991) {
        setFixed("sticky-top text-black");
        setHeaderbg("white text-black border-bottom");
        setImage(logoBlack);
      } else {
        setFixed("fixed-top text-white");
        setHeaderbg("transparent text-white");
        setImage(logo);
      }
    }
    
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    changeheaderclass();
    window.addEventListener("resize", handleResize)
    // eslint-disable-next-line
  }, []);
  

  return (
    <Navbar collapseOnSelect expand="lg" className={`header ${fixed} ${headerbg}`}>
      <Container className="header-container">
        <Navbar.Brand href="/">
          <img src={image} alt="IosAndWeb logo" className="responsive logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FontAwesomeIcon icon={faBars} className="bars-icon" />
          <FontAwesomeIcon icon={faClose} className="close-icon" />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="container">
            <Dropdown 
              as={NavItem} 
              show={show}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              onToggle={() => setShow(!show)}
            >
              <Dropdown.Toggle as={NavLink}>Services</Dropdown.Toggle>
              <Dropdown.Menu>
                
                <div className="header-submenu-wrap">
                  <div className="header-submenu-left">
                    <ul className="header-submenu-items">
                      <li className="submenu-item">
                        <Dropdown.Item href='/custom-software-development-company'>
                          <div className="bg-red submenu-img">
                            <img src={softwareDevelopment} className="service-img" alt="Software Development" /> 
                          </div>
                          Software Development
                          <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                        </Dropdown.Item>
                      </li>
                      <li className="submenu-item">
                        <Dropdown.Item href='/web-development-services'>
                          <div className="bg-purple submenu-img">
                            <img src={digitalTransformation} className="service-img" alt="Web Development" /> 
                          </div>
                          Web Development
                          <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                        </Dropdown.Item>
                      </li>
                      <li className="submenu-item">
                        <Dropdown.Item href='/mobile-app-development-services'>
                          <div className="bg-orange submenu-img">
                            <img src={mobileApp} className="service-img" alt="Mobile App" /> 
                          </div>
                          Mobile App Development
                          <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                        </Dropdown.Item>
                      </li>
                      <li className="submenu-item">
                        <Dropdown.Item href='https://www.blockchain77.com/services/' target="_blank" rel="noreferrer">
                          <div className="bg-blue submenu-img">
                            <img src={blockChain} className="service-img" alt="Blockchain Services" /> 
                          </div>
                          Blockchain Development
                          <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                        </Dropdown.Item>
                      </li>
                      <li className="submenu-item">
                        <Dropdown.Item href='/web-designing-services'>
                          <div className="bg-green submenu-img">
                            <img src={ideationDesign} className="service-img" alt="Web/Graphic Design" /> 
                          </div>
                          Web / Graphic Design
                          <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                        </Dropdown.Item>
                      </li>
                      <li className="submenu-item">
                        <Dropdown.Item href='/digital-marketing-services'>
                          <div className="bg-pink submenu-img">
                            <img src={dataScience} className="service-img" alt="Digital Marketing" /> 
                          </div>
                          Digital Marketing
                          <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                        </Dropdown.Item>
                      </li>
                    </ul>
                  </div>
                  <div className="header-submenu-right">
                    <OwlCarousel className="owl-theme header-awards-carousel" loop autoplay={true} autoplayTimeout={1500} nav={false} dots={true} items={1} center={true} >
                      <div className="item">
                        <div className="award-item-block">
                          <div className="award-item-logo">
                            <img src={goodFirmLogo} alt="App development" />
                          </div>
                          <div className="award-item-text">
                            <span>App development company of the year</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="award-item-block">
                            <div className="award-item-logo">
                              <img src={appFutura} alt="App solution" />
                            </div>
                            <div className="award-item-text">
                              <span>Most promising mobile app solution provider</span>
                            </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="award-item-block">
                          <div className="award-item-logo">
                            <img src={itFirms} alt="India's Growth Champions" />
                          </div>
                          <div className="award-item-text">
                            <span>India's Growth Champions in IT</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="award-item-block">
                          <div className="award-item-logo">
                            <img src={upWork} alt="India's Growth Champions" />
                          </div>
                          <div className="award-item-text">
                            <span>Software development company of the year</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="award-item-block">
                          <div className="award-item-logo">
                            <img src={topDevelopment} alt="Tech Company Of The Year" />
                          </div>
                          <div className="award-item-text">
                            <span>Tech Company Of The Year</span>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
                
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link href="/portfolio" className={locationValue[1] === "portfolio" ? "active" : ""}>Portfolio</Nav.Link>

            <Dropdown 
              className="less-dropdown"
              as={NavItem} 
              show={showIndustry}
              onMouseEnter={() => setShowIndustry(true)}
              onMouseLeave={() => setShowIndustry(false)}
              onToggle={() => setShowIndustry(!showIndustry)}
            >
              <Dropdown.Toggle as={NavLink}>Industries</Dropdown.Toggle>
              <Dropdown.Menu>
                
                <ul className="header-submenu-items">
                  <li className="submenu-item">
                    <Dropdown.Item href='/ecommerce-app-development'>
                      <div className="bg-pink submenu-img">
                        <img src={eCommerceIcon} className="service-img" alt="eCommerce" /> 
                      </div>
                      eCommerce
                      <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                    </Dropdown.Item>
                  </li>
                  <li className="submenu-item">
                    <Dropdown.Item href="/real-estate-app-development">
                      <div className="bg-green submenu-img">
                        <img src={realEstateIcon} className="service-img" alt="Real Estate" />
                      </div>
                      Real Estate
                      <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                    </Dropdown.Item>
                  </li>
                  <li className="submenu-item">
                    <Dropdown.Item href="/generative-ai-development">
                      <div className="bg-orange submenu-img">
                        <img src={generativeAI} className="service-img" alt="Generative AI" />
                      </div>
                      Generative AI
                      <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                    </Dropdown.Item>
                  </li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown 
              className="less-dropdown"
              as={NavItem} 
              show={showAbout}
              onMouseEnter={() => setShowAbout(true)}
              onMouseLeave={() => setShowAbout(false)}
              onToggle={() => setShowAbout(!showAbout)}
            >
              <Dropdown.Toggle as={NavLink}>Company</Dropdown.Toggle>
              <Dropdown.Menu>
                <ul className="header-submenu-items">
                  <li className="submenu-item">
                    <Dropdown.Item href='/about-us'>
                      <div className="bg-pink submenu-img">
                        <img src={aboutIcon} className="service-img" alt="About Us" /> 
                      </div>
                      About Us
                      <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                    </Dropdown.Item>
                  </li>
                  <li className="submenu-item">
                    <Dropdown.Item href='/iaw-team'>
                      <div className="bg-green submenu-img">
                        <img src={teamIcon} className="service-img" alt="IAW Team" /> 
                      </div>
                      IAW Team
                      <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                    </Dropdown.Item>
                  </li>
                  <li className="submenu-item">
                    <Dropdown.Item href='/careers'>
                      <div className="bg-orange submenu-img">
                        <img src={careerIcon} className="service-img" alt="Career" /> 
                      </div>
                      Career
                      <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                    </Dropdown.Item>
                  </li>
                  <li className="submenu-item">
                    <Dropdown.Item href='/how-we-work'>
                      <div className="bg-blue submenu-img">
                        <img src={howWorkIcon} className="service-img" alt="How we work" /> 
                      </div>
                      How We Work
                      <FontAwesomeIcon icon={faArrowRight} className="close-icon" />
                    </Dropdown.Item>
                  </li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link href="/blog" className={locationValue[1] === "blog" ? "active" : ""}>Blog</Nav.Link>
            <Nav.Link href="/contact-us" className={locationValue[1] === "contact" ? "btn active" : "btn"}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;