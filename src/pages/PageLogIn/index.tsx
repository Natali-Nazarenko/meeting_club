import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { navigation } from '../../constans/navigation';
import styles from './PageLogIn.module.scss';
import { setAuthorization } from '../../redux/users/actions';

export const PageLogIn = () => {
    const dispatch = useDispatch();

    const authorization = () => {
        dispatch(setAuthorization());
    };

    return (
        <div className={styles.pageLogIn}>
            <NavLink to={navigation.users.path} onClick={authorization}>
                <div className={styles.entrance}>
                    <p>Log in</p>
                </div>
            </NavLink>
        </div>
    );
};
