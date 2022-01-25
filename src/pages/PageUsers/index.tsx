import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../../redux/users/actions';
import { loadingSelector, usersSelector } from '../../redux/users/selectors';
import styles from './PageUsers.module.scss';
import { Card } from '../../components/Card';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../constans/navigation';
import { Spinner } from '../../components';

const PageUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const [fetching, setFetching] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const isLoaded = useSelector(loadingSelector);

    const scrollHeandler = (event: any) => {
        if (
            event.target.documentElement.scrollHeight -
                (event.target.documentElement.scrollTop + window.innerHeight) <
            1
        ) {
            setFetching(true);
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', scrollHeandler);
        return function () {
            document.removeEventListener('scroll', scrollHeandler);
        };
    }, []);

    useEffect(() => {
        if (fetching) {
            console.log('currentPage: ', currentPage);
            dispatch(fetchUsersRequest(currentPage));
            setCurrentPage(prevState => prevState + 1);
            setFetching(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, fetching]);
    return (
        <div className={styles.containerUser}>
            {users.map(user => (
                <NavLink
                    to={navigation.userInfo.path}
                    state={user}
                    key={user.login.uuid}
                >
                    {isLoaded ? (
                        <Spinner />
                    ) : (
                        <Card
                            src={user.picture.large}
                            fio={`${user.name.title} ${user.name.first} ${user.name.last}`}
                            dateBth={user.dob.date.slice(0, 10)}
                            gender={user.gender}
                        ></Card>
                    )}
                </NavLink>
            ))}
        </div>
    );
};

export default PageUsers;
