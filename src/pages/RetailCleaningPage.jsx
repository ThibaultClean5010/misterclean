import React from 'react';
import { Link } from 'react-router-dom';
import { Store, ShieldCheck, Sparkles, Users, Clock, CheckCircle } from 'lucide-react';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceNavigation from '@/components/ServiceNavigation.jsx';
import ProcessStep from '@/components/ProcessStep.jsx';
import CertificationBadge from '@/components/CertificationBadge.jsx';
import GuaranteeCard from '@/components/GuaranteeCard.jsx';
import ServiceCTA from '@/components/ServiceCTA.jsx';
import CertificationsSection from '@/components/CertificationsSection.jsx';

const RetailCleaningPage = () => {
  const steps = [
    { title: 'Floor Care & Maintenance', description: 'Sweep, vacuum and mop the agreed floors using methods suited to their materials.' },
    { title: 'Display & Shelf Dusting', description: 'Meticulous dusting and wiping of display cases, shelving units, and product areas to highlight your merchandise.' },
    { title: 'Fitting Room Sanitization', description: 'Regular cleaning and sanitization of fitting rooms, mirrors, and seating areas for customer comfort and hygiene.' },
    { title: 'Checkout & POS Cleaning', description: 'Disinfection of high-touch areas including checkout counters, payment terminals, and customer service desks.' },
    { title: 'Window & Storefront Cleaning', description: 'Streak-free cleaning of interior and exterior windows, glass doors, and storefront displays to attract foot traffic.' },
    { title: 'Restroom Maintenance', description: 'Clean customer and staff washrooms, with any restocking requirements agreed in advance.' }
  ];

  return (
    <>
      <ServiceHero 
        title="Retail & Shop Cleaning in Adelaide"
        tagline="Cleaning for shop floors, displays, fitting rooms and customer areas, with timing arranged around your trading hours."
      />
      
      <ServiceNavigation />
      <CertificationsSection />

      <div>
        <section className="service-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Cleaning for Adelaide shops</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Shop floors and counters get a lot of use during the day. We clean the areas your customers and staff use, including entrances, display shelves, fitting rooms and toilets.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tell us your trading hours, shop layout and any stock or surfaces that need particular care. We’ll agree the tasks and cleaning times before booking.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CertificationBadge 
                  icon={Store}
                  title="Retail Cleaning Plans"
                  description="Tasks planned around your shop layout and trading hours"
                  index={0}
                />
                <CertificationBadge 
                  icon={Sparkles}
                  title="Displays and floors"
                  description="Dusting, wiping and floor cleaning included in your quote"
                  index={1}
                />
                <CertificationBadge 
                  icon={Clock}
                  title="Cleaning times"
                  description="Tell us your trading hours and preferred cleaning time"
                  index={2}
                />
                <CertificationBadge 
                  icon={ShieldCheck}
                  title="Agreed Scope"
                  description="Tasks and cleaning areas agreed with you"
                  index={3}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="service-section-alternate">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Retail Cleaning Process</h2>
              <p className="text-lg text-muted-foreground">The areas we can include in your shop’s cleaning plan.</p>
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
            <h3 className="text-3xl font-bold text-center mb-16">Arranging your shop clean</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <GuaranteeCard 
                icon={CheckCircle}
                title="Work agreed before the visit"
                description="Your quote lists the areas and tasks included. Let us know if a particular surface or part of the shop needs extra attention."
                index={0}
              />
              <GuaranteeCard 
                icon={Users}
                title="Your Site Requirements"
                description="Tell us about access, stock displays and any surfaces requiring particular care. We include these requirements when planning your clean."
                index={1}
              />
            </div>
          </div>
        </section>
        <ServiceCTA serviceName="Retail Cleaning" />
      </div>
    </>
  );
};

export default RetailCleaningPage;