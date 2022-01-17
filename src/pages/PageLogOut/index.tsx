import { NavLink } from 'react-router-dom';
import { Button } from '../../components/Button';
import { navigation } from '../../constans/navigation';
import { useDispatch } from 'react-redux';

export const PageLogOut = () => {
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch();
    };
    return (
        <NavLink to={navigation.login.path}>
            <Button text="Log out" onClick={logOut} />;
        </NavLink>
    );
};
