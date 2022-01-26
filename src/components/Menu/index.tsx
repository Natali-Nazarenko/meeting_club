import { NavDiv } from '../NavDiv';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../constans/navigation';
import styles from './Menu.module.scss';
import { FormattedMessage } from 'react-intl';

export const Menu = () => {
    return (
        <div className={styles.menu}>
            <NavLink to={navigation.users.path}>
                <NavDiv text={<FormattedMessage id="users" />} />
            </NavLink>

            <NavLink to={navigation.userInfo.path}>
                <NavDiv text={<FormattedMessage id="userInfo" />} />
            </NavLink>

            <NavLink to={navigation.logout.path}>
                <NavDiv text={<FormattedMessage id="logOut" />} />
            </NavLink>
        </div>
    );
};
