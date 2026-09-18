import React, { useEffect, useId, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Copy, Check, ArrowRight, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CONTACT_EMAIL, PHONE, PHONE_HREF, serviceOptions, resolveService } from '@/data/site.js';
import { quoteEmail, trackEnquiry } from '@/lib/quote.js';
import { validateQuote } from '@/lib/quoteValidation.js';
import { cleaningPlans, windowAccessOptions } from '@/data/cleaningExperience.js';

const selectStyle = 'w-full min-h-12 rounded-lg border border-slate-300 bg-white px-3 text-base';
export default function QuoteForm({ compact = false }) {
  const id = useId();
  const [params] = useSearchParams();
  const requested = resolveService(params.get('service'));
  const requestedPlan = params.get('plan');
  const requestedAccess = params.get('access');
  const [service, setService] = useState('commercial');
  const [plan, setPlan] = useState('not-sure');
  const [access, setAccess] = useState('standard');
  const [contactMethod, setContactMethod] = useState('email');
  const [contacts, setContacts] = useState({ email: '', phone: '' });
  const [ready, setReady] = useState(false);
  const [directSend, setDirectSend] = useState(false);
  const [busy, setBusy] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [prepared, setPrepared] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [error, setError] = useState('');
  const sending = useRef(false);
  const submissionId = useRef('');
  const started = useRef(false);
  const resultRef = useRef(null);
  useEffect(() => {
    setReady(true);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    fetch('/api/quote', { signal: controller.signal, cache: 'no-store' })
      .then(response => response.ok ? response.json() : null)
      .then(data => { if (!controller.signal.aborted) setDirectSend(data?.directSend === true); })
      .catch(() => {}).finally(() => clearTimeout(timer));
    return () => { controller.abort(); clearTimeout(timer); };
  }, []);
  useEffect(() => {
    setService(serviceOptions.some(item => item.value === requested) ? requested : 'commercial');
    setPlan(cleaningPlans.some(item => item.value === requestedPlan) ? requestedPlan : 'not-sure');
    setAccess(windowAccessOptions.some(item => item.value === requestedAccess) ? requestedAccess : 'standard');
    setPrepared(null); setError(''); setAccepted(false);
  }, [requested, requestedPlan, requestedAccess]);
  useEffect(() => { if (accepted) resultRef.current?.focus(); }, [accepted]);
  function invalidate() { setPrepared(null); setCopied(false); setCopyError(false); setError(''); }
  function start() {
    if (!started.current) { started.current = true; trackEnquiry('quote_form_started', service); }
  }
  async function submit(event) {
    event.preventDefault();
    if (sending.current || !ready) return;
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    const checked = validateQuote({ ...fields, service, plan, access });
    if (checked.error) {
      setError(checked.error);
      form.elements.namedItem(checked.field)?.focus();
      return;
    }
    const email = quoteEmail(checked.values);
    setError(''); setCopied(false); setCopyError(false);
    if (!directSend) {
      setPrepared(email);
      trackEnquiry('quote_email_opened', service);
      window.location.assign(email.href);
      return;
    }
    sending.current = true; setBusy(true);
    if (!submissionId.current) submissionId.current = globalThis.crypto?.randomUUID?.() || Date.now().toString(36) + '-' + Math.random().toString(36).slice(2);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 18000);
    try {
      const response = await fetch('/api/quote', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: controller.signal,
        body: JSON.stringify({ ...checked.values, website: fields.website || '', submissionId: submissionId.current })
      });
      const data = await response.json();
      if (!response.ok || data.accepted !== true) throw new Error(data.error || 'We could not confirm submission. Please try again or use email below.');
      setAccepted(true); setPrepared(null);
      // Provider acceptance, not a claim that the email has reached the inbox.
      trackEnquiry('quote_submission_accepted', service);
    } catch (failure) {
      setPrepared(email);
      setError(failure.name === 'AbortError' ? 'We could not confirm submission. Your details are still here. Retry or use email below.' : failure.message);
      trackEnquiry('quote_submission_failed', service);
    } finally { clearTimeout(timer); sending.current = false; setBusy(false); }
  }
  async function copy() {
    try { await navigator.clipboard.writeText(prepared.subject + '\n\n' + prepared.body); setCopied(true); setCopyError(false); }
    catch { setCopyError(true); }
  }
  return <div className={'bg-white rounded-lg border border-slate-200 border-t-4 border-t-brand-lime ' + (compact ? 'p-5 sm:p-7' : 'p-6 sm:p-8')}>
    {accepted ? <div ref={resultRef} tabIndex={-1} role="status" className="py-8 space-y-4">
      <span className="inline-flex p-3 bg-brand-mist rounded-full text-primary"><Check className="w-7 h-7" /></span>
      <h2 className="text-2xl">Thank you — your enquiry has been submitted</h2>
      <p>We will review the details and contact you to discuss the scope and quote. Your clean is booked only after we agree the arrangements with you.</p>
      <a href={PHONE_HREF} className="inline-flex text-primary font-semibold py-3" onClick={() => trackEnquiry('phone_click')}>Prefer to talk? {PHONE}</a>
    </div> : <>
      <h2 className="text-2xl mb-2">Get a cleaning quote</h2>
      <p className="text-sm text-muted-foreground mb-5">Tell us what you need cleaned and where. We’ll get back to you to discuss the job.</p>
      <noscript>Call <a href={PHONE_HREF}>{PHONE}</a> or email <a href={'mailto:' + CONTACT_EMAIL}>{CONTACT_EMAIL}</a> to request your quote.</noscript>
      <form onSubmit={submit} onChange={invalidate} onFocus={start} aria-label="Cleaning quote enquiry">
        <fieldset disabled={!ready || busy} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5"><Label htmlFor={id + '-service'}>Cleaning service</Label>
              <select id={id + '-service'} name="service" className={selectStyle} value={service} onChange={event => setService(event.target.value)}>{serviceOptions.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}</select>
            </div>
            <div className="space-y-1.5"><Label htmlFor={id + '-suburb'}>Suburb *</Label><Input id={id + '-suburb'} name="suburb" autoComplete="address-level2" required maxLength={100} placeholder="e.g. Hindmarsh" className="h-12" /></div>
            <div className="space-y-1.5 sm:col-span-2"><Label htmlFor={id + '-name'}>Your name *</Label><Input id={id + '-name'} name="name" autoComplete="name" required maxLength={100} className="h-12" /></div>
          </div>
          <fieldset><legend className="text-sm font-medium mb-2">How should we contact you?</legend><div className="flex gap-4 mb-3">
            {['email', 'phone'].map(method => <label key={method} className="inline-flex gap-2 items-center text-sm min-h-8 cursor-pointer"><input type="radio" name="contactMethod" value={method} checked={contactMethod === method} onChange={() => setContactMethod(method)} className="accent-primary w-4 h-4" />{method === 'email' ? 'Email' : 'Phone'}</label>)}
          </div>
            <Label htmlFor={id + '-contact'} className="sr-only">{contactMethod === 'email' ? 'Email address' : 'Phone number'} *</Label>
            <Input value={contacts[contactMethod]} onChange={event => setContacts(previous => ({ ...previous, [contactMethod]: event.target.value }))} id={id + '-contact'} name={contactMethod} type={contactMethod === 'email' ? 'email' : 'tel'} autoComplete={contactMethod === 'email' ? 'email' : 'tel'} placeholder={contactMethod === 'email' ? 'you@business.com.au' : 'Your best contact number'} required maxLength={contactMethod === 'email' ? 160 : 40} className="h-12" />
          </fieldset>
          {service === 'window-cleaning' && <div className="space-y-1.5"><Label htmlFor={id + '-access'}>Window access</Label><select id={id + '-access'} name="access" value={access} onChange={event => setAccess(event.target.value)} className={selectStyle}>{windowAccessOptions.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}</select></div>}
          <details className="rounded-lg border border-slate-200 px-4 py-3">
            <summary className="text-sm font-semibold cursor-pointer">Add timing or requirements (optional)</summary>
            <div className="space-y-4 pt-4">
              <div className="space-y-1.5"><Label htmlFor={id + '-plan'}>Cleaning frequency</Label><select id={id + '-plan'} name="plan" value={plan} onChange={event => setPlan(event.target.value)} className={selectStyle}>{cleaningPlans.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}</select></div>
              <div className="space-y-1.5"><Label htmlFor={id + '-business'}>Business name</Label><Input id={id + '-business'} name="business" autoComplete="organization" maxLength={120} /></div>
              <div className="space-y-1.5"><Label htmlFor={id + '-details'}>Anything we should know?</Label><Textarea id={id + '-details'} name="details" maxLength={1200} rows={3} placeholder="Approximate size, preferred times and areas to clean." /></div>
            </div>
          </details>
          <div className="hidden" aria-hidden="true"><label htmlFor={id + '-website'}>Leave this field empty</label><input id={id + '-website'} name="website" tabIndex={-1} autoComplete="off" /></div>
          <p className="text-xs text-slate-600">{directSend ? 'Send your details to MisterClean so we can respond to your enquiry.' : 'Opens a ready-to-send email in your mail app. Review it and press Send there.'} <a href="/privacy" className="text-primary underline">Privacy</a>.</p>
          <Button type="submit" size="lg" className="w-full min-h-12">{busy ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : directSend ? <ArrowRight className="w-4 h-4 mr-2" /> : <Mail className="w-4 h-4 mr-2" />}{busy ? 'Submitting…' : directSend ? 'Send quote request' : 'Continue by email'}</Button>
          {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
        </fieldset>
      </form>
    </>}
    {prepared && <div className="mt-5 rounded-xl border border-primary/20 bg-brand-mist p-4" aria-live="polite">
      <h3 className="text-lg mb-2">{directSend ? 'You can also send your details by email' : 'Send the email to finish your enquiry'}</h3>
      <p className="text-sm mb-3">{directSend ? 'If the request already reached us, mention that this is a follow-up.' : 'Nothing has been sent by this page. If your mail app did not open, use the link or copy your details below.'}</p>
      <Textarea readOnly aria-label="Prepared quote email" value={prepared.subject + '\n\n' + prepared.body} rows={5} className="bg-white mb-3" />
      <div className="flex flex-wrap gap-2"><Button asChild><a href={prepared.href} onClick={() => trackEnquiry('quote_email_opened', service)}>Open email</a></Button><Button variant="outline" onClick={copy}>{copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}{copied ? 'Copied' : 'Copy details'}</Button></div>
      <p className="text-xs mt-3 break-all">Send to <a className="underline" href={'mailto:' + CONTACT_EMAIL}>{CONTACT_EMAIL}</a></p>
      {copyError && <p className="mt-3 text-sm" role="status">Select and copy the text above, then paste it into your email.</p>}
    </div>}
  </div>;
}
