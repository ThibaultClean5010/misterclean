# MisterClean B2B

React + Vite website for [mistercleanb2b.com](https://www.mistercleanb2b.com), deployed through the existing GitHub/Vercel project.

## Development and checks

```sh
npm ci
npm run dev
npm run lint
npm run build
npm test
```

Build before running the tests: they validate the generated HTML, SEO metadata, links, sitemap, missing pages and quote email encoding.

## Production

Vercel uses `npm run build` and the `dist` output directory. The build generates HTML for each public route, plus `404.html`, `robots.txt` and `sitemap.xml`. React hydrates the rendered content and loads page code on demand. `vercel.json` enables clean URLs and permanent redirects from the former hospital/clinic and heavy-duty service addresses.

The page catalog in `src/data/site.js` controls canonical URLs, metadata, public build paths and the service selector. Add new public routes there as well as in `src/App.jsx`. Blog articles come from `src/data/blogPosts.js`.

`npm run preview` is useful for a local asset preview, but Vite's SPA fallback does not reproduce Vercel's clean URL and HTTP 404 behavior. Validate redirects and HTTP status codes on Vercel. `public/.htaccess` supplies an equivalent HTML route mapping for Apache if that hosting is used later.

## Quote enquiries

The contact form prepares an email for the visitor to review and send to `mistercleanadelaide@gmail.com`. It does **not** submit enquiries to a server or claim that an email has been sent. Visitors can open their email app, copy the prepared message, email directly or call. Personal form fields are not stored by the application.

Automatic delivery would require an email provider and a server-side integration. Never add private email API keys to client-side code or commit credentials.

## Analytics and external assets

The existing Google Analytics (`G-JRM3569S3G`) and Google Ads (`AW-17867444680`) accounts are initialized once by `src/components/Analytics.jsx`. Route views use canonical page paths. Enquiry events report actions and service categories; they do not include the personal fields entered in the form. Opening an email is not tracked as a confirmed enquiry or booking. Google Analytics enhanced-measurement settings should avoid an additional history-based page-view event if manual route views are used.

The logo and window cleaning photo are local. Some other images still load from Unsplash and the original Hostinger CDN; fonts load from Google Fonts. Keep those asset dependencies available or replace them with licensed local assets before discontinuing the original hosting services.
