import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App, { loadInitialPage } from '@/App';
import '@/index.css';

const root = document.getElementById('root');

async function start() {
  // Leave the pre-rendered page visible while its route module finishes loading.
  // The first client tree then uses the same resolved component as the server.
  let initialPages = {};
  try {
    initialPages = await loadInitialPage(window.location.pathname);
  } catch (error) {
    console.error('Initial page preload failed; falling back to route loading.', error);
  }
  const app = <BrowserRouter><App initialPages={initialPages} /></BrowserRouter>;
  if (root.children.length > 0) ReactDOM.hydrateRoot(root, app);
  else ReactDOM.createRoot(root).render(app);
}

start();
