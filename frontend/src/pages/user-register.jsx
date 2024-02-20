import React, { useState, useEffect } from "react";
import { Button, Input, Link, Card, CardBody } from "@nextui-org/react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut } from 'firebase/auth';
import { app } from '../../firebase';
import { useNavigate } from "react-router-dom";
import LoadingAnimation from './elements/LoadingAnimation'

export default function UserRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [authChecked, setAuthChecked] = useState(false);
    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            setAuthChecked(true);
            if (user.emailVerified) {
                navigate('/dashboard');
            } else {
                signOut(auth)
                setTimeout(() => {
                    navigate('/');
                }, 1000)
            }
        });
        return () => unsubscribe();
    }, [auth, navigate]);

    const handleRegister = async () => {
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            await sendEmailVerification(user);
            setSuccessMessage('Cuenta creada exitosamente, revisa tu correo electrónico para verificar tu cuenta.');
        } catch (error) {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    setError('Correo electrónico ya registrado.');
                    break;
                case 'auth/weak-password':
                    setError('La contraseña debe contener como mínimo 6 caracteres.');
                    break;
                case 'auth/invalid-email':
                    setError('Correo electrónico no válido.');
                    break;
                case 'auth/missing-password':
                    setError('Escribe una contraseña.');
                    break;
                case 'auth/missing-email':
                    setError('Escribe un correo electrónico.');
                    break;
                default:
                    setError(error.message);
            }
        } finally {
            setLoading(false); // Establecer loading en false aquí asegura que se desactive después de establecer successMessage o error
        }
    };

    if (!authChecked) {
        return <LoadingAnimation />;
    }
    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12" style={{ background: "#F8F8FF" }}>
            <div className="g-6 flex h-full flex-wrap items-center justify-center ">
                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="w-full"
                        alt="Phone image"
                    />
                </div>
                <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                    <Card
                        isBlurred
                        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                        shadow="sm"
                    >
                        <CardBody className="p-8">
                            <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-5">
                                ¡Regístrate ahora!
                            </h1>
                            <form className="space-y-6">
                                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                    <Input
                                        id="email"
                                        label="Correo electrónico"
                                        name="email"
                                        type="email"
                                        variant="underlined"
                                        isRequired
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                                    <Input
                                        id="password"
                                        name="password"
                                        variant="underlined"
                                        type="password"
                                        label="Contraseña"
                                        isRequired
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    color='primary'
                                    className="flex w-full justify-center rounded-md"
                                    onClick={handleRegister}
                                    isLoading={loading}
                                >
                                    {loading ? 'Registrando...' : 'Registrarse'}
                                </Button>
                                {error && <p className="text-danger">{error}</p>}
                                {successMessage && <p className="text-success-500">{successMessage}</p>}
                                <div className="text-md text-end">
                                    <Link href="/" color="secondary" underline="hover">
                                        <span aria-hidden="true" />
                                        ¿Ya estás registrado? <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div >
        </div >
    );
}