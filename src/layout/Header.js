import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import { useLocation } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/IAW-logo-white.png';
import logoBlack from '../images/IAW-black-logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function Header() {

  const location = useLocation();
  const pathname = location.pathname;
  const locationValue = pathname.split("/");
  const [image, setImage] = useState(logo);
  const [fixed, setFixed] = useState("sticky-top");
  const [headerbg, setHeaderbg] = useState("white text-black");

  const listenScrollEvent = () => {
    if (locationValue[1] === "") {
      if (window.scrollY > 50) {
        setImage(logoBlack);
        setHeaderbg("white text-black");
      } else {
        setImage(logo);
        setHeaderbg("transparent text-white");
        handleResize();
      }
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
      setHeaderbg("white text-black");
      setImage(logoBlack);
    }
  }
  const handleResize = () => {
    if(locationValue[1] === ""){
      if (window.innerWidth <= 991) {
        setFixed("sticky-top text-black");
        setHeaderbg("white text-black");
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
      <Container>
        <Navbar.Brand href="/ios">
          <img src={image} alt="IosAndWeb logo" className="responsive logo" />
        </Navbar.Brand>



        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FontAwesomeIcon icon={faBars} className="bars-icon" />
          <FontAwesomeIcon icon={faClose} className="close-icon" />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link href="/about" className={locationValue[1] === "about" ? "active" : ""}>About</Nav.Link>
            <Nav.Link href="/services" className={locationValue[1] === "services" ? "active" : ""}>Services</Nav.Link>
            <Nav.Link href="/portfolio" className={locationValue[1] === "portfolio" ? "active" : ""}>Portfolio</Nav.Link>
            <Nav.Link href="/blog" className={locationValue[1] === "blog" ? "active" : ""}>Blog</Nav.Link>
            <Nav.Link href="/contact" className={locationValue[1] === "contact" ? "btn active" : "btn"}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;