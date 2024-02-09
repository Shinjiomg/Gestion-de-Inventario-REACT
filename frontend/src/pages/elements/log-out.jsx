import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../../firebase'
import { Button } from '@nextui-org/react';

const LogoutButton = () => {
    const navigate = useNavigate();
    const auth = getAuth(app);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <Button type="button"
            color='primary'
            variant="ghost"
            className="flex w-full justify-center rounded-md" 
            onClick={handleSignOut}>Cerrar sesión</Button>
    );
};

export default LogoutButton;
