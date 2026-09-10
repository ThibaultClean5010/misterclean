import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageSEO from './components/PageSEO.jsx';
import NotFound from './components/NotFound.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MobileContactBar from './components/MobileContactBar.jsx';
import Analytics from './components/Analytics.jsx';


const pageModules = import.meta.env.SSR ? {} : import.meta.glob('./pages/*.jsx');
const lazyPages = Object.fromEntries(Object.entries(pageModules).map(([file, loader]) => [file, lazy(loader)]));
function App({ serverPages = {} }) {
  function page(name) {
    const key = './pages/' + name + '.jsx';
    const Page = serverPages[key]?.default || lazyPages[key];
    return <Page />;
  }
  return (
    <>
      <PageSEO />
      <Analytics />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Suspense fallback={<div role="status" className="pt-32 pb-20 text-center">Loading page…</div>}><Routes>
            <Route path="/" element={page('HomePage')} />
            <Route path="/services" element={page('ServicesPage')} />
            <Route path="/services/after-builders-cleaning" element={page('AfterBuildersCleaningPage')} />
            <Route path="/services/commercial-cleaning" element={page('CommercialCleaningPage')} />
            <Route path="/services/window-cleaning" element={page('WindowCleaningPage')} />
            <Route path="/services/commercial-deep-cleaning" element={page('CommercialDeepCleaningPage')} />
            <Route path="/services/hospital-clinic-cleaning" element={<Navigate to="/services/window-cleaning" replace />} />
            <Route path="/services/heavy-duty-cleaning" element={<Navigate to="/services/commercial-deep-cleaning" replace />} />
            <Route path="/services/retail-cleaning" element={page('RetailCleaningPage')} />
            <Route path="/services/office-cleaning" element={page('OfficeCleaningPage')} />
            <Route path="/services/restaurant-cleaning" element={page('RestaurantCleaningPage')} />
            <Route path="/blog" element={page('BlogPage')} />
            <Route path="/blog/:slug" element={page('BlogArticlePage')} />
            <Route path="/projects" element={page('ProjectsPage')} />
            <Route path="/about" element={page('AboutPage')} />
            <Route path="/contact" element={page('ContactPage')} />
            <Route path="/privacy" element={page('PrivacyPage')} />
            <Route path="*" element={<NotFound />} />
          </Routes><ScrollToTop /></Suspense>
        </main>
        <Footer />
        <MobileContactBar />
      </div>
    </>
  );
}

export default App;
