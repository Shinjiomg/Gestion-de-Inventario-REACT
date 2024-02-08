import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import RoutingModule from './routes';
import { HelmetProvider } from 'react-helmet-async/lib';
ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
        <RoutingModule />
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
)
