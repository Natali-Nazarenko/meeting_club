import { useLocation } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { UserInfo } from '../../components';
import styles from './PageUserInfo.module.scss';
import { User } from '../../constans/interfaces';

const PageUserInfo = () => {
    const { state } = useLocation();
    const selectedUser = state as User;
    return selectedUser ? (
        <UserInfo user={state as User} />
    ) : (
        <div className={styles.container}>
            <p className={styles.notice}>
                <FormattedMessage id="textMessage" />
            </p>
        </div>
    );
};

export default PageUserInfo;
