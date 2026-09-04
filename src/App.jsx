import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogArticlePage from './pages/BlogArticlePage.jsx';

import AfterBuildersCleaningPage from './pages/AfterBuildersCleaningPage.jsx';
import CommercialCleaningPage from './pages/CommercialCleaningPage.jsx';
import HospitalClinicCleaningPage from './pages/HospitalClinicCleaningPage.jsx';
import HeavyDutyCleaningPage from './pages/HeavyDutyCleaningPage.jsx';
import RetailCleaningPage from './pages/RetailCleaningPage.jsx';
import OfficeCleaningPage from './pages/OfficeCleaningPage.jsx';
import RestaurantCleaningPage from './pages/RestaurantCleaningPage.jsx';

function App() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://misterclean.com.au/#business",
        "name": "MisterClean",
        "image": "https://horizons-cdn.hostinger.com/dcd817cd-3e58-4158-995e-355bc699404e/9b93ef41ac66b43635c4a176b5034d7b.png",
        "telephone": "0474597325",
        "email": "mistercleanadelaide@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Adelaide",
          "addressRegion": "SA",
          "addressCountry": "AU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -34.9285,
          "longitude": 138.6007
        },
        "areaServed": "Adelaide Metropolitan Area",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "priceRange": "$$"
      }
    ]
  };

  return (
    <Router>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
      </Helmet>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/after-builders-cleaning" element={<AfterBuildersCleaningPage />} />
            <Route path="/services/commercial-cleaning" element={<CommercialCleaningPage />} />
            <Route path="/services/hospital-clinic-cleaning" element={<HospitalClinicCleaningPage />} />
            <Route path="/services/heavy-duty-cleaning" element={<HeavyDutyCleaningPage />} />
            <Route path="/services/retail-cleaning" element={<RetailCleaningPage />} />
            <Route path="/services/office-cleaning" element={<OfficeCleaningPage />} />
            <Route path="/services/restaurant-cleaning" element={<RestaurantCleaningPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 pt-20"><h1 className="text-6xl font-bold mb-4">404</h1><a href="/" className="text-primary hover:underline">Return Home</a></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
