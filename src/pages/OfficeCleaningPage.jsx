import React from 'react';
import { Helmet } from 'react-helmet';
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
    { title: 'Workstation Sanitization', description: 'Detailed cleaning and disinfection of desks, keyboards, phones, and monitors to reduce the spread of germs and illnesses.' },
    { title: 'Common Area Cleaning', description: 'Thorough cleaning of break rooms, kitchens, and lounges, including appliance wipe-downs and surface sanitization.' },
    { title: 'Meeting Room Preparation', description: 'Ensuring conference and meeting rooms are pristine, with clean tables, organized chairs, and spotless whiteboards/screens.' },
    { title: 'Floor & Carpet Care', description: 'Daily vacuuming, sweeping, and mopping of all office floors, with periodic deep carpet cleaning available.' },
    { title: 'Waste Management', description: 'Emptying all trash and recycling bins, replacing liners, and ensuring proper disposal of office waste.' },
    { title: 'Restroom Hygiene', description: 'Deep cleaning, sanitization, and restocking of office restrooms to maintain a comfortable environment for employees.' }
  ];

  return (
    <>
      <Helmet>
        <title>Office Cleaning Services Adelaide | MisterClean</title>
        <meta name="description" content="Professional office cleaning services in Adelaide. Boost productivity and employee health with our reliable, thorough corporate cleaning solutions." />
      </Helmet>

      <ServiceHero 
        title="Office Cleaning Services"
        tagline="A clean office is a productive office. We provide comprehensive cleaning solutions tailored to your corporate environment."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c"
      />
      
      <ServiceNavigation />
      <CertificationsSection />

      <main>
        <section className="service-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-3xl font-bold mb-6">Professional Office Cleaning in Adelaide</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Maintaining a clean and hygienic office is essential for employee health, morale, and productivity. Our professional office cleaning services in Adelaide are designed to create a welcoming and safe workspace for your team and visiting clients.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you need daily maintenance or weekly deep cleaning, we customize our services to fit your schedule and specific requirements. We use eco-friendly products and advanced cleaning techniques to ensure a spotless corporate environment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CertificationBadge 
                  icon={Briefcase}
                  title="Corporate Specialists"
                  description="Experienced in modern office environments"
                  index={0}
                />
                <CertificationBadge 
                  icon={Monitor}
                  title="Tech-Safe Cleaning"
                  description="Careful sanitization of sensitive equipment"
                  index={1}
                />
                <CertificationBadge 
                  icon={Clock}
                  title="After-Hours Service"
                  description="Cleaning without disrupting your workday"
                  index={2}
                />
                <CertificationBadge 
                  icon={ShieldCheck}
                  title="Secure & Confidential"
                  description="Trusted staff for sensitive corporate spaces"
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
              <p className="text-lg text-muted-foreground">A comprehensive approach to maintaining a healthy and productive workspace.</p>
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
            <h3 className="text-3xl font-bold text-center mb-16">The MisterClean Advantage</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <GuaranteeCard 
                icon={CheckCircle}
                title="Customized Cleaning Plans"
                description="We understand that every office is unique. We work with you to develop a tailored cleaning schedule that addresses your specific needs and budget."
                index={0}
              />
              <GuaranteeCard 
                icon={Users}
                title="Dedicated Account Management"
                description="Enjoy peace of mind with a dedicated account manager who ensures consistent service quality and is always available to address your requests."
                index={1}
              />
            </div>
          </div>
        </section>
        <ServiceCTA serviceName="Office Cleaning" />
      </main>
    </>
  );
};

export default OfficeCleaningPage;