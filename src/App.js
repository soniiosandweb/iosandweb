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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:url" element={<BlogDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/terms-conditions' element={<TermsConditions />} />
          <Route path='/cancellation-policy' element={< CancellationPolicy />} />
          <Route path='/how-we-work' element={<HowWeWork />} />
          <Route path='/our-team' element={<Team />} />
          <Route path='*' element={<NoPage />} />

          {/* Services */}
          <Route path='/software-development-services' element={<SoftwareDevelopment />} />
          <Route path='/web-development-services' element={<WebDevelopment />} />
          <Route path='/mobile-app-development-services' element={<MobileAppDevelopment />} />
          <Route path='/web-designing-services' element={<WebDesigning />} />
          <Route path='/digital-marketing-services' element={<DigitalMarketing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
