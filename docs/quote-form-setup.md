# Direct quote delivery

The redesigned quote form works by email handoff until the server is configured. It must not claim a successful direct submission while disabled.

## Activate in the existing Vercel project

1. Create or use a Resend account owned by MisterClean. Verify a sending domain you control (for example, a mail subdomain of mistercleanb2b.com) using the DNS records Resend supplies. Never guess DNS records or replace existing mail records.
2. Add server-only Production variables in Vercel: RESEND_API_KEY and QUOTE_FROM_EMAIL (a sender on that verified domain). Keep QUOTE_FORM_ENABLED=false until ready to test. Do not use a VITE_ prefix or commit credentials.
3. Configure a persistent rate limit for POST /api/quote in Vercel's firewall. The code includes an origin check, fixed recipient, input limits, honeypot, stable retry key and a per-instance limiter; the latter is not a global limit. Review available firewall controls for the project's plan before activation.
4. For an authorised inbox test, temporarily enable QUOTE_FORM_ENABLED=true and redeploy. Submit clearly marked test details, confirm the message arrives in mistercleanadelaide@gmail.com, and check Reply addresses the provided contact. If this fails, disable and redeploy while correcting the sender.
5. GET /api/quote returns directSend: true only when the enabled flag and both sending settings are present. This is a configuration check, not proof of delivery.

The recipient is fixed in code to MisterClean's existing contact address. No visitor data is logged or kept in a website database. A direct enquiry is processed by Vercel and Resend and becomes an email handled by the receiving email provider.

## Measurement

Existing Google tags now distinguish quote_form_started, quote_email_opened, quote_submission_accepted and quote_submission_failed. No visitor-entered values are sent in those event parameters. Provider acceptance is not inbox delivery, a quote, or a signed contract. Confirm actual received enquiries in the inbox, then track quotes and bookings separately. Mark the relevant confirmed business event in Google Analytics/Ads only after activation and verification.

## References

- https://vercel.com/docs/functions/runtimes/node-js
- https://resend.com/docs/api-reference/emails/send-email
- https://resend.com/docs/dashboard/emails/idempotency-keys
