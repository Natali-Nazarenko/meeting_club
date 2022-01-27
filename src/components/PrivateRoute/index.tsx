import { Navigate } from 'react-router-dom';
import { navigation } from '../../constans/navigation';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const auth = localStorage.getItem('auth');
    return auth ? children : <Navigate to={navigation.login.path} />;
};
