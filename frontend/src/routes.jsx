import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const RecoverPassword = lazy(async () => {
    return import('./pages/recover-password');
});

const UserLogin = lazy(async () => {
    return import('./pages/user-login');
});

const UserRegister = lazy(async () => {
    return import('./pages/user-register');
});

const ErrorPage = lazy(async () => {
    return import('./pages/error-page');
});

const IndexPage = lazy(async () => {
    return import('./pages/index-page');
});
import LoadingIndicator from './pages/elements/LoadingAnimation';


export default function RoutingModule() {
    return (
        <>
            <Suspense fallback={<LoadingIndicator />}>
                <Routes>
                    <Route path="/" element={<UserLogin />} />
                    <Route path="/dashboard" element={<IndexPage />} />
                    <Route path="/register" element={<UserRegister />} />
                    <Route path="/recover" element={<RecoverPassword />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Suspense>
        </>
    );
}
