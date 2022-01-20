import { NavDiv } from '../NavDiv';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../constans/navigation';
import styles from './Menu.module.scss';

export const Menu = () => {
    return (
        <div className={styles.menu}>
            <NavLink to={navigation.users.path}>
                <NavDiv text="Users" />
            </NavLink>

            <NavLink to={navigation.userInfo.path}>
                <NavDiv text="User info" />
            </NavLink>

            <NavLink to={navigation.logout.path}>
                <NavDiv text="Log out" />
            </NavLink>
        </div>
    );
};
