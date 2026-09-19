import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageSEO from './components/PageSEO.jsx';
import NotFound from './components/NotFound.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MobileContactBar from './components/MobileContactBar.jsx';
import Analytics from './components/Analytics.jsx';
import { pageRoutes, pageModuleForPath } from './lib/pageRoutes.js';


const pageModules = import.meta.env.SSR ? {} : import.meta.glob('./pages/*.jsx');
const lazyPages = Object.fromEntries(Object.entries(pageModules).map(([file, loader]) => [file, lazy(loader)]));

export async function loadInitialPage(pathname) {
  const key = pageModuleForPath(pathname);
  return key && pageModules[key] ? { [key]: await pageModules[key]() } : {};
}

function App({ serverPages = {}, initialPages = {} }) {
  function page(name) {
    const key = './pages/' + name + '.jsx';
    const Page = serverPages[key]?.default || initialPages[key]?.default || lazyPages[key];
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
            {pageRoutes.map(route => <Route key={route.path} path={route.path} element={page(route.page)} />)}
            <Route path="/services/hospital-clinic-cleaning" element={<Navigate to="/services/window-cleaning" replace />} />
            <Route path="/services/heavy-duty-cleaning" element={<Navigate to="/services/commercial-deep-cleaning" replace />} />
            <Route path="/services/retail-cleaning" element={<Navigate to="/services/commercial-cleaning" replace />} />
            <Route path="/services/office-cleaning" element={<Navigate to="/services/commercial-cleaning" replace />} />
            <Route path="/services/restaurant-cleaning" element={<Navigate to="/services/commercial-cleaning" replace />} />
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
