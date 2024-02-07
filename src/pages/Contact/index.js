import React, { useState } from "react";
import './style.css';
import { Container, Row, Col, Button, Form, Spinner} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SEO from "../../components/SEO";

import 'react-phone-number-input/style.css';
import PhoneInput, {isPossiblePhoneNumber} from "react-phone-number-input";

// location images
import locIndia from '../../images/contact/cont-loc-india.svg';
import locUK from '../../images/contact/cont-loc-uk.svg';
import locUS from '../../images/contact/cont-loc-usa.svg';
import contactImage from '../../images/contact/contact-footer.avif';
import axios from "axios";

function Contact(){

    const [formerrors, setFormErrors] = useState({});
    const [formSuccess, setFormSuccess] = useState();
    const [formWarning, setFormWarning] = useState();
    const [phoneValue, setPhoneValue] = useState();
    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState({
        yourName: "",
        emailAddress: "",
        yourMessage: ""
    });

    const handleChange = (event) => {
        setValues((values) => ({
          ...values,
          [event.target.name]: event.target.value,
        }));
    };

    const validate = () => {
    
        let errors = {};
    
        //name field
        if (!values.yourName) {
          errors.yourName = "Name is required";
        }
    
        //email field
        if (!values.emailAddress) {
          errors.emailAddress = "Email address is required";
        } else if (!/\S+@\S+\.\S+/.test(values.emailAddress)) {
          errors.emailAddress = "Email address is invalid";
        }

        //Phone number field
        if (!phoneValue) {
            errors.phoneValue = "Phone number is required";
        } else if (isPossiblePhoneNumber(phoneValue) === false) {
            errors.phoneValue = "Phone number is invalid";
        }
    
        setFormErrors(errors);
    
        if (Object.keys(errors).length === 0) {
          return true;
        } else {
          return false;
        }
    };

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if (validate(values)) {
            setLoading(true);
            axios({
                method: "post",
                url: "https://iosandweb.net/api/contact-us.php",
                data: JSON.stringify({
                        yourName: values.yourName,
                        emailAddress: values.emailAddress,
                        phoneValue: phoneValue,
                        yourMessage: values.yourMessage
                    }),
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            })
            .then(function (response) {
                //handle success
                if (response.status === 200) {
                    setLoading(false);
                    setFormSuccess("Your message was sent successfully");
                    setValues({
                        yourName: "",
                        emailAddress: "",
                        yourMessage: ""
                    });
                    setPhoneValue('');
                    setTimeout(() => {
                        setFormSuccess('');
                    }, 5000);
                } else {
                    setFormWarning("Some error occured");
                    setTimeout(() => {
                        setFormWarning('');
                    }, 5000);
                }
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        }
    };

    return(
        <>
            <SEO
                title="Consult now: Get IosAndWeb Technologies Contact Number details"
                description='Our management is always ready to help to boost our customer business. Call us or Consult our IosAndWeb Technologies contact number.'
                name='IosAndWeb Technologies'
            />
            
            <div className="contact-banner banner-padding text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <div className="heading-wrapper">
                                <h1>We Are Here To <span className="text-highlight">Help You!</span></h1>
                                <div className="heading5">Discover A Bespoke, IosAndWeb Technologies an honest & results-driven web-mobile development and digital marketing agency. We deliver a personal, passionate & tailored web development and digital marketing service to each and every one of our clients.</div>
                                <a href="/services" className="consult-expert-btn">Our Services <FontAwesomeIcon icon={faChevronRight} /></a>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="contact-form">
                                <Form className="contactForm" id="contactForm" onSubmit={handleSubmit}>
                                    <Form.Group controlId="yourName" className="form-group">
                                        {/* <Form.Label>Name</Form.Label> */}
                                        <Form.Control type="text" placeholder="Name" value={values.yourName} name="yourName" onChange={handleChange} />
                                        {formerrors.yourName && (
                                            <p className="text-danger">{formerrors.yourName}</p>
                                        )}
                                    </Form.Group>
                                    <Form.Group controlId="emailAddress" className="form-group">
                                        <Form.Control type="text" placeholder="Email Address" value={values.emailAddress} name="emailAddress" onChange={handleChange} />
                                        {formerrors.emailAddress && (
                                            <p className="text-danger">{formerrors.emailAddress}</p>
                                        )}
                                    </Form.Group>
                                    <Form.Group controlId="phoneValue" className="form-group">
                                        <PhoneInput 
                                        id="phoneValue"
                                        name="phoneValue"
                                        placeholder="Phone Number" 
                                        international 
                                        defaultCountry="IN" 
                                        value={phoneValue} 
                                        onChange={setPhoneValue}
                                        className="form-control"/>

                                        {formerrors.phoneValue && (
                                            <p className="text-danger">{formerrors.phoneValue}</p>
                                        )}

                                    </Form.Group>
                                    <Form.Group controlId="yourMessage" className="form-group">
                                        <Form.Control as="textarea" rows={4} name="yourMessage" placeholder="Message or Questions" value={values.yourMessage} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="form-group form-submit-group">
                                        <Button type="submit" className="form-submit-btn btn btn-blue-border"> 
                                            {
                                                loading ?
                                                    <>
                                                        Sending 
                                                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                                    </>
                                                : 
                                                <>
                                                    Send
                                                    <FontAwesomeIcon icon={faChevronRight} /> 
                                                </>
                                            }
                                            
                                        </Button>
                                        <div className="message">{formSuccess ? <p className="text-success">{formSuccess}</p> : null}{formWarning ? <p className="text-warning">{formWarning}</p> : null}</div>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* address section */}

            <div className="contact-address-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">IosAndWeb Technologies around the Globe</h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6} lg={4}>
                            <div className="location-contact-div text-center">
                                <img src={locIndia} className="location-img" alt="India" />
                                <div className="heading5">India (HQ)</div>
                                <p className="paragraph">SCO 30, First Floor,
                                <br></br>Near Devaji Plaza, VIP Road,
                                <br></br>Zirakpur, PB (India)</p>
                                <p className="paragraph">
                                    <a href="mailto:info@iosandweb.net" className="contact-link">info@iosandweb.net</a>
                                    <a href="tel:+91-99882 23680" className="contact-link">+91-99882 23680 </a>
                                    <a href="tel:+91-99158 41204" className="contact-link">+91-99158 41204</a>
                                </p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="location-contact-div text-center">
                                <img src={locUK} className="location-img" alt="United Kingdom" />
                                <div className="heading5">United Kingdom</div>
                                <p className="paragraph">Sheffield City Centre,
                                <br></br>Sheffield, S1 1AA,
                                <br></br>United Kingdom</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="location-contact-div text-center">
                                <img src={locUS} className="location-img" alt="United States" />
                                <div className="heading5">United States</div>
                                <p className="paragraph">Suite #304, 11200 Manchaca, 
                                <br></br>Austin, Texas,
                                <br></br>United States, 78748</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

            {/* strategy session section */}

            <div className="strategy-session section-padding">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="heading2 text-center">Claim Your Free 20-Minute Strategy Session</h2>
                            <div className="heading5 text-center">It's Quick and Easy! FREE Spots Are Almost Gone For November. Book Now!</div>
                            <iframe src="https://calendly.com/iosandweb/free-consultation?embed_domain=iosandweb.net&embed_type=Inline&month=2022-11" width="100%" height="100%" title="Select a Date & Time - Calendly" data-origwidth="100%" data-origheight="100%" className="session-iframe"></iframe>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* footer banner section */}

            <div className="contact-footer section-padding">
                <div className="background_bg"></div>
                <Container>
                    <Row>
                        <Col className="contact-footer-div">
                            <div className="contact-footer-flex contact-left-col">
                                <h2 className="heading2">Enable Unmatched Digital Transformation Seamlessly</h2>
                                <div className="apply-btn btn-section">
                                    <a href="/how-we-work" className="btn btn-blue-border">Why Choose Us <FontAwesomeIcon icon={faChevronRight} /></a>
                                </div>
                            </div>
                            <div className="contact-footer-flex contact-right-col">
                                <img src={contactImage} alt="Contact Us" className="footer-contact-image" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Contact