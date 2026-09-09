import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Copy, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CONTACT_EMAIL, serviceOptions } from '@/data/site.js';
import { quoteEmail, trackEnquiry } from '@/lib/quote.js';

export default function QuoteForm() {
  const [params] = useSearchParams();
  const requested = params.get('service');
  const [service, setService] = useState('commercial');
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
    if (serviceOptions.some(item => item.value === requested)) setService(requested);
    setPrepared(null);
    setCopied(false);
    setCopyError(false);
  }, [requested]);
  const [prepared, setPrepared] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [validationError, setValidationError] = useState('');
  function invalidate() { setPrepared(null); setCopied(false); setCopyError(false); setValidationError(''); }
  function prepare(event) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    for (const key of ['name', 'business', 'email', 'suburb']) {
      if (!values[key]?.trim()) {
        setValidationError('Please complete each required field.');
        event.currentTarget.elements.namedItem(key)?.focus();
        return;
      }
    }
    const email = quoteEmail({ ...values, service });
    setPrepared(email);
    setCopied(false);
    setCopyError(false);
    trackEnquiry('quote_email_prepared', service);
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(prepared.subject + '\n\n' + prepared.body);
      setCopied(true);
      setCopyError(false);
    } catch { setCopyError(true); }
  }
  return <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
    <h2 className="text-2xl mb-2">Tell us about your premises</h2>
    <p className="text-muted-foreground mb-6">Complete these details to prepare your quote email. You can review it before sending.</p>
    <noscript>Please enable JavaScript to prepare an email here, or use the phone and email contact links on this page.</noscript>
    <form onSubmit={prepare} onChange={invalidate} className="space-y-5">
      <fieldset disabled={!ready} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2"><Label htmlFor="quote-name">Your name *</Label><Input id="quote-name" name="name" autoComplete="name" required maxLength={100} /></div>
        <div className="space-y-2"><Label htmlFor="quote-business">Business name *</Label><Input id="quote-business" name="business" autoComplete="organization" required maxLength={120} /></div>
        <div className="space-y-2"><Label htmlFor="quote-email">Email *</Label><Input id="quote-email" name="email" type="email" autoComplete="email" required maxLength={160} /></div>
        <div className="space-y-2"><Label htmlFor="quote-phone">Phone (optional)</Label><Input id="quote-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} /></div>
        <div className="space-y-2"><Label htmlFor="quote-suburb">Suburb *</Label><Input id="quote-suburb" name="suburb" autoComplete="address-level2" required maxLength={100} /></div>
        <div className="space-y-2">
          <Label htmlFor="quote-service">Cleaning service *</Label>
          <Select value={service} onValueChange={value => { setService(value); invalidate(); }}><SelectTrigger id="quote-service"><SelectValue /></SelectTrigger><SelectContent>{serviceOptions.map(item => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}</SelectContent></Select>
        </div>
      </div>
      <div className="space-y-2"><Label htmlFor="quote-details">What needs cleaning? (optional)</Label><Textarea id="quote-details" name="details" maxLength={1200} rows={4} placeholder="Approximate size, one-off or regular cleaning, preferred times and access requirements." /></div>
      <p className="text-sm text-muted-foreground">Your details stay in this page until you choose to send the email. Read our <a href="/privacy" className="text-primary underline">privacy information</a>.</p>
      <Button type="submit" size="lg" className="w-full sm:w-auto"><Mail className="h-4 w-4 mr-2" /> Prepare quote email</Button>
      {validationError && <p role="alert" className="text-destructive">{validationError}</p>}
      </fieldset>
    </form>
    {prepared && <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-5" aria-live="polite">
      <h3 className="text-lg mb-2">Your enquiry is ready to send</h3>
      <p className="text-sm mb-4">Nothing has been sent yet. Open the email in your mail app, or copy the details and send them to <a className="text-primary underline break-all" href={'mailto:' + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>.</p>
      <Textarea readOnly aria-label="Prepared quote email" value={prepared.subject + '\n\n' + prepared.body} rows={8} className="bg-white mb-4" />
      <div className="flex flex-wrap gap-3">
        <Button asChild><a href={prepared.href} onClick={() => trackEnquiry('quote_email_opened', service)}>Open email to send</a></Button>
        <Button variant="outline" onClick={copy}>{copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}{copied ? 'Copied' : 'Copy details'}</Button>
      </div>
      {copyError && <p className="mt-3 text-sm" role="status">Please select and copy the text above, then paste it into your email.</p>}
    </div>}
  </div>;
}
