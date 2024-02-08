import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import app from '../../firebase'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';


export default function RecoverPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const message = 'Las credenciales no son válidas'

    const handleResetPassword = async () => {
        try {
            const auth = getAuth(app);
            await sendPasswordResetEmail(auth, email);
            setSuccessMessage('Se ha enviado un correo electrónico para restablecer la contraseña.');
            setError('');
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            // Error al enviar el correo electrónico de restablecimiento de contraseña
            console.error("Error al enviar el correo electrónico de restablecimiento de contraseña:", error);
            setError(message);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full p-6 md:mt-0 sm:max-w-md">
                <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                    ¿Olvidaste tu contraseña?
                </h2>
                <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Correo electrónico
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@email.com"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={handleResetPassword}
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                    >
                        Restablecer contraseña
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                    {successMessage && <p className="text-green-500">{successMessage}</p>}
                    <div className="text-sm text-end">
                        <Link to="/" className="font-semibold text-indigo-600">
                            <span aria-hidden="true" />
                            Regresar <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}