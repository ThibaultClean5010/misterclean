import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Building2, CalendarDays, ClipboardCheck } from 'lucide-react';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceNavigation from '@/components/ServiceNavigation.jsx';
import ProcessStep from '@/components/ProcessStep.jsx';
import GuaranteeCard from '@/components/GuaranteeCard.jsx';
import ServiceCTA from '@/components/ServiceCTA.jsx';
import CertificationsSection from '@/components/CertificationsSection.jsx';

const CommercialDeepCleaningPage = () => {
  const steps = [
    { title: 'Premises Assessment', description: 'Walk through your requirements with us. We agree the rooms, surfaces, access and level of cleaning before work begins.' },
    { title: 'Workspaces and Shared Areas', description: 'Thoroughly clean accessible desks, shelving, ledges and shared surfaces, with attention to dust and dirt that routine cleaning can miss.' },
    { title: 'Kitchens and Staff Rooms', description: 'Detail worktops, sinks, splashbacks and cupboard exteriors. Any additional appliance or cupboard interiors are agreed as part of your scope.' },
    { title: 'Bathrooms and Amenities', description: 'Clean toilets, basins, fixtures and accessible tiled surfaces, paying attention to accumulated dirt and frequently used areas.' },
    { title: 'Floors, Edges and Corners', description: 'Clean floors using methods suited to the surface, with extra attention to edges, corners and skirting boards.' },
    { title: 'Glass, Touchpoints and Final Details', description: 'Finish accessible internal glass, doors, handles and switches, then review the agreed areas so your premises are clean and presentable.' }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Deep Cleaning Adelaide | MisterClean</title>
        <meta name="description" content="Comprehensive commercial deep cleaning in Adelaide. Refresh workspaces, kitchens, bathrooms and shared areas with a scope tailored to your premises." />
        <link rel="canonical" href="https://www.mistercleanb2b.com/services/commercial-deep-cleaning" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JRM3569S3G"></script>
        <script>{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-JRM3569S3G');`}</script>
      </Helmet>
      <ServiceHero
        title="Commercial Deep Cleaning in Adelaide"
        tagline="Bring your premises back to a clean, presentable condition with a comprehensive deep clean. A fresh start for offices, shops and other commercial spaces."
        image="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
      />
      <ServiceNavigation />
      <CertificationsSection />
      <section className="service-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-6">A Complete Refresh for Your Premises</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              When everyday cleaning is no longer enough, a detailed clean helps bring your premises back to a presentable condition. We focus on accumulated dirt, overlooked areas and the finishing details across your agreed rooms and surfaces.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Arrange a fresh start before reopening, prepare for a new occupier or add a periodic deep clean to your <Link to="/services/commercial-cleaning" className="text-primary hover:underline">regular commercial cleaning</Link>. For work following construction or renovation, explore our dedicated <Link to="/services/after-builders-cleaning" className="text-primary hover:underline">after-builders cleaning</Link> service.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <GuaranteeCard icon={Building2} title="One-off Premises Reset" description="Refresh a space after a period of inactivity, before handover or when it needs more attention than routine maintenance." index={0} />
            <GuaranteeCard icon={CalendarDays} title="Periodic Deep Cleans" description="Plan a detailed clean around your business hours and the areas that need extra attention over time." index={1} />
            <GuaranteeCard icon={ClipboardCheck} title="An Agreed Scope" description="Know which areas and tasks are included before the clean, with any additional requirements discussed in advance." index={2} />
          </div>
        </div>
      </section>
      <section className="service-section-alternate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">A Detailed Clean from Workspaces to Amenities</h2>
            <p className="text-lg text-muted-foreground">A comprehensive approach tailored to the condition and use of your premises.</p>
          </div>
          <div className="pl-4 md:pl-0">
            {steps.map((step, index) => <ProcessStep key={step.title} number={index + 1} {...step} isLast={index === steps.length - 1} />)}
          </div>
        </div>
      </section>
      <ServiceCTA serviceName="Commercial Deep Cleaning" />
    </>
  );
};

export default CommercialDeepCleaningPage;
