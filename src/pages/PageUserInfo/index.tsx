import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../redux/users/selectors';
import { FormattedMessage } from 'react-intl';

import { UserInfo } from '../../components';
import styles from './PageUserInfo.module.scss';
import { User } from '../../constans/interfaces';
import { navigation } from '../../constans/navigation';

const PageUserInfo = () => {
    const users = useSelector(usersSelector);
    const currentUserId =
        window.location.search?.length > 1
            ? window.location.search.substring(1)
            : null;
    const selectedUser = currentUserId
        ? users.find(item => item.login.uuid === currentUserId)
        : null;

    return selectedUser ? (
        <>
            <UserInfo user={selectedUser as User} />
            <NavLink to={navigation.users.path}>
                <button className={styles.back}>Back</button>
            </NavLink>
        </>
    ) : (
        <div className={styles.container}>
            <p className={styles.notice}>
                <FormattedMessage id="textMessage" />
            </p>
        </div>
    );
};

export default PageUserInfo;
