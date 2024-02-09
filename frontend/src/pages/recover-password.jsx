import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import app from '../../firebase'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Button, Input, Link } from '@nextui-org/react';

export default function RecoverPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const message = 'Las credenciales no son válidas'
    const [loading, setLoading] = useState(false);


    const handleResetPassword = async () => {
        setLoading(true);
        try {
            const auth = getAuth(app);
            await sendPasswordResetEmail(auth, email);
            setSuccessMessage('Se ha enviado un correo electrónico para restablecer la contraseña. Volviendo a la pantalla de carga');
            setError('');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            // Error al enviar el correo electrónico de restablecimiento de contraseña
            console.error("Error al enviar el correo electrónico de restablecimiento de contraseña:", error);
            setError(message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full p-6 md:mt-0 sm:max-w-md">
                <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-5">
                    ¿Olvidaste tu contraseña?
                </h2>
                <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                    <div>
                        <div className="mt-2">
                            <Input
                                id="email"
                                label="Correo electrónico"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                isRequired
                            />
                        </div>
                    </div>
                    <Button
                        type="button"
                        color='primary'
                        variant="ghost"
                        onClick={handleResetPassword}
                        className="flex w-full justify-center rounded-md"
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
            </div>
        </div>
    )
}