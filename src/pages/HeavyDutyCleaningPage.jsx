import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { AlertTriangle, ShieldCheck, HeartPulse, Clock, Activity, FileLock2 } from 'lucide-react';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceNavigation from '@/components/ServiceNavigation.jsx';
import ProcessStep from '@/components/ProcessStep.jsx';
import CertificationBadge from '@/components/CertificationBadge.jsx';
import GuaranteeCard from '@/components/GuaranteeCard.jsx';
import ServiceCTA from '@/components/ServiceCTA.jsx';
import CertificationsSection from '@/components/CertificationsSection.jsx';

const HeavyDutyCleaningPage = () => {
  const steps = [
    { title: 'Discrete Assessment', description: 'We conduct a confidential, sensitive site evaluation to determine the scope of the heavy industrial waste, grease, or biohazard situation.' },
    { title: 'Safety Protocol Implementation', description: 'Our team establishes isolation zones and dons specialized Personal Protective Equipment (PPE) to ensure cross-contamination is prevented and personnel are protected.' },
    { title: 'Grease Removal & Extraction', description: 'Safe clearing, bagging, and heavy-duty grease removal using powerful solvents in strict accordance with EPA regulations.' },
    { title: 'Equipment Cleaning', description: 'Intensive scrubbing, high-pressure washing, and mechanical equipment cleaning to remove deeply embedded grime and industrial residues.' },
    { title: 'Industrial Sanitization', description: 'Deployment of commercial ozone generators, thermal fogging, and specialized disinfectants to neutralize odors and ensure the zone is safe.' },
    { title: 'Final Testing', description: 'Application of hospital-grade disinfectants followed by ATP surface testing to scientifically verify that the environment is sterile and ready for safe industrial operations.' }
  ];

  return (
    <>
      <Helmet>
        <title>Heavy-Duty Cleaning Services Adelaide | MisterClean</title>
        <meta name="description" content="Heavy-duty industrial cleaning in Adelaide. Grease removal, deep sanitization, specialized equipment. Professional solutions for tough cleaning challenges." />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JRM3569S3G"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JRM3569S3G');
          `}
        </script>
      </Helmet>

      <ServiceHero 
        title="Heavy-Duty Industrial Cleaning Services"
        tagline="Specialized cleaning requiring extreme care, certified protocols, and absolute discretion. We restore safety and dignity to the most challenging environments."
        image="https://images.unsplash.com/photo-1492724219889-989d2306de19"
      />
      
      <ServiceNavigation />
      <CertificationsSection />

      <main>
        {/* Intro & Certifications */}
        <section className="service-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-semibold mb-6">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  24/7 Emergency Response Available
                </div>
                <h1 className="text-3xl font-bold mb-6">Heavy-Duty Industrial Cleaning Services</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Standard cleaning teams are not equipped or legally permitted to handle severe industrial spills, embedded grease, or heavy machinery requirements. These situations require rigorous technical protocols to neutralize hazards and restore facility safety. Discover how this complements our <Link to="/services/commercial-cleaning" className="text-primary hover:underline">commercial cleaning</Link> and <Link to="/services/restaurant-cleaning" className="text-primary hover:underline">restaurant cleaning</Link> services.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond our technical expertise, we approach every severe domestic or industrial situation with profound empathy and discretion. We operate in unmarked vehicles when requested, maintain strict confidentiality, and provide environmental awareness when working with affected facilities.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CertificationBadge 
                  icon={Activity}
                  title="Biohazard Certified"
                  description="Licensed remediation of bloodborne pathogens"
                  index={0}
                />
                <CertificationBadge 
                  icon={ShieldCheck}
                  title="EPA Compliant"
                  description="Legal disposal of hazardous and biological waste"
                  index={1}
                />
                <CertificationBadge 
                  icon={FileLock2}
                  title="Strict Discretion"
                  description="Confidential operations in unmarked vehicles"
                  index={2}
                />
                <CertificationBadge 
                  icon={HeartPulse}
                  title="Trauma Trained"
                  description="Staff trained in compassionate, sensitive communication"
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
              <h2 className="text-3xl font-bold mb-4">Cleaning Types</h2>
              <p className="text-lg text-muted-foreground">A meticulous, science-backed approach including grease removal, industrial sanitization, and equipment cleaning to restore environments.</p>
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
            <h3 className="text-2xl font-bold text-center mb-16">Applications and Promises</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <GuaranteeCard 
                icon={FileLock2}
                title="Absolute Confidentiality"
                description="We respect the sensitive nature of severe hoarding, trauma, and heavy industrial cleanups. Our teams are bound by strict non-disclosure agreements, and we can deploy unmarked transit to protect your privacy."
                index={0}
              />
              <GuaranteeCard 
                icon={Clock}
                title="Emergency Rapid Deployment"
                description="Industrial incidents require immediate attention to prevent structural damage and health risks. Our emergency response team is available 24/7, ready to secure and remediate the site immediately."
                index={1}
              />
            </div>
          </div>
        </section>
        <ServiceCTA serviceName="Heavy Duty Cleaning" />
      </main>
    </>
  );
};

export default HeavyDutyCleaningPage;