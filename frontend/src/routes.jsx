import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

import { LoadingAnim } from './pages/elements';
import {
    ErrorPage,
    RecoverPassword,
    UserRegister,
    UserLogin,
    Statistics,
    IndexPage,
    ManageInventory
} from './pages';

export default function RoutingModule() {
    return (
        <>
            <Suspense fallback={<LoadingAnim />}>
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
