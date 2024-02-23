import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Statistics from './pages/dashboard-pages/statistics';
import RecoverPassword from './pages/main-pages/recover-password'
import UserLogin from './pages/main-pages/user-login';
import UserRegister from './pages/main-pages/user-register';
import ErrorPage from './pages/main-pages/error-page';
import IndexPage from './pages/dashboard-pages/index-page';
import LoadingIndicator from './pages/elements/LoadingAnimation';
import ManageInventory from './pages/dashboard-pages/manageInventory';

export default function RoutingModule() {
    return (
        <>
            <Suspense fallback={<LoadingIndicator />}>
                <Routes>
                    <Route path="/" element={<UserLogin />} />
                    <Route path="/dashboard" element={<IndexPage />} >
                        <Route path=":statistics" element={<Statistics />} />
                        <Route path=":manage" element={<ManageInventory />} />
                    </Route>
                    <Route path="/register" element={<UserRegister />} />
                    <Route path="/recover" element={<RecoverPassword />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Suspense>
        </>
    );
}
