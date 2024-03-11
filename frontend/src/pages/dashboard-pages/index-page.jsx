/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../../../firebase';
import { MenuElement, LoadingAnim } from '../elements';
import { ErrorPage } from '../main-pages'
import { ManageInventory, Statistics, Sales } from '../dashboard-pages';

export const IndexPage = () => {
    const navigate = useNavigate();
    const auth = getAuth(app);
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthChecked(true);
            if (!user) {
                navigate('/');
            }
        });
        return () => unsubscribe();
    }, [auth, navigate]);

    if (!authChecked) {
        return <LoadingAnim />;
    }
    return (
        <div className='flex h-screen'>
            <div>
                <MenuElement />
            </div>
            <div className='w-full'>
                <Routes>
                    <Route path="/" element={<Statistics />} />
                    <Route path="/statistics" element={<Statistics />} />
                    <Route path="/manage" element={<ManageInventory />} />
                    <Route path="/sales" element={<Sales />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
        </div >
    )
}