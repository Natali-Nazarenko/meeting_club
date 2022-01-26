import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { navigation } from '../../constans/navigation';
import styles from './PageLogIn.module.scss';
import { setAuthorization } from '../../redux/users/actions';
import { FormattedMessage } from 'react-intl';

export const PageLogIn = () => {
    const dispatch = useDispatch();

    const authorization = () => {
        dispatch(setAuthorization());
    };

    return (
        <div className={styles.pageLogIn}>
            <NavLink to={navigation.users.path} onClick={authorization}>
                <div className={styles.entrance}>
                    <p>
                        <FormattedMessage id="logIn" />
                    </p>
                </div>
            </NavLink>
        </div>
    );
};
