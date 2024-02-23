/* eslint-disable no-unused-vars */
import Menu from '../elements/menu'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../../../firebase';
import LoadingAnimation from '../elements/LoadingAnimation'
import Statistics from './statistics';
import Sales from './sales'
import ManageInventory from './manageInventory';
import { Routes, Route } from 'react-router-dom';

export default function IndexPage() {
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
        return <LoadingAnimation />;
    }
    return (
        <div className='flex'>
            <div>
                <Menu />
            </div>
            <div className='p-7'>
                <Routes>
                    <Route path="/statistics" element={<Statistics />} />
                    <Route path="/manage" element={<ManageInventory />} />
                    <Route path="/sales" element={<Sales />} />
                </Routes>
            </div>
        </div >
    );
}