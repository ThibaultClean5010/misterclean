import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CalendarDays, ClipboardCheck } from 'lucide-react';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceNavigation from '@/components/ServiceNavigation.jsx';
import ProcessStep from '@/components/ProcessStep.jsx';
import GuaranteeCard from '@/components/GuaranteeCard.jsx';
import ServiceCTA from '@/components/ServiceCTA.jsx';
import CertificationsSection from '@/components/CertificationsSection.jsx';
import ProjectCarousel from '@/components/ProjectCarousel.jsx';
import { washroomComparisonOrder } from '@/data/projects.js';

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
      <ServiceHero
        title="Commercial Deep Cleaning in Adelaide"
        tagline="Deep cleaning for offices, shops and other business premises. Floors, kitchens, bathrooms and the details that need more than a regular clean."
      />
      <ServiceNavigation />
      <CertificationsSection />
      <section className="service-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-6">A Complete Refresh for Your Premises</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              If dirt has built up or parts of your workplace need extra attention, tell us what needs doing. We’ll discuss the rooms, surfaces and condition of the space, then list the work in your quote.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Arrange a fresh start before reopening, prepare for a new occupier or add a periodic deep clean to your <Link to="/services/commercial-cleaning" className="text-primary hover:underline">regular commercial cleaning</Link>. For work following construction or renovation, explore our dedicated <Link to="/services/after-builders-cleaning" className="text-primary hover:underline">after-builders cleaning</Link> service.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <GuaranteeCard icon={Building2} title="One-off deep cleaning" description="For a space that has been closed, is changing hands or needs more than its usual clean." index={0} />
            <GuaranteeCard icon={CalendarDays} title="Periodic Deep Cleans" description="Plan a detailed clean around your business hours and the areas that need extra attention over time." index={1} />
            <GuaranteeCard icon={ClipboardCheck} title="What’s included" description="Know which areas and tasks are included before the clean, with any additional requirements discussed in advance." index={2} />
          </div>
        </div>
      </section>
      <section className="service-section-alternate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">A Detailed Clean from Workspaces to Amenities</h2>
            <p className="text-lg text-muted-foreground">We’ll look at what needs attention and agree which areas to include.</p>
          </div>
          <div className="pl-4 md:pl-0">
            {steps.map((step, index) => <ProcessStep key={step.title} number={index + 1} {...step} isLast={index === steps.length - 1} />)}
          </div>
        </div>
      </section>
      <section className="service-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8"><p className="text-primary font-semibold text-sm mb-3">From our cleaning jobs</p><h2 className="mb-4">A closer look at our washroom cleans</h2><p className="text-slate-600">Compare three areas before and after cleaning: the washroom floor, a toilet cubicle and the tiles around a drain.</p></div>
          <ProjectCarousel comparisons={washroomComparisonOrder} label="Washroom before-and-after projects" />
          <Link to="/projects#washroom-cleaning" className="inline-block text-primary font-semibold underline py-3 mt-5">See more washroom before-and-afters</Link>
        </div>
      </section>
      <ServiceCTA serviceName="Commercial Deep Cleaning" />
    </>
  );
};

export default CommercialDeepCleaningPage;
