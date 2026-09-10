import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ShieldCheck, Monitor, Users, Clock, CheckCircle } from 'lucide-react';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceNavigation from '@/components/ServiceNavigation.jsx';
import ProcessStep from '@/components/ProcessStep.jsx';
import CertificationBadge from '@/components/CertificationBadge.jsx';
import GuaranteeCard from '@/components/GuaranteeCard.jsx';
import ServiceCTA from '@/components/ServiceCTA.jsx';
import CertificationsSection from '@/components/CertificationsSection.jsx';

const OfficeCleaningPage = () => {
  const steps = [
    { title: 'Workstation Cleaning', description: 'Clean agreed desk surfaces and touchpoints, with equipment requirements discussed before work.' },
    { title: 'Common Area Cleaning', description: 'Thorough cleaning of break rooms, kitchens, and lounges, including appliance wipe-downs and surface sanitization.' },
    { title: 'Meeting Room Preparation', description: 'Wipe meeting tables and agreed surfaces, tidy chairs and clean the room’s floors. Equipment and screens are handled only as agreed.' },
    { title: 'Floor & Carpet Care', description: 'Vacuum, sweep and mop the agreed office floors at the frequency included in your cleaning plan.' },
    { title: 'Waste Management', description: 'Emptying all trash and recycling bins, replacing liners, and ensuring proper disposal of office waste.' },
    { title: 'Restroom Hygiene', description: 'Clean office toilets, sinks, mirrors and agreed amenities. Any restocking requirements are discussed in advance.' }
  ];

  return (
    <>
      <ServiceHero 
        title="Office Cleaning in Adelaide"
        tagline="Regular and one-off cleaning for desks, meeting rooms, kitchens, toilets and office floors."
      />
      
      <ServiceNavigation />
      <CertificationsSection />

      <div>
        <section className="service-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Cleaning for your Adelaide office</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We clean office floors, desks, meeting rooms and shared areas across Adelaide. Tell us how your workplace is used and which tasks you need help with.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  You might need daily visits, a weekly clean or a one-off tidy-up. We’ll discuss the rooms, surfaces and access, then put together a quote.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CertificationBadge 
                  icon={Briefcase}
                  title="Office cleaning"
                  description="Desks, meeting rooms, shared kitchens and toilets"
                  index={0}
                />
                <CertificationBadge 
                  icon={Monitor}
                  title="Equipment Requirements"
                  description="Surfaces and handling instructions agreed before cleaning"
                  index={1}
                />
                <CertificationBadge 
                  icon={Clock}
                  title="Cleaning times"
                  description="Tell us your preferred time and we’ll discuss availability"
                  index={2}
                />
                <CertificationBadge 
                  icon={ShieldCheck}
                  title="Site access"
                  description="Entry arrangements and restricted areas discussed before the visit"
                  index={3}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="service-section-alternate">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Office Cleaning Process</h2>
              <p className="text-lg text-muted-foreground">The tasks we can include in your office clean.</p>
            </div>
            
            <div className="pl-4 md:pl-0">
              {steps.map((step, index) => (
                <ProcessStep 
                  key={index}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="service-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center mb-16">Arranging your office clean</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <GuaranteeCard 
                icon={CheckCircle}
                title="Your cleaning schedule"
                description="Tell us which areas need cleaning and how often. We’ll use this to prepare your quote."
                index={0}
              />
              <GuaranteeCard 
                icon={Users}
                title="Direct Contact"
                description="Contact us by phone or email to discuss your cleaning plan, ask a question or arrange a change to your requirements."
                index={1}
              />
            </div>
          </div>
        </section>
        <ServiceCTA serviceName="Office Cleaning" />
      </div>
    </>
  );
};

export default OfficeCleaningPage;