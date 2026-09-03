import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, ClipboardList, Users, Clock, CheckCircle } from 'lucide-react';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceNavigation from '@/components/ServiceNavigation.jsx';
import CertificationBadge from '@/components/CertificationBadge.jsx';
import GuaranteeCard from '@/components/GuaranteeCard.jsx';
import ServiceCTA from '@/components/ServiceCTA.jsx';
import CertificationsSection from '@/components/CertificationsSection.jsx';

const CommercialCleaningPage = () => {
  return (
    <>
      <Helmet>
        <title>Commercial Cleaning Services Adelaide | MisterClean</title>
        <meta name="description" content="Professional commercial cleaning in Adelaide for offices, retail, warehouses. Customized B2B cleaning solutions, reliable service, competitive rates." />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17867444680"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17867444680');
          `}
        </script>
      </Helmet>

      <ServiceHero 
        title="Commercial Cleaning Services for Adelaide Businesses"
        tagline="Elevate your corporate environment. Consistent, discreet, and immaculate cleaning protocols tailored specifically for professional B2B spaces."
        image="https://images.unsplash.com/photo-1612396970400-2f359e5c5bb3"
      />
      
      <ServiceNavigation />
      <CertificationsSection />

      <main>
        {/* Intro & Certifications */}
        <section className="service-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-3xl font-bold mb-6">Commercial Cleaning Services for Adelaide Businesses</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The cleanliness of your commercial facility directly impacts employee productivity, operational health, and the critical first impressions formed by visiting clients. Whether you need reliable office maintenance, specialized <Link to="/services/hospital-clinic-cleaning" className="text-primary hover:underline">hospital/clinic cleaning</Link>, or robust <Link to="/services/heavy-duty-cleaning" className="text-primary hover:underline">heavy-duty cleaning</Link>, we have a dedicated solution for you.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We don't just supply cleaners; we implement a fully managed facility hygiene system. Backed by rigorous Service Level Agreements (SLAs), regular auditing, and dedicated account management, we ensure your premises consistently reflect the high standards of your organization.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CertificationBadge 
                  icon={ShieldCheck}
                  title="Liability Insured"
                  description="$20M coverage for commercial properties"
                  index={0}
                />
                <CertificationBadge 
                  icon={ClipboardList}
                  title="Audited Standards"
                  description="Monthly KPI checks by operations managers"
                  index={1}
                />
                <CertificationBadge 
                  icon={Users}
                  title="Police Cleared Staff"
                  description="Vetted personnel for secure environments"
                  index={2}
                />
                <CertificationBadge 
                  icon={CheckCircle}
                  title="Health Compliant"
                  description="Infection control & sanitization protocols"
                  index={3}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Customization & Frequency Options */}
        <section className="service-section-alternate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Flexible Service Scheduling</h2>
              <p className="text-lg text-muted-foreground">
                We align our operations with your business hours to ensure zero disruption to your daily workflow. Discover our specialized Office Cleaning and Retail Cleaning solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Office Cleaning */}
              <div className="bg-white p-8 md:p-10 rounded-2xl border shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Office Cleaning</h3>
                <p className="text-muted-foreground mb-8 flex-1 text-base leading-relaxed">
                  Ideal for high-traffic corporate offices requiring continuous upkeep, waste management, and touchpoint sanitization on a daily basis.
                </p>
                <ul className="space-y-3 text-sm font-medium text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5"/> 
                    <span>Desk and workstation sanitization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5"/> 
                    <span>Conference room deep cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5"/> 
                    <span>Break room and kitchen cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5"/> 
                    <span>Restroom deep cleaning and restocking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5"/> 
                    <span>Carpet and floor maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5"/> 
                    <span>Window and glass cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5"/> 
                    <span>Trash removal and recycling management</span>
                  </li>
                </ul>
              </div>

              {/* Retail Cleaning */}
              <div className="bg-white p-8 md:p-10 rounded-2xl border shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Retail Cleaning</h3>
                <p className="text-muted-foreground mb-8 flex-1 text-base leading-relaxed">
                  Comprehensive cleaning solutions for retail spaces, ensuring floors, displays, and customer areas are pristine to boost sales and presentation.
                </p>
                <ul className="space-y-3 text-sm font-medium text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5"/> 
                    <span>Display case and shelf cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5"/> 
                    <span>Fitting room sanitization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5"/> 
                    <span>Checkout counter and POS system cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5"/> 
                    <span>Floor buffing and waxing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5"/> 
                    <span>Window and storefront cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5"/> 
                    <span>Merchandise area dusting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5"/> 
                    <span>Customer area disinfection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees & SLAs */}
        <section className="service-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16">Key Benefits & Guarantees</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <GuaranteeCard 
                icon={ClipboardList}
                title="Service Level Agreement (SLA) Commitment"
                description="We operate under strict, customized SLAs. Our transparent reporting ensures you receive the exact standard of cleaning promised, backed by regular management audits."
                index={0}
              />
              <GuaranteeCard 
                icon={ShieldCheck}
                title="Consumables & Inventory Management"
                description="Never run out of supplies. We monitor, supply, and restock all washroom and kitchen consumables seamlessly as part of our comprehensive commercial contracts."
                index={1}
              />
            </div>
          </div>
        </section>
        <ServiceCTA serviceName="Commercial Cleaning" />
      </main>
    </>
  );
};

export default CommercialCleaningPage;