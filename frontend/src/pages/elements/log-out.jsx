import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../../firebase'
import { Button } from '@nextui-org/react';

export default function LogoutButton() {
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
            setError(error.message)
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            type="button"
            color='primary'
            variant="ghost"
            onClick={handleSignOut}
            className="flex justify-center rounded-md w-40 ml-32"
            isLoading={loading}
        >
            {loading ? 'Cerrando sesión...' : 'Cerrar sesión'}
        </Button>
    );
}
