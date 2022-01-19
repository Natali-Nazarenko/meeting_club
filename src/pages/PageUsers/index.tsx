import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../../redux/users/actions';
import { usersSelector } from '../../redux/users/selectors';
import styles from './PageUsers.module.scss';
import { Card } from '../../components/Card';

export const PageUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);
    return (
        <div className={styles.containerUser}>
            {users.map(user => (
                <Card
                    key={user.phone}
                    src={user.picture.large}
                    fio={`${user.name.title} ${user.name.first} ${user.name.last}`}
                    dateBth={user.dob.date.slice(0, 10)}
                    gender={user.gender}
                ></Card>
            ))}
        </div>
    );
};
