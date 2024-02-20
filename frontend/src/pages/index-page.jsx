import Menu from './elements/menu'
import LogoutButton from './elements/log-out';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../../firebase';
import LoadingAnimation from './elements/LoadingAnimation'
import Statistics from './elements/statistics'
import { color } from 'framer-motion';
import '../pages/menu.css';

export default function IndexPage() {
    const navigate = useNavigate();
    const auth = getAuth(app);
    const [loading, setLoading] = useState(false);
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false);
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
            <div className='user_menu'>
                <Menu />
                <LogoutButton />
            </div>
            <div className='user-statistics w-full mt-16'>
                <Statistics />
            </div>
        </div>
    );
}
