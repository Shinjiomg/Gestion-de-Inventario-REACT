import React, { Suspense, lazy, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react'
const RoutingModule = lazy(() => import('./routes'));
import { HelmetProvider } from 'react-helmet-async/lib';
import LoadingIndicator from './pages/elements/LoadingAnimation';
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { Router, Routes, Route } from 'react-router-dom';
import ManageInventory from './pages/manageInventory';
import Statistics from './pages/statistics';

const delayLoading = () => {
  return new Promise(resolve => setTimeout(resolve, 1000));
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense fallback={<LoadingIndicator />}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme='light'>
            <Routes>
              <Route path="/statistics" element={<Statistics />} />
            </Routes>
            <RoutingModule />
          </NextThemesProvider>
        </NextUIProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
)

