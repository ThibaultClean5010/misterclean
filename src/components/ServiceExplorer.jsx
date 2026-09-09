import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, CalendarDays } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import CleaningPhoto from '@/components/CleaningPhoto.jsx';
import { cleaningOffers, cleaningPlans, windowAccessOptions, cleaningQuotePath } from '@/data/cleaningExperience.js';

export default function ServiceExplorer() {
  const id = useId();
  const [service, setService] = useState('commercial');
  const [plan, setPlan] = useState('one-off');
  const [access, setAccess] = useState('standard');
  return <section id="find-your-clean" className="py-14 md:py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-5 mb-8">
        <div><p className="text-sm uppercase tracking-widest text-primary font-bold mb-3">Made for your premises</p><h2 className="mb-3">What needs a clean?</h2><p className="text-lg text-muted-foreground">Choose your priority and the kind of visit you have in mind.</p></div>
        <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-primary py-3">All services <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <Tabs value={service} onValueChange={setService}>
        <TabsList aria-label="Choose a cleaning service" className="grid grid-cols-2 md:grid-cols-4 h-auto gap-2 p-0 bg-transparent mb-5">
          {cleaningOffers.map(offer => <TabsTrigger key={offer.value} value={offer.value} className="min-h-14 whitespace-normal text-left justify-start px-4 py-3 text-base border border-slate-200 rounded-xl bg-white data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary data-[state=active]:shadow-md">{offer.shortTitle}</TabsTrigger>)}
        </TabsList>
        {cleaningOffers.map(offer => <TabsContent key={offer.value} value={offer.value} className="m-0 service-panel">
          <div className="grid lg:grid-cols-2 overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="relative min-h-60 lg:min-h-[490px] overflow-hidden">
              <CleaningPhoto photo={offer.photo} className="absolute inset-0 w-full h-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              <div className="absolute inset-x-0 bottom-0 p-6 pt-16 bg-gradient-to-t from-slate-950/80 to-transparent text-white"><span className="text-sm font-semibold">Adelaide businesses · Scope agreed with you</span></div>
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl mb-3">{offer.title}</h3>
              <p className="text-base text-muted-foreground mb-5">{offer.description}</p>
              <ul className="space-y-2 mb-7">{offer.benefits.map(benefit => <li key={benefit} className="flex gap-2 text-sm sm:text-base"><Check className="w-5 h-5 shrink-0 text-primary mt-0.5" />{benefit}</li>)}</ul>
              <fieldset className="mb-5"><legend className="font-semibold mb-3 flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" />How often?</legend>
                <RadioGroup aria-label="Cleaning frequency" value={plan} onValueChange={setPlan} className="flex flex-wrap gap-2">
                  {cleaningPlans.map(option => <label key={option.value} htmlFor={id + offer.value + option.value} className={'choice-chip ' + (plan === option.value ? 'choice-chip-selected' : '')}><RadioGroupItem id={id + offer.value + option.value} value={option.value} />{option.label}</label>)}
                </RadioGroup>
              </fieldset>
              {offer.value === 'window-cleaning' && <fieldset className="mb-5"><legend className="font-semibold mb-3">Window access</legend><RadioGroup aria-label="Window access" value={access} onValueChange={setAccess} className="flex flex-wrap gap-2">{windowAccessOptions.map(option => <label key={option.value} htmlFor={id + option.value} className={'choice-chip ' + (access === option.value ? 'choice-chip-selected' : '')}><RadioGroupItem id={id + option.value} value={option.value} />{option.label}</label>)}</RadioGroup><p className="text-sm text-muted-foreground mt-3">Height and access are assessed before confirming a quote.</p></fieldset>}
              <div className="flex flex-wrap gap-3 mt-6"><Button asChild size="lg" className="h-auto min-h-12 whitespace-normal"><Link to={cleaningQuotePath(service, plan, access)}>Get a quote for this clean <ArrowRight className="h-4 w-4 ml-2 shrink-0" /></Link></Button><Button asChild variant="outline" size="lg" className="min-h-12"><Link to={offer.path}>Explore service</Link></Button></div>
              <p className="text-sm text-muted-foreground mt-4">Your selections carry through to the enquiry form.</p>
            </div>
          </div>
        </TabsContent>)}
      </Tabs>
      <p className="mt-6 text-muted-foreground">For your business type: <Link className="text-primary underline" to="/services/office-cleaning">offices</Link>, <Link className="text-primary underline" to="/services/retail-cleaning">shops and showrooms</Link> or <Link className="text-primary underline" to="/services/restaurant-cleaning">restaurants</Link>.</p>
    </div>
  </section>;
}
