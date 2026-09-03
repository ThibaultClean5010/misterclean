import React from 'react';
import { Helmet } from 'react-helmet';
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
    { title: 'Dining Room Reset', description: 'Comprehensive wiping of all tables, chairs, and booth seating. Detailed sweeping and mopping of dining floors to ensure a spotless presentation for your first daily seating.' },
    { title: 'Washroom Maintenance', description: 'Complete sanitization of customer and staff restrooms, including toilets, urinals, sinks, and mirrors. Reliable restocking of all essential paper products and soaps.' },
    { title: 'Bar & Counter Cleaning', description: 'Polishing of bar tops, wiping down of front-of-house service counters, and streak-free cleaning of display glass and brass fixtures.' },
    { title: 'Entrance & Foyer Care', description: 'Cleaning of entry glass doors, maintaining floor mats, and dusting waiting areas to ensure the vital first impression is always welcoming.' },
    { title: 'General Floor Maintenance', description: 'Routine sweeping and mechanical or manual mopping of all general hard floor surfaces, promptly addressing daily spills and foot traffic marks.' },
    { title: 'Waste Management', description: 'Emptying all front-of-house and restroom waste bins, replacing liners, and ensuring all areas are odor-free and hygienic.' }
  ];

  return (
    <>
      <Helmet>
        <title>Restaurant Maintenance Cleaning Adelaide | MisterClean</title>
        <meta name="description" content="Reliable, ongoing restaurant cleaning in Adelaide. We maintain dining areas, restrooms, and general spaces to keep your venue pristine every single day." />
      </Helmet>

      <ServiceHero 
        title="Restaurant Maintenance Cleaning Services"
        tagline="Consistent, high-quality upkeep for your dining areas and general spaces. We ensure your venue looks immaculate and inviting for every single guest."
        image="https://images.unsplash.com/photo-1679788486952-7f2e1386fc17"
      />
      
      <ServiceNavigation />

      <main>
        {/* Intro & Certifications */}
        <section className="service-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-3xl font-bold mb-6">Routine Cleaning for Adelaide Restaurants</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The atmosphere and cleanliness of your front-of-house are just as important as the food you serve. A pristine dining room, sparkling restrooms, and well-maintained entryways are critical to your customer's overall experience. For wider facility needs, we also offer general <Link to="/services/commercial-cleaning" className="text-primary hover:underline">commercial cleaning</Link>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our restaurant maintenance teams focus on the daily and weekly upkeep of your public spaces. We operate seamlessly outside of your service hours, handling the time-consuming tasks of floor care, washroom sanitization, and surface detailing so your staff can focus entirely on providing exceptional hospitality.
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
                  title="Front-of-House Focus"
                  description="Ensuring dining areas are visually immaculate"
                  index={1}
                />
                <CertificationBadge 
                  icon={Droplets}
                  title="Surface Sanitization"
                  description="Safe, effective cleaning for tables and bars"
                  index={2}
                />
                <CertificationBadge 
                  icon={Wind}
                  title="Odor Control"
                  description="Keeping restrooms and entryways fresh and inviting"
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
              <p className="text-lg text-muted-foreground">A dependable, step-by-step cleaning process focused on the areas your customers interact with most.</p>
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
            <h3 className="text-3xl font-bold text-center mb-16">Our Service Guarantees</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <GuaranteeCard 
                icon={Utensils}
                title="Seamless After-Hours Service"
                description="We offer true flexibility to match your operating hours. Our crews operate entirely outside of your service times, entering after close or before open, ensuring zero disruption to your staff and patrons."
                index={0}
              />
              <GuaranteeCard 
                icon={CheckCircle}
                title="Consistent Quality Standard"
                description="You shouldn't have to micro-manage your cleaners. We guarantee a reliable, consistent standard of cleanliness day in and day out, backed by regular supervisor check-ins and responsive communication."
                index={1}
              />
            </div>
          </div>
        </section>

        <ServiceCTA serviceName="Restaurant Maintenance" />
      </main>
    </>
  );
};

export default RestaurantCleaningPage;