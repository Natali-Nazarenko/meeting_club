import { NavLink } from 'react-router-dom';
import { NavDiv } from '../../components/NavDiv';
import { navigation } from '../../constans/navigation';

export const PageLogIn = () => {
    return (
        <NavLink to={navigation.users.path}>
            <NavDiv text="Log In" />
        </NavLink>
    );
};
