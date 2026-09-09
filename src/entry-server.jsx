import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import App from './App.jsx';
const serverPages = import.meta.glob('./pages/*.jsx', { eager: true });
export function render(pathname) {
  Helmet.canUseDOM = false;
  const html = renderToString(<StaticRouter location={pathname}><App serverPages={serverPages} /></StaticRouter>);
  const helmet = Helmet.renderStatic();
  return { html, head: [helmet.title, helmet.meta, helmet.link, helmet.script].map(tag => tag.toString()).join('\n') };
}
