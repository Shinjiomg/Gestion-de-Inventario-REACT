// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../../../firebase';
import { Button, Input, Card, CardBody, Link } from '@nextui-org/react';
import { LoadingAnim, ThemeSwitcher } from '../elements'

export const UserLogin = () => {
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
                navigate('/dashboard');
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
                // eslint-disable-next-line no-fallthrough
                default:
                    setError('Credenciales no válidas.');
            }
        } finally {
            setLoading(false);
        }
    };
    if (!authChecked) {
        return <LoadingAnim />;
    }
    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 body-login">
            <div className="sm:mx-auto ">
                <Card
                    isBlurred
                    className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                    shadow="md"
                >
                    <CardBody className="p-8">
                        <h1 className="text-center text-3xl font-bold tracking-tight  sm:text-4xl">
                            ¡Bienvenido de vuelta!&#128079;
                        </h1>
                        <h2 className="mt-2 text-center text-lg tracking-tight sm:text-xl"
                        >Inicia sesión con tu cuenta
                        </h2>
                        <div className="mt-6 flex flex-col items-center">
                            <form className="space-y-6 w-full">
                                <div className="w-full flex flex-wrap md:flex-nowrap gap-4">
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        label="Correo electrónico"
                                        autoComplete="email"
                                        variant="underlined"
                                        isRequired
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="w-full flex flex-wrap md:flex-nowrap gap-4">
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        variant="underlined"
                                        label="Contraseña"
                                        autoComplete="current-password"
                                        isRequired
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <div className="text-center text-md text-gray-500">
                                        <Link href="/recover" underline="hover" className="font-normal" color="secondary">
                                            ¿Olvidaste tu contraseña?
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <Button
                                        type="submit"
                                        onClick={handleSignIn}
                                        color='primary'
                                        className="w-full justify-center rounded-md"
                                        isLoading={loading}
                                    >
                                        {loading ? 'Cargando...' : 'Iniciar Sesión'}
                                    </Button>
                                </div>
                                {error && <p className="text-red-500">{error}</p>}
                            </form>
                            <div className="flex justify-between items-center mt-5">
                                <p className="text-center text-md">
                                    ¿No tienes cuenta?{' '}
                                    <Link href="/register">
                                        <span className="font-normal text-secondary hover:underline mr-5">Regístrate aquí</span>
                                    </Link>
                                </p>
                                <ThemeSwitcher />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div >
    )
}