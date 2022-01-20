import { NavLink } from 'react-router-dom';
import { navigation } from '../../constans/navigation';
import styles from './PageLogIn.module.scss';

export const PageLogIn = () => {
    return (
        <div className={styles.pageLogIn}>
            <NavLink to={navigation.users.path}>
                <div className={styles.entrance}>
                    <p>Log in</p>
                </div>{' '}
            </NavLink>
        </div>
    );
};
