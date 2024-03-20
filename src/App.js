import './App.css';
import Layout from './layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Services from './pages/Services';
import BlogDetails from './pages/BlogDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CancellationPolicy from './pages/CancellationPolicy';
import HowWeWork from './pages/HowWeWork';
import Team from './pages/Team';
import SoftwareDevelopment from './pages/Services/SoftwareDevelopment';
import WebDevelopment from './pages/Services/WebDevelopment';
import MobileAppDevelopment from './pages/Services/MobileAppDevelopment';
import WebDesigning from './pages/Services/WebDesigning';
import DigitalMarketing from './pages/Services/DigitalMarketing';
import PayPerClick from './pages/Services/PayPerClick';
import MagentoDevelopment from './pages/Services/MagentoDevelopment';
import ShopifyDevelopment from './pages/Services/ShopifyDevelopment';
import CRMDevelopmentHealthCare from './pages/Services/CRMDevelopmentHealthCare';
import GraphicDesign from './pages/Services/GraphicDesign';
import PdfToHtml from './pages/Services/PdfToHtml';
import SEOService from './pages/Services/SEOService';
import SocialMediaMarketing from './pages/Services/SocialMediaMarketing';
import SEOPageSpeedOptimization from './pages/Services/SEOPageSpeedOptimization';
import EnglishCopywritingProofreading from './pages/Services/EnglishCopywritingProofreading';
import B2BLeadGenerationCampaign from './pages/Services/B2BLeadGenerationCampaign';
import Career from './pages/Career';

import Ecommerce from './pages/Industries/eCommerce';
import RealEstate from './pages/Industries/RealEstate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:url" element={<BlogDetails />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/terms-and-conditions' element={<TermsConditions />} />
          <Route path='/cancellation-policy' element={< CancellationPolicy />} />
          <Route path='/how-we-work' element={<HowWeWork />} />
          <Route path='/iaw-team' element={<Team />} />
          <Route path='/careers' element={<Career />} />
          <Route path='*' element={<NoPage />} />

          {/* Services */}
          <Route path='/custom-software-development-company' element={<SoftwareDevelopment />} />
          <Route path='/web-development-services' element={<WebDevelopment />} />
          <Route path='/mobile-app-development-services' element={<MobileAppDevelopment />} />
          <Route path='/web-designing-services' element={<WebDesigning />} />
          <Route path='/digital-marketing-services' element={<DigitalMarketing />} />
          <Route path='/ppc-services' element={<PayPerClick />} />
          <Route path='/magento-development-services' element={<MagentoDevelopment />} />
          <Route path='/shopify-development-services' element={<ShopifyDevelopment />} />
          <Route path='/crm-development-for-healthcare-industry' element={<CRMDevelopmentHealthCare />} />
          <Route path='/graphic-designing-services' element={<GraphicDesign />} />
          <Route path='/pdf-to-html-designing-services' element={<PdfToHtml />} />
          <Route path='/seo-services' element={<SEOService />} />
          <Route path='/social-media-marketing-services' element={<SocialMediaMarketing />} />
          <Route path='/seo-page-speed-optimization-services' element={<SEOPageSpeedOptimization />} />
          <Route path='/english-copywriting-and-proofreading-services' element={<EnglishCopywritingProofreading />} />
          <Route path='/b2b-lead-generation-campaign-services' element={<B2BLeadGenerationCampaign />} />

          {/* Industries */}
          <Route path='/ecommerce-app-development' element={<Ecommerce />} />
          <Route path='/real-estate-app-development' element={<RealEstate />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
