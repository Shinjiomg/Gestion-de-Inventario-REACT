import {
    Routes, Route
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
export const RecoverPassword = lazy(() => import('./pages/recover-password'));
export const UserLogin = lazy(() => import('./pages/user-login'));
export const UserRegister = lazy(() => import('./pages/user-register'));
export const ErrorPage = lazy(() => import('./pages/error-page'));
export const IndexPage = lazy(() => import('./pages/index-page'));


export default function RoutingModule() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<IndexPage />}
                />
                <Route
                    path="login"
                    element={<UserLogin />}
                />
                <Route
                    path="register"
                    element={<UserRegister />}
                />

                <Route
                    path="recover"
                    element={<RecoverPassword />}
                />

                <Route
                    path="*"
                    element={<ErrorPage />}
                />
            </Routes >
        </>
    );
}
