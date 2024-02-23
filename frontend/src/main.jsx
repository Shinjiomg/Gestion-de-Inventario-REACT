import React, { Suspense, lazy, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import RoutingModule from './routes';
import { HelmetProvider } from 'react-helmet-async/lib';
import LoadingIndicator from './pages/elements/LoadingAnimation';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';

const delayLoading = () => {
  return new Promise(resolve => setTimeout(resolve, 1000));
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense fallback={<LoadingIndicator />}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme='light'>
            <RoutingModule />
          </NextThemesProvider>
        </NextUIProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
)

