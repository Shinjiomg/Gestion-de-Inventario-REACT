import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase'
import { Button, Input, Link } from '@nextui-org/react';

export default function UserLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const message = 'Las credenciales no son válidas'
    const [loading, setLoading] = useState(false);

    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const auth = getAuth(app);
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            navigate('/test');
        } catch (error) {
            setError(message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    ¡Bienvenido!
                </h1>
            </div>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" method='post' onSubmit={handleSignIn}>
                    <div>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                label="Correo electrónico"
                                autoComplete="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-end">

                            <div className="text-sm">
                                <Link href="recover"
                                    isBlock
                                >
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>
                        </div>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="******"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <Button
                            type="submit"
                            color='primary'
                            className="flex w-full justify-center rounded-md"
                            disabled={loading} // Deshabilita el botón durante la carga
                        >
                            {loading ? 'Cargando...' : 'Iniciar Sesión'} {/* Cambia el texto del botón durante la carga */}
                        </Button>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
                <p className="mt-5 text-center text-md text-gray-500">
                    ¿No tienes cuenta?{' '}
                    <Link
                        href="/register"
                        isBlock
                    >
                        Regístrate aquí
                    </Link>
                </p>
            </div>
        </div>
    )
}