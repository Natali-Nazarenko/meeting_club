import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { NavDiv } from '../NavDiv';
import { navigation } from '../../constans/navigation';
import styles from './Menu.module.scss';

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
