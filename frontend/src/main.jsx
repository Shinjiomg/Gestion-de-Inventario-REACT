import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react'
export const RoutingModule = lazy(() => import('./routes'));
import { HelmetProvider } from 'react-helmet-async/lib';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <NextUIProvider>
          <RoutingModule />
        </NextUIProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
)
