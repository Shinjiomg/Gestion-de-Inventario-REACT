import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import RoutingModule from './routes';
import { HelmetProvider } from 'react-helmet-async/lib';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { BrowserRouter } from 'react-router-dom';

import { LoadingAnim } from './pages';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense fallback={<LoadingAnim />}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme='light'>
            <RoutingModule />
          </NextThemesProvider>
        </NextUIProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
)

