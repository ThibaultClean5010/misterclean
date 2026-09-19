import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ScanLine, Sparkles, ClipboardCheck } from 'lucide-react';
import ProjectPhoto from '@/components/ProjectPhoto.jsx';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceNavigation from '@/components/ServiceNavigation.jsx';
import ProcessStep from '@/components/ProcessStep.jsx';
import GuaranteeCard from '@/components/GuaranteeCard.jsx';
import ServiceCTA from '@/components/ServiceCTA.jsx';
import CertificationsSection from '@/components/CertificationsSection.jsx';

const WindowCleaningPage = () => {
  const options = [
    { icon: Sparkles, title: 'One-off Window Cleaning', description: 'Arrange a single clean for a seasonal refresh, an upcoming event or windows that need extra attention.' },
    { icon: ScanLine, title: 'Hard-to-Reach Window Cleaning', description: 'We assess the height, access and site conditions before confirming a suitable cleaning method and quote.' },
    { icon: CalendarDays, title: 'Recurring Window Cleaning', description: 'Keep your glass looking clean with regular visits arranged around your premises and business hours.' }
  ];
  const steps = [
    { title: 'Agree the Scope and Access', description: 'Tell us which windows need cleaning, whether you need internal or external glass, and any access restrictions. We assess hard-to-reach areas before confirming the work.' },
    { title: 'Internal and External Glass', description: 'Clean the agreed windows to remove everyday dust, fingerprints and surface dirt, using methods suited to the glass and site conditions.' },
    { title: 'Shopfronts, Doors and Partitions', description: 'Refresh entrance doors, shopfront glass and internal glass partitions so your business looks presentable from the street through to the workspace.' },
    { title: 'Frames, Sills and Tracks', description: 'Detail accessible frames, sills and tracks included in your quote, paying attention to accumulated dust and dirt around the glass.' },
    { title: 'Check the Finish', description: 'Review the agreed areas and discuss a regular schedule if you would like to keep your windows maintained throughout the year.' }
  ];

  return (
    <>
      <ServiceHero
        title="Commercial Window Cleaning in Adelaide"
        tagline="One-off and regular cleaning for shopfronts, office windows and internal glass. We assess hard-to-reach windows before quoting."
      />
      <ServiceNavigation />
      <CertificationsSection />
      <section className="service-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-6">Cleaning your shopfront or workplace windows</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From shopfronts and entrance doors to office windows and internal partitions, we clean the glass that shapes the first impression of your premises. Book a one-off visit, arrange a recurring schedule or combine your windows with our <Link to="/services/commercial-cleaning" className="text-primary hover:underline">commercial cleaning</Link> service. Our guide to <Link to="/blog/how-often-clean-commercial-windows-adelaide" className="text-primary underline">window-cleaning frequency</Link> can help you plan the visits.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {options.map((option, index) => <GuaranteeCard key={option.title} {...option} index={index} />)}
          </div>
        </div>
      </section>
      <section className="service-section-alternate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Your Window Clean Can Include</h2>
            <p className="text-lg text-muted-foreground">A clear scope, suitable access and attention to the finishing details. See <Link to="/blog/commercial-cleaning-quote-adelaide" className="text-primary underline">what to include in your cleaning quote request</Link> so we can assess the job.</p>
          </div>
          <div className="pl-4 md:pl-0">
            {steps.map((step, index) => <ProcessStep key={step.title} number={index + 1} {...step} isLast={index === steps.length - 1} />)}
          </div>
        </div>
      </section>
      <section className="service-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GuaranteeCard icon={ClipboardCheck} title="Access Assessed Before We Quote" description="For windows at height or behind obstacles, we agree a suitable access solution and the areas we can reach before booking the clean. Share your requirements so we can plan the work around your premises." index={0} />
        </div>
      </section>
      <section className="py-14 md:py-20 bg-white border-t border-slate-100"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <figure><ProjectPhoto photo="windowsBefore" className="w-full h-auto rounded-lg" /><figcaption className="text-sm text-slate-500 mt-3">Before window cleaning · Original project photograph.</figcaption></figure>
        <div><p className="text-primary text-sm font-semibold mb-3">Start with the condition of your glass</p><h2 className="mb-5">Shopfront residue needs a closer look</h2><p className="text-slate-600 mb-5">This entrance shows visible streaks and residue before cleaning. The type of mark, glass condition and access all help determine the work needed.</p><p className="text-slate-600 mb-5">Tell us whether you need a one-off refresh, regular visits or an assessment of hard-to-reach windows. Frames, sills and tracks can be included in the agreed scope.</p>
        <div className="flex flex-wrap gap-3"><Link to="/contact?service=window-cleaning&plan=one-off" className="choice-chip text-primary font-semibold">One-off clean</Link><Link to="/contact?service=window-cleaning&plan=regular" className="choice-chip text-primary font-semibold">Regular visits</Link><Link to="/contact?service=window-cleaning&access=hard-to-reach" className="choice-chip text-primary font-semibold">Hard-to-reach glass</Link></div></div>
      </div></section>
      <ServiceCTA serviceName="Window Cleaning" />
    </>
  );
};

export default WindowCleaningPage;
