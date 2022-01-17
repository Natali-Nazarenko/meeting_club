import { NavLink } from 'react-router-dom';
import { NavDiv } from '../../components/NavDiv';
import { navigation } from '../../constans/navigation';

export const PageLogOut = () => {
    return (
        <>
            <NavLink to={navigation.login.path}>
                <NavDiv text="Log Out" />
            </NavLink>
        </>
    );
};
