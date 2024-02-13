import React, { Suspense, lazy, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react'
const RoutingModule = lazy(() => import('./routes'));
import { HelmetProvider } from 'react-helmet-async/lib';
import LoadingIndicator from './pages/elements/LoadingAnimation';

const delayLoading = () => {
  return new Promise(resolve => setTimeout(resolve, 1000));
};

// const DelayLoader = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     delayLoading().then(() => {
//       setIsLoading(false);
//     });
//   }, []);
//   return isLoading ? <LoadingIndicator /> : <RoutingModule />;
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense fallback={<LoadingIndicator />}>
        <NextUIProvider>
          <RoutingModule />
        </NextUIProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
)

