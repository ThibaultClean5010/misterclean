import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const questions = [
  ['Do you offer one-off and regular cleaning?', 'Yes. Request a one-off clean or discuss a recurring schedule. The frequency depends on your premises, how the space is used and the tasks required.'],
  ['Which areas do you service?', 'We provide commercial cleaning in Adelaide. Include your suburb when requesting a quote so we can confirm availability for your location.'],
  ['What information do you need for a quote?', 'Tell us your business type, suburb, service required and approximate size of the premises. Preferred times, cleaning frequency and access details help us understand the job.'],
  ['Can you clean hard-to-reach windows?', 'We assess the height, access and site conditions before confirming what we can clean and how the work will be carried out.'],
  ['What is included in a commercial deep clean?', 'The agreed scope can cover workspaces, kitchens, bathrooms, floors, edges, accessible internal glass and frequently touched surfaces. We discuss the condition of the premises before quoting.'],
  ['Can cleaning take place outside business hours?', 'Tell us your opening hours and preferred cleaning times. We discuss available options when planning your service.']
];
export default function CleaningFAQ() {
  return <section className="py-14 md:py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl mb-8">Questions about your clean</h2>
      <Accordion type="single" collapsible>{questions.map(([question, answer], i) => <AccordionItem key={question} value={'question-' + i}><AccordionTrigger className="text-base text-left">{question}</AccordionTrigger><AccordionContent className="text-base text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion>
    </div>
  </section>;
}
