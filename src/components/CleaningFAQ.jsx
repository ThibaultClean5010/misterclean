import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const questions = [
  ["Do you offer one-off and regular cleaning?", "Yes. We offer one-off cleans and regular visits. Tell us how often you need cleaning, or we can discuss a suitable schedule."],
  ["Which areas do you service?", "We clean business premises in Adelaide. Include your suburb in your enquiry so we can check availability."],
  ["What information do you need for a quote?", "Your suburb, business type, approximate floor area and the work you need done. Let us know your preferred times and any access restrictions too."],
  ["Can you clean hard-to-reach windows?", "It depends on the height and access. We’ll assess the windows and site before confirming what we can clean."],
  ["What is included in a commercial deep clean?", "It can include workspaces, kitchens, bathrooms, floors, edges, internal glass and frequently touched surfaces. Your quote will list the areas and tasks included."],
  ["Can cleaning take place outside business hours?", "Let us know your opening hours and preferred cleaning time. We’ll discuss availability when preparing your quote."]
];
export default function CleaningFAQ() {
  return <section className="py-14 md:py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl mb-8">Questions about your clean</h2>
      <Accordion type="single" collapsible>{questions.map(([question, answer], i) => <AccordionItem key={question} value={'question-' + i}><AccordionTrigger className="text-base text-left">{question}</AccordionTrigger><AccordionContent className="text-base text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion>
    </div>
  </section>;
}
