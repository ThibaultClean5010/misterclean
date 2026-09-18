import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, ClipboardList, Users, Utensils, CheckCircle, Store } from 'lucide-react';
import ServiceHero from '@/components/ServiceHero.jsx';
import ServiceNavigation from '@/components/ServiceNavigation.jsx';
import CertificationBadge from '@/components/CertificationBadge.jsx';
import GuaranteeCard from '@/components/GuaranteeCard.jsx';
import ServiceCTA from '@/components/ServiceCTA.jsx';
import CertificationsSection from '@/components/CertificationsSection.jsx';

const premises = [
  {
    id: 'offices',
    icon: Building2,
    title: 'Offices and shared workplaces',
    description: 'Regular cleaning for the rooms your team uses each day, with desk surfaces and equipment handling agreed before work begins.',
    tasks: [
      'Desks, meeting tables and shared touchpoints',
      'Break rooms and shared kitchen surfaces',
      'Toilets, sinks and mirrors',
      'Vacuuming, sweeping and mopping',
      'Rubbish and recycling bins',
    ],
  },
  {
    id: 'retail',
    icon: Store,
    title: 'Shops and showrooms',
    description: 'Cleaning for customer and staff areas, planned around your trading hours. Let us know about stock displays and surfaces that need particular care.',
    tasks: [
      'Shop floors, entrances and floor mats',
      'Display shelves and accessible surfaces',
      'Fitting rooms, mirrors and seating',
      'Counters and agreed payment terminal surfaces',
      'Staff areas, washrooms and bins',
    ],
  },
  {
    id: 'hospitality',
    icon: Utensils,
    title: 'Cafés and restaurant customer areas',
    description: 'Routine cleaning of dining rooms and other front-of-house spaces. Tell us when service finishes so we can discuss suitable times and access.',
    tasks: [
      'Tables, chairs and booth seating',
      'Bar tops and service counters',
      'Dining floors and waiting areas',
      'Customer and staff washrooms',
      'Front-of-house bins and liners',
    ],
  },
];

const CommercialCleaningPage = () => {
  return (
    <>
      <ServiceHero
        title="Regular Cleaning for Adelaide Businesses"
        tagline="Ongoing cleaning for offices, shops, cafés and restaurant customer areas, with tasks and visits agreed around your business."
      />

      <ServiceNavigation />
      <CertificationsSection />

      <div>
        <section className="service-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">One regular cleaning plan for your premises</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We help Adelaide businesses keep on top of everyday dust, spills and foot traffic. Office cleaning, shop cleaning and restaurant customer-area cleaning all sit within our Regular Cleaning service. Your plan lists the areas and tasks your business needs.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Tell us your opening hours, how the space is used and how often you would like a visit. We discuss suitable cleaning times, access and any restricted areas, then confirm the scope and frequency in your quote. You can contact us directly when your requirements change.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If your premises need a more thorough reset first, ask about a <Link to="/services/commercial-deep-cleaning" className="text-primary hover:underline">deep clean</Link>. <Link to="/services/window-cleaning" className="text-primary hover:underline">Window cleaning</Link> can also be arranged alongside your regular plan.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CertificationBadge
                  icon={ShieldCheck}
                  title="Agreed Scope"
                  description="Tasks and areas confirmed before booking"
                  index={0}
                />
                <CertificationBadge
                  icon={ClipboardList}
                  title="Cleaning Plan"
                  description="Frequency suited to your premises"
                  index={1}
                />
                <CertificationBadge
                  icon={Users}
                  title="Access Planning"
                  description="Entry and security requirements discussed"
                  index={2}
                />
                <CertificationBadge
                  icon={CheckCircle}
                  title="Shared Areas"
                  description="Cleaning of agreed surfaces and touchpoints"
                  index={3}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="service-section-alternate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">What can your regular clean include?</h2>
              <p className="text-lg text-muted-foreground">
                These are some of the tasks we can include for different premises. We agree which apply to your site and how often they need doing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {premises.map(({ id, icon: Icon, title, description, tasks }) => (
                <div key={id} id={id} className="scroll-mt-28 bg-white p-8 rounded-lg border flex flex-col h-full">
                  <div className="h-8 flex items-center text-primary mb-4">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{title}</h3>
                  <p className="text-muted-foreground mb-8 flex-1 text-base leading-relaxed">{description}</p>
                  <ul className="space-y-3 text-sm font-medium text-slate-700">
                    {tasks.map((task) => (
                      <li key={task} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="service-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16">Planning your regular clean</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <GuaranteeCard
                icon={ClipboardList}
                title="A Clear Cleaning Scope"
                description="We agree the cleaning tasks, visit frequency and access before work begins. Tell us about equipment, delicate surfaces or areas that need extra attention so these can be covered in your quote."
                index={0}
              />
              <GuaranteeCard
                icon={ShieldCheck}
                title="Consumables by Arrangement"
                description="If you need help restocking washroom or kitchen supplies, include this in your enquiry so the products, quantities and costs can be discussed."
                index={1}
              />
            </div>
          </div>
        </section>
        <ServiceCTA serviceName="Regular Cleaning" />
      </div>
    </>
  );
};

export default CommercialCleaningPage;