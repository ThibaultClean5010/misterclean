import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ShieldCheck, HardHat, CheckCircle2, Award, ClipboardCheck, Clock, Sparkles, Droplets, Wrench, CheckSquare, Trash2, Wind } from 'lucide-react';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceNavigation from '@/components/ServiceNavigation.jsx';
import ProcessStep from '@/components/ProcessStep.jsx';
import CertificationBadge from '@/components/CertificationBadge.jsx';
import GuaranteeCard from '@/components/GuaranteeCard.jsx';
import ServiceCTA from '@/components/ServiceCTA.jsx';

const AfterBuildersCleaningPage = () => {
  const steps = [
    { title: 'Initial Site Audit', description: 'Comprehensive assessment of the construction site to identify hazardous materials, dust accumulation levels, and specific handover requirements.' },
    { title: 'Debris Cleanup', description: 'Safe removal of remaining construction debris, protective films, and large-scale waste using compliant disposal methods.' },
    { title: 'Dust Removal', description: 'Utilization of industrial-grade HEPA filtration vacuums to extract fine plaster, cement, and brick dust from all surfaces and ventilation areas.' },
    { title: 'Hard Surface Detailing', description: 'Removal of paint splatters, render drops, and adhesive residue from floors, glass, and fixtures using specialized non-abrasive solvents.' },
    { title: 'Window & Track Deep Clean', description: 'Meticulous cleaning of all internal and external glazing, frames, and sliding door tracks to ensure pristine clarity.' },
    { title: 'Floor Treatment & Sealing', description: 'Professional machine scrubbing, polishing, and sealing of hard floor surfaces to remove construction traffic marks.' },
    { title: 'Sanitization Phase', description: 'Wiping down and sanitizing all touchpoints, cabinetry interiors, and washroom fixtures to ensure readiness for immediate occupation.' },
    { title: 'Final Inspection', description: 'Rigorous quality assurance walk-through by a senior supervisor to guarantee the property meets our strict handover standards.' }
  ];

  const serviceCategories = [
    {
      title: 'Surface Cleaning & Dust Control',
      icon: Wind,
      items: [
        { name: 'Dust removal from all areas', description: 'Extensive HEPA-filtered vacuuming to eliminate hazardous silica, plaster, and brick dust from walls, ceilings, and high ledges.' },
        { name: 'Sanitizing all surfaces', description: 'Hospital-grade disinfection of all touchpoints, workbenches, and handles to ensure a hygienic environment post-construction.' },
        { name: 'Removal of protective coverings', description: 'Careful peeling and disposal of manufacturer films from windows, floors, and newly installed appliances without scratching surfaces.' },
        { name: 'Paint splatter removal', description: 'Delicate scraping and solvent treatment to safely remove rogue paint drops, render, and overspray from hard surfaces.' }
      ]
    },
    {
      title: 'Deep Cleaning Solutions',
      icon: Droplets,
      items: [
        { name: 'Bathroom deep cleaning', description: 'Acid-washing new tiles to remove grout haze, sanitizing toilets, and polishing tapware and mirrors to a flawless shine.' },
        { name: 'Kitchen deep cleaning', description: 'Degreasing and detailing brand new cabinetry inside and out, polishing sinks, and ensuring food-prep areas are entirely dust-free.' },
        { name: 'Floor cleaning and polishing', description: 'Industrial machine scrubbing of hard floors and buffing/sealing to completely remove heavy construction traffic marks and scuffs.' },
        { name: 'Carpet and upholstery cleaning', description: 'Hot water extraction and deep steam cleaning to pull embedded construction dust and allergens from soft fibers.' }
      ]
    },
    {
      title: 'Specialized Detailing',
      icon: Sparkles,
      items: [
        { name: 'Window and glass cleaning', description: 'Meticulous streak-free cleaning of all internal and external glazing, including detailed vacuuming and wiping of sliding door tracks.' },
        { name: 'Grout and tile cleaning', description: 'Restoring grout lines that have been dulled by construction dust, using specialized brushes and lifting agents.' },
        { name: 'HVAC system cleaning', description: 'Vacuuming vents, grilles, and replacing superficial filters to ensure the air conditioning circulates clean, dust-free air.' },
        { name: 'Appliance cleaning and sanitization', description: 'Detailing newly installed ovens, rangehoods, fridges, and dishwashers inside and out to remove factory residues.' }
      ]
    },
    {
      title: 'Site Handover & Waste',
      icon: CheckSquare,
      items: [
        { name: 'Debris and construction waste removal', description: 'Clearing material offcuts, bulk packaging, and sweeping the final site to transition it from a work zone to a habitable space.' },
        { name: 'Final quality inspection', description: 'A rigorous, multi-point walk-through by our senior supervisors to guarantee a defect-free handover to the client or property owner.' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>After-Builders Cleaning Adelaide | MisterClean</title>
        <meta name="description" content="Post-construction cleaning in Adelaide. Dust removal, debris cleanup, final site cleaning. Professional after-builders cleaning for residential & commercial." />
      </Helmet>

      <ServiceHero 
        title="After-Builders Cleaning Services Adelaide"
        tagline="Flawless post-construction handover cleaning. We manage the hazardous dust, debris, and fine detailing so your project is ready for immediate occupation."
        image="https://images.unsplash.com/photo-1699109076552-58db1cccae82"
      />
      
      <ServiceNavigation />

      <main>
        {/* Intro & Certifications */}
        <section className="service-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h1 className="text-3xl font-bold mb-6">After-Builders Cleaning Services Adelaide</h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Transitioning a site from an active construction zone to a pristine, habitable environment requires specialized expertise. Standard cleaning methods fall short when dealing with volatile fine dust, industrial adhesives, and construction debris. We frequently transition our building clients into our ongoing <Link to="/services/commercial-cleaning" className="text-primary hover:underline">commercial cleaning</Link> or standard <Link to="/services" className="text-primary hover:underline">residential cleaning</Link> programs post-handover.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MisterClean partners with Adelaide's leading construction firms, shopfitters, and property developers. We deploy heavily trained, WHS-compliant teams equipped with industrial-grade machinery to execute complex builders cleans under strict handover deadlines.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CertificationBadge 
                  icon={ShieldCheck}
                  title="Fully Insured"
                  description="$20M Public Liability & Workers Compensation"
                  index={0}
                />
                <CertificationBadge 
                  icon={HardHat}
                  title="WHS Compliant"
                  description="Strict adherence to construction site safety protocols"
                  index={1}
                />
                <CertificationBadge 
                  icon={Award}
                  title="ISO Standards"
                  description="Quality management systems implementation"
                  index={2}
                />
                <CertificationBadge 
                  icon={ClipboardCheck}
                  title="Vetted Staff"
                  description="White-card holding, heavily trained personnel"
                  index={3}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Services Grid */}
        <section className="py-24 bg-slate-50 border-y">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive After-Builders Services</h2>
              <p className="text-lg text-muted-foreground">
                Our post-construction cleaning leaves no stone unturned. We systematically tackle every layer of dust and residue to ensure a flawless, ready-to-move-in property.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category, catIndex) => (
                <div key={catIndex} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                    <div className="p-3.5 bg-primary/10 text-primary rounded-xl shrink-0">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                  </div>
                  <ul className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex flex-col gap-1.5">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                          <h4 className="font-semibold text-slate-800 text-base">{item.name}</h4>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed pl-8">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="service-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Cleaning Phases</h2>
              <p className="text-lg text-muted-foreground">A methodical, phase-by-phase approach designed to capture fine dust and eliminate construction residue, concluding with a comprehensive final inspection.</p>
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
        <section className="service-section bg-slate-950 text-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Service Benefits & Guarantees</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                We take the stress out of the final handover phase, providing reliable, rapid, and defect-free results every time.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col items-start text-left">
                <div className="p-3 bg-secondary/20 text-secondary rounded-xl mb-6">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Rapid Turnaround Times</h3>
                <p className="text-slate-400 leading-relaxed">
                  We understand construction timelines shift rapidly. We offer flexible scheduling and rapid deployment to meet your critical handover deadlines without ever compromising on quality or safety.
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col items-start text-left">
                <div className="p-3 bg-secondary/20 text-secondary rounded-xl mb-6">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Defect-Free Guarantee</h3>
                <p className="text-slate-400 leading-relaxed">
                  If our clean does not pass the site manager's final inspection regarding our agreed scope of work, we will return within 24 hours to rectify the issue at absolutely no additional cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ServiceCTA serviceName="After-Builders Cleaning" />
      </main>
    </>
  );
};

export default AfterBuildersCleaningPage;