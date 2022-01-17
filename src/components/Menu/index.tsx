import { featchUsersRequest } from '../../redux/users/actions';
import { useDispatch } from 'react-redux';
import { NavDiv } from '../NavDiv';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../constans/navigation';

export const Menu = () => {
    return (
        <>
            <NavLink to={navigation.users.path}>
                <NavDiv text="Users" />
            </NavLink>

            <NavLink to={navigation.userInfo.path}>
                <NavDiv text="User info" />
            </NavLink>

            <NavLink to={navigation.logout.path}>
                <NavDiv text="Log out" />
            </NavLink>
        </>
    );
};
