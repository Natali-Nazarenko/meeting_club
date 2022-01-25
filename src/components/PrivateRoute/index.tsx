import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { navigation } from '../../constans/navigation';
import { authorizationSelector } from '../../redux/users/selectors';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const auth = useSelector(authorizationSelector);
    return auth ? children : <Navigate to={navigation.login.path} />;
};
