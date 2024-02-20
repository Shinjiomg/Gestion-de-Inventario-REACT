import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebase'
import { getAuth, sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth';
import { Button, Input, Link, Card, CardBody } from '@nextui-org/react';
import LoadingAnimation from './elements/LoadingAnimation'

export default function RecoverPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [authChecked, setAuthChecked] = useState(false);
    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            setAuthChecked(true);
            if (user) {
                navigate('/dashboard');
            }
        });
        return () => unsubscribe();
    }, [auth, navigate]);

    const handleResetPassword = async () => {
        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, email);
            setSuccessMessage('Se ha enviado un correo electrónico para restablecer la contraseña. Volviendo a la pantalla de carga');
            setError('');
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    setError('El correo electrónico proporcionado no está registrado.');
                    break;
                case 'auth/invalid-email':
                    setError('Correo electrónico no válido.');
                    break;
                case 'auth/missing-email':
                    setError('Escribe tu correo electrónico.');
                    break
                default:
                    setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };
    if (!authChecked) {
        return <LoadingAnimation />;
    }
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" style={{ background: "#F8F8FF" }}>
            <div className="w-full p-6 md:mt-0 sm:max-w-md">
                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                    shadow="sm"
                >
                    <CardBody className="p-8">
                        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-2">
                            ¿Olvidaste tu contraseña?
                        </h1>
                        <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                            <div>
                                <div className="mt-2">
                                    <Input
                                        id="email"
                                        label="Correo electrónico"
                                        name="email"
                                        variant="underlined"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        isRequired
                                    />
                                </div>
                            </div>
                            <Button
                                type="submit"
                                color='primary'
                                onClick={handleResetPassword}
                                className="flex w-full justify-center rounded-md bg-black"
                                isLoading={loading}
                            >
                                {loading ? 'Enviando correo...' : 'Restablecer contraseña'} {/* Cambia el texto del botón durante la carga */}
                            </Button>
                            {error && <p className="text-red-500">{error}</p>}
                            {successMessage && <p className="text-green-500">{successMessage}</p>}
                            <div className="text-sm text-end m-0">
                                <Link href="/">
                                    <span aria-hidden="true" />
                                    Regresar <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </div >
        </div >
    )
}