import {
    Routes, Route
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
export const RecoverPassword = lazy(() => import('./components/recover-password'));
export const UserLogin = lazy(() => import('./components/user-login'));
export const UserRegister = lazy(() => import('./components/user-register'));
export const ErrorPage = lazy(() => import('./components/error-page'));


export default function RoutingModule() {
    return (
        <>
            <Routes>
                <Route
                    path="/"
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
