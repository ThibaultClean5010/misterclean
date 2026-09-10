import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, CalendarDays, Sparkles, Droplets, Wind, Trash2, Users, CheckCircle } from 'lucide-react';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceNavigation from '@/components/ServiceNavigation.jsx';
import ProcessStep from '@/components/ProcessStep.jsx';
import CertificationBadge from '@/components/CertificationBadge.jsx';
import GuaranteeCard from '@/components/GuaranteeCard.jsx';
import ServiceCTA from '@/components/ServiceCTA.jsx';

const RestaurantCleaningPage = () => {
  const steps = [
    { title: 'Dining Room Reset', description: 'Wipe tables, chairs and booth seating, then sweep and mop the dining floors.' },
    { title: 'Washroom Maintenance', description: 'Clean customer and staff washrooms, including toilets, sinks and mirrors. Any restocking requirements are agreed in advance.' },
    { title: 'Bar & Counter Cleaning', description: 'Polishing of bar tops, wiping down of front-of-house service counters, and streak-free cleaning of display glass and brass fixtures.' },
    { title: 'Entrance & Foyer Care', description: 'Clean entrance glass, floor mats and waiting areas.' },
    { title: 'General Floor Maintenance', description: 'Routine sweeping and mechanical or manual mopping of all general hard floor surfaces, promptly addressing daily spills and foot traffic marks.' },
    { title: 'Waste Management', description: 'Empty front-of-house and washroom bins and replace liners.' }
  ];

  return (
    <>
      <ServiceHero 
        title="Restaurant Cleaning in Adelaide"
        tagline="Cleaning for dining areas, washrooms, entrances and other front-of-house spaces."
      />
      
      <ServiceNavigation />

      <div>
        {/* Intro & Certifications */}
        <section className="service-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Routine Cleaning for Adelaide Restaurants</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We help with the regular cleaning of dining rooms, entrance areas and customer toilets. For other parts of your business, we also offer <Link to="/services/commercial-cleaning" className="text-primary hover:underline">commercial cleaning</Link>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tell us which areas need cleaning, how often and when service finishes. We’ll discuss suitable times and access, then list the work in your quote.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CertificationBadge 
                  icon={CalendarDays}
                  title="Reliable Scheduling"
                  description="Consistent daily or weekly routines you can count on"
                  index={0}
                />
                <CertificationBadge 
                  icon={Sparkles}
                  title="Dining areas"
                  description="Tables, chairs, seating and floors"
                  index={1}
                />
                <CertificationBadge 
                  icon={Droplets}
                  title="Tables and counters"
                  description="Cleaning for agreed tables, bars and service counters"
                  index={2}
                />
                <CertificationBadge 
                  icon={Wind}
                  title="Washrooms and entrances"
                  description="Cleaning for customer toilets and entry areas"
                  index={3}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="service-section-alternate">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Maintenance Routine</h2>
              <p className="text-lg text-muted-foreground">The front-of-house tasks we can include in your clean.</p>
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

        {/* Guarantees */}
        <section className="service-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center mb-16">Planning Your Restaurant Clean</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <GuaranteeCard 
                icon={Utensils}
                title="Cleaning times"
                description="Tell us your opening hours and preferred cleaning times. We discuss available options and agree access before the visit."
                index={0}
              />
              <GuaranteeCard 
                icon={CheckCircle}
                title="Agreed cleaning tasks"
                description="We agree the areas and tasks to be cleaned so your restaurant has a clear plan. Contact us to discuss anything that needs extra attention."
                index={1}
              />
            </div>
          </div>
        </section>

        <ServiceCTA serviceName="Restaurant Cleaning" />
      </div>
    </>
  );
};

export default RestaurantCleaningPage;