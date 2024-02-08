import {
    Routes, Route
} from 'react-router-dom';
import UserLogin from './components/user-login';
import UserRegister from './components/user-register';
import ErrorPage from './components/error-page';

const RoutingModule = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<UserLogin />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/register" element={<UserRegister />} />
            </Routes >
        </>
    );
};

export default RoutingModule;

