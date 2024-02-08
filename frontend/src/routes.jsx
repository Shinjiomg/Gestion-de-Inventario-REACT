import {
    Routes, Route
} from 'react-router-dom';
import UserLogin from './components/user-login';
import UserRegister from './components/user-register';
import ErrorPage from './components/error-page';
import RecoverPassword from './components/recover-password';

const RoutingModule = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<UserLogin />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/register" element={<UserRegister />} />
                <Route path="/recover-password" element={<RecoverPassword />} />
            </Routes >
        </>
    );
};

export default RoutingModule;

