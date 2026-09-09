import React from 'react';
import { CONTACT_EMAIL, PHONE, PHONE_HREF } from '@/data/site.js';
export default function PrivacyPage() {
  return <section className="pt-32 pb-20 px-4">
    <div className="max-w-3xl mx-auto space-y-8">
      <div><h1 className="mb-4">Privacy information</h1><p className="text-muted-foreground">About enquiries and information handled through the MisterClean website.</p></div>
      <div><h2 className="text-2xl mb-3">Quote enquiries</h2><p>The quote form prepares an email using the name, business details, email address, suburb, optional phone number and cleaning requirements you enter. The form does not automatically send or store those details on this website. You review the message and send it using your own email service.</p></div>
      <div><h2 className="text-2xl mb-3">When you contact us</h2><p>Information you send by email, or provide by phone, is used to respond to your enquiry, discuss a quote and arrange the requested service. Email messages are handled by the email services used by you and MisterClean. Please avoid including sensitive information that is not needed for a cleaning enquiry.</p></div>
      <div><h2 className="text-2xl mb-3">Website services</h2><p>This website is hosted using Vercel and loads some images and fonts from external providers. Google Analytics and Google Ads tags help us understand page visits and contact actions. Our enquiry events record the action and service category, not the names, contact details or requirements entered in the form. These services may receive technical information such as your IP address, browser information and the page requested, and may process it outside Australia.</p><p className="mt-3">Links to other websites and your email provider are governed by their own privacy information. See <a href="https://vercel.com/legal/privacy-policy" className="text-primary underline">Vercel</a> and <a href="https://policies.google.com/privacy" className="text-primary underline">Google</a> for information about their services.</p></div>
      <div><h2 className="text-2xl mb-3">Questions, access and corrections</h2><p>Contact MisterClean if you have a question about an enquiry you sent, would like to access or correct your details, request deletion, or raise a privacy concern. Include enough information to identify your enquiry.</p><p className="mt-3"><a href={'mailto:' + CONTACT_EMAIL} className="text-primary underline break-all">{CONTACT_EMAIL}</a><br /><a href={PHONE_HREF} className="text-primary underline">{PHONE}</a></p></div>
    </div>
  </section>;
}
