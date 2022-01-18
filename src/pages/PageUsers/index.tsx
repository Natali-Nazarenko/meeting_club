import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../../redux/users/actions';
import { usersSelector } from '../../redux/users/selectors';
import styles from './PageUsers.module.scss';

export const PageUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);
    console.log('users: ', users);
    return (
        <ul className={styles.listUsers}>
            {users.map(user => (
                <li key={user.name.first} className={styles.listDrivers__item}>
                    {user.name.first}
                </li>
            ))}
        </ul>
    );
};
