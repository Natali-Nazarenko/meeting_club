import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { navigation } from '../../constans/navigation';
import styles from './PageLogOut.module.scss';
import { outAuthorizationRequest } from '../../redux/users/actions';
import { FormattedMessage } from 'react-intl';

const PageLogOut = () => {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(outAuthorizationRequest(false));
    };

    return (
        <>
            <div className={styles.pageLogOut}>
                <NavLink to={navigation.login.path} onClick={logout}>
                    <div className={styles.exit}>
                        <p>
                            <FormattedMessage id="logOut" />
                        </p>
                    </div>
                </NavLink>
            </div>
        </>
    );
};

export default PageLogOut;
