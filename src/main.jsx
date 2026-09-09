import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/index.css';

const root = document.getElementById('root');
const app = <BrowserRouter><App /></BrowserRouter>;
if (root.children.length > 0) ReactDOM.hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);
