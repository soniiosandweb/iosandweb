import { useLocation } from "react-router-dom"
import SEO from "../../../../components/SEO";
import './style.css';
import { Col, Container, Row } from "react-bootstrap";

function SEOServiceSheffield(){

    const location = useLocation();

    return(
        <>
            <SEO
                title={"SEO services in Sheffield - Get Quote - IosAndWeb Technologies"}
                description={"IosAndWeb Technologies is the best Digital Marketing Agency Providing SEO services in Sheffield by certified experts .Contact us for quote."}
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
        </>
    )
}

export default SEOServiceSheffield