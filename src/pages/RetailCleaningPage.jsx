import React from 'react';
import { Helmet } from 'react-helmet';
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
    { title: 'Floor Care & Maintenance', description: 'Comprehensive floor cleaning including sweeping, mopping, buffing, and waxing to ensure a pristine shopping environment.' },
    { title: 'Display & Shelf Dusting', description: 'Meticulous dusting and wiping of display cases, shelving units, and product areas to highlight your merchandise.' },
    { title: 'Fitting Room Sanitization', description: 'Regular cleaning and sanitization of fitting rooms, mirrors, and seating areas for customer comfort and hygiene.' },
    { title: 'Checkout & POS Cleaning', description: 'Disinfection of high-touch areas including checkout counters, payment terminals, and customer service desks.' },
    { title: 'Window & Storefront Cleaning', description: 'Streak-free cleaning of interior and exterior windows, glass doors, and storefront displays to attract foot traffic.' },
    { title: 'Restroom Maintenance', description: 'Thorough cleaning and restocking of customer and staff restrooms to maintain high hygiene standards.' }
  ];

  return (
    <>
      <Helmet>
        <title>Retail Cleaning Services Adelaide | MisterClean</title>
        <meta name="description" content="Professional retail cleaning services in Adelaide. We keep your store, boutique, or showroom spotless to enhance customer experience and boost sales." />
      </Helmet>

      <ServiceHero 
        title="Retail Cleaning Services"
        tagline="Create an inviting shopping experience. We ensure your retail space is immaculate, reflecting the quality of your brand and products."
        image="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5"
      />
      
      <ServiceNavigation />
      <CertificationsSection />

      <main>
        <section className="service-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-3xl font-bold mb-6">Professional Retail Cleaning in Adelaide</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  First impressions matter in retail. A clean, well-maintained store not only attracts customers but also encourages them to stay longer and return. Our specialized retail cleaning services are designed to keep your boutique, showroom, or large retail space looking its absolute best.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We offer flexible scheduling to ensure our cleaning operations do not disrupt your business hours. From sparkling floors to dust-free displays, our team delivers consistent, high-quality results tailored to your specific retail environment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CertificationBadge 
                  icon={Store}
                  title="Retail Specialists"
                  description="Trained in retail-specific cleaning protocols"
                  index={0}
                />
                <CertificationBadge 
                  icon={Sparkles}
                  title="Detail Oriented"
                  description="Meticulous attention to displays and floors"
                  index={1}
                />
                <CertificationBadge 
                  icon={Clock}
                  title="Flexible Hours"
                  description="After-hours and early morning scheduling"
                  index={2}
                />
                <CertificationBadge 
                  icon={ShieldCheck}
                  title="Fully Insured"
                  description="Comprehensive coverage for your peace of mind"
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
              <p className="text-lg text-muted-foreground">A systematic approach to maintaining a pristine shopping environment that delights your customers.</p>
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
            <h3 className="text-3xl font-bold text-center mb-16">Why Choose Us for Retail Cleaning</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <GuaranteeCard 
                icon={CheckCircle}
                title="Consistent Quality Assurance"
                description="We implement rigorous quality control measures and regular inspections to ensure your retail space consistently meets our high standards and your expectations."
                index={0}
              />
              <GuaranteeCard 
                icon={Users}
                title="Trained & Trustworthy Staff"
                description="Our cleaning professionals are fully vetted, police-cleared, and trained specifically in retail environments to handle your space with care and respect."
                index={1}
              />
            </div>
          </div>
        </section>
        <ServiceCTA serviceName="Retail Cleaning" />
      </main>
    </>
  );
};

export default RetailCleaningPage;