import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../../firebase';
import { Button, Input } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import LoadingAnimation from './elements/LoadingAnimation'

export default function UserLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [authChecked, setAuthChecked] = useState(false);
    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            setAuthChecked(true);
            if (user) {
                if (user.emailVerified) {
                    navigate('/dashboard');
                } else {
                    signOut(auth)
                }
            }
        });
        return () => unsubscribe();
    }, [auth, navigate]);

    const handleSignIn = async () => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            if (user.emailVerified) {
                navigate('/dashboard'); // Redirige al usuario a la página de inicio de sesión si su correo electrónico está verificado
            } else {
                setError('Debes verificar tu correo electrónico antes de iniciar sesión.');
            }
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-email':
                    setError('Correo electrónico no válido.');
                    break;
                case 'auth/user-not-found':
                    setError('Correo electrónico no registrado.');
                    break;
                case 'auth/wrong-password':
                    setError('Contraseña incorrecta.');
                    break;
                case 'auth/user-disabled':
                    setError('Tu cuenta ha sido desactivada.');
                    break;
                case 'auth/missing-password':
                    setError('Escribe tu contraseña.');
                    break
                case 'auth/missing-email':
                    setError('Escribe tu correo electrónico.');
                    break
                case 'auth/too-many-requests':
                    setError('Haz realizado demasiados intentos, inténtalo de nuevo más tarde o también puedes restaurar tu contraseña desde "¿Olvidaste tu contraseña?".')
                default:
                    setError('Credenciales no válidas.');
            }
        } finally {
            setLoading(false);
        }
    };
    if (!authChecked) {
        return <LoadingAnimation />;
    }
    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    ¡Bienvenido!
                </h1>
            </div>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    <div>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                label="Correo electrónico"
                                autoComplete="email"
                                isRequired
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-end">

                            <div className="mt-5 text-center text-md text-gray-500">
                                <Link to="/recover" className="font-normal text-blue-600 hover:text-indigo-500"
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
                                label="Contraseña"
                                autoComplete="current-password"
                                isRequired
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <Button
                            type="button"
                            onClick={handleSignIn}
                            color='primary'
                            variant="ghost"
                            className="flex w-full justify-center rounded-md"
                            isLoading={loading}
                        >
                            {loading ? 'Cargando...' : 'Iniciar Sesión'} {/* Cambia el texto del botón durante la carga */}
                        </Button>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
                <p className="mt-5 text-center text-md text-gray-500">
                    ¿No tienes cuenta?{' '}
                    <Link className="font-normal text-blue-600 hover:text-indigo-500"
                        to="/register"
                    >
                        Regístrate aquí
                    </Link>
                </p>
            </div>
        </div>
    )
}