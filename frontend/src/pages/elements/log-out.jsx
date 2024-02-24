/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../../firebase';
import { Button } from '@nextui-org/react';
import { TbLogout2 } from 'react-icons/tb';

export default function LogoutButton({ minimized }) {
    const navigate = useNavigate();
    const auth = getAuth(app);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSignOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            type="button"
            startContent={!minimized && <TbLogout2 />}
            color="primary"
            onClick={handleSignOut}
            className={`flex justify-center rounded-md ${minimized ? 'w-8' : 'w-full'}`} // Ajusta la anchura del botón
            isLoading={loading}
            style={{ padding: minimized ? '0.5rem' : '' }} // Ajusta el padding si está minimizado
            isIconOnly={minimized}
        >
            {minimized ? <TbLogout2 /> : (loading ? 'Cerrando sesión...' : 'Cerrar sesión')}
        </Button>
    );
}
