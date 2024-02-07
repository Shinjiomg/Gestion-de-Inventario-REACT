import {
    Routes, Route
} from 'react-router-dom';
import UserLogin from './components/user-login';
import UserRegister from './components/user-register';
import ErrorPage from './components/error-page';
import IndexPage from './components/index-page';
import Navbar from './components/elements/navbar'
const RoutingModule = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/register" element={<UserRegister />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/test" element={<Navbar />} />

            </Routes >
        </>
    );
};

export default RoutingModule;

