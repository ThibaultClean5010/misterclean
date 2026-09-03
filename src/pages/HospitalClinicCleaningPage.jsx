import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { HeartPulse, ShieldPlus, Activity, Stethoscope, CheckCircle, ShieldCheck, ClipboardList, Users } from 'lucide-react';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceNavigation from '@/components/ServiceNavigation.jsx';
import ProcessStep from '@/components/ProcessStep.jsx';
import CertificationBadge from '@/components/CertificationBadge.jsx';
import GuaranteeCard from '@/components/GuaranteeCard.jsx';
import ServiceCTA from '@/components/ServiceCTA.jsx';
import CertificationsSection from '@/components/CertificationsSection.jsx';

const HospitalClinicCleaningPage = () => {
  const steps = [
    { title: 'Terminal Cleaning & Sanitization', description: 'Rigorous top-to-bottom decontamination of clinical spaces using hospital-grade, TGA-approved disinfectants to eliminate pathogens and prevent healthcare-associated infections (HAIs).' },
    { title: 'Waiting Room & Reception Care', description: 'Frequent sanitization of high-touch surfaces including seating, reception desks, door handles, and payment terminals to protect vulnerable patients and staff.' },
    { title: 'Treatment Room Decontamination', description: 'Specialized cleaning protocols for examination rooms, dental surgeries, and minor procedure areas, ensuring absolute sterility between patient cohorts.' },
    { title: 'Biohazard & Waste Management', description: 'Safe handling, segregation, and disposal of clinical waste, sharps, and general refuse in strict accordance with EPA and local health regulations.' },
    { title: 'Restroom & Facility Hygiene', description: 'Intensive deep cleaning and continuous restocking of patient and staff washrooms, utilizing color-coded equipment to absolutely prevent cross-contamination.' },
    { title: 'Compliance & Auditing', description: 'Regular ATP testing and visual inspections by our quality assurance managers to guarantee compliance with national healthcare cleaning standards.' }
  ];

  return (
    <>
      <Helmet>
        <title>Hospital & Clinic Cleaning Adelaide | MisterClean</title>
        <meta name="description" content="Medical-grade cleaning for hospitals, clinics, and dental practices in Adelaide. Strict infection control, TGA-approved disinfectants, and compliance auditing." />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17867444680"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17867444680');
          `}
        </script>
      </Helmet>

      <ServiceHero 
        title="Medical Facility & Clinic Cleaning"
        tagline="Uncompromising infection control and medical-grade sanitization. We protect your patients, staff, and clinical reputation with rigorous cleaning protocols."
        image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
      />
      
      <ServiceNavigation />
      <CertificationsSection />

      <main>
        {/* Intro & Certifications */}
        <section className="service-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-3xl font-bold mb-6">Medical-Grade Cleaning in Adelaide</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  In the healthcare sector, standard commercial cleaning is not enough. The prevention of cross-contamination and healthcare-associated infections requires specialized training, hospital-grade chemicals, and strict adherence to clinical protocols. We also provide broader <Link to="/services/commercial-cleaning" className="text-primary hover:underline">commercial cleaning</Link> for administrative wings.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MisterClean partners with medical centers, dental clinics, allied health facilities, and hospitals across Adelaide. Our specialized medical cleaning teams are trained in infection control, biohazard safety, and the precise application of TGA-approved disinfectants to ensure your facility remains sterile, compliant, and safe.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CertificationBadge 
                  icon={ShieldPlus}
                  title="Infection Control"
                  description="Strict cross-contamination prevention protocols"
                  index={0}
                />
                <CertificationBadge 
                  icon={Activity}
                  title="TGA Compliant"
                  description="Exclusive use of hospital-grade disinfectants"
                  index={1}
                />
                <CertificationBadge 
                  icon={ClipboardList}
                  title="Audited Standards"
                  description="Regular ATP testing and compliance reporting"
                  index={2}
                />
                <CertificationBadge 
                  icon={Users}
                  title="Specialized Staff"
                  description="Cleaners trained in clinical environment safety"
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
              <h2 className="text-3xl font-bold mb-4">Our Clinical Cleaning Protocols</h2>
              <p className="text-lg text-muted-foreground">A systematic, evidence-based approach to medical facility hygiene, designed to exceed national healthcare standards.</p>
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
            <h3 className="text-3xl font-bold text-center mb-16">Our Clinical Guarantees</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <GuaranteeCard 
                icon={Stethoscope}
                title="Zero Cross-Contamination Policy"
                description="We utilize strict color-coding systems for all microfiber cloths, mops, and buckets. Equipment used in washrooms or biohazard areas will never enter clinical treatment rooms or reception areas."
                index={0}
              />
              <GuaranteeCard 
                icon={ShieldCheck}
                title="Regulatory Compliance Assurance"
                description="Our cleaning schedules and documentation are designed to support your facility during health department audits and accreditation reviews, providing transparent proof of hygiene standards."
                index={1}
              />
            </div>
          </div>
        </section>
        <ServiceCTA serviceName="Hospital & Clinic Cleaning" />
      </main>
    </>
  );
};

export default HospitalClinicCleaningPage;