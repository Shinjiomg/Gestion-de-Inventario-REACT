import React, { useState } from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail  } from 'firebase/auth';
import app from '../../firebase';
import { useNavigate } from "react-router-dom";

export default function UserRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const auth = getAuth(app);
            const signInMethods = await fetchSignInMethodsForEmail(auth, email);
            if (signInMethods.length > 0) {
                throw new Error('El correo electrónico ya está registrado');
            }
            await createUserWithEmailAndPassword(auth, email, password);
            setError('');
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12">
            <div className="g-6 flex h-full flex-wrap items-center justify-center ">
                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="w-full"
                        alt="Phone image"
                    />
                </div>
                <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                    <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-5">
                        ¡Regístrate ahora!
                    </h2>
                    <form className="space-y-6">
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input
                                id="email"
                                label="Correo electrónico"
                                name="email"
                                type="email"
                                isRequired
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                label="Contraseña"
                                isRequired
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button
                            type="button"
                            color='primary'
                            variant="ghost"
                            className="flex w-full justify-center rounded-md"
                            onClick={handleRegister}
                        >
                            Registrarse
                        </Button>
                        {error && <p className="text-red-500">{error}</p>}
                        <div className="text-md text-end pt-3">
                            <Link href="/">
                                <span aria-hidden="true" />
                                ¿Ya estás registrado? <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}