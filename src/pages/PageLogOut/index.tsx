import { NavLink } from 'react-router-dom';
import { navigation } from '../../constans/navigation';
import styles from './PageLogOut.module.scss';

export const PageLogOut = () => {
    return (
        <>
            <div className={styles.pageLogOut}>
                <NavLink to={navigation.login.path}>
                    <div className={styles.exit}>
                        <p>Log Out</p>
                    </div>
                </NavLink>
            </div>
        </>
    );
};
