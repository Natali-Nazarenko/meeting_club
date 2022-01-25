import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { navigation } from '../../constans/navigation';
import styles from './PageLogOut.module.scss';
import { outAuthorization } from '../../redux/users/actions';

const PageLogOut = () => {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(outAuthorization());
    };

    return (
        <>
            <div className={styles.pageLogOut}>
                <NavLink to={navigation.login.path} onClick={logout}>
                    <div className={styles.exit}>
                        <p>Log Out</p>
                    </div>
                </NavLink>
            </div>
        </>
    );
};

export default PageLogOut;
