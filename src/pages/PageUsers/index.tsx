import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../../redux/users/actions';
import { loadingSelector, usersSelector } from '../../redux/users/selectors';
import styles from './PageUsers.module.scss';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../constans/navigation';
import { Spinner, Card } from '../../components';

const PageUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const [currentPage, setCurrentPage] = useState(1);
    const isLoading = useSelector(loadingSelector);

    const scrollHeandler = useCallback(
        event => {
            if (
                event.target.documentElement.scrollHeight -
                    (event.target.documentElement.scrollTop +
                        window.innerHeight) <
                1
            ) {
                dispatch(fetchUsersRequest(currentPage));
                setCurrentPage(prevState => prevState + 1);
            }
        },
        [dispatch, currentPage],
    );

    useEffect(() => {
        document.addEventListener('scroll', scrollHeandler);
        return function () {
            document.removeEventListener('scroll', scrollHeandler);
        };
    }, [scrollHeandler]);

    useEffect(() => {
        if (users.length < 20) {
            dispatch(fetchUsersRequest(currentPage));
            setCurrentPage(prevState => prevState + 1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    return (
        <div className={styles.containerUser}>
            {isLoading && <Spinner />}
            {users.map(user => (
                <NavLink
                    to={{
                        pathname: navigation.userInfo.path,
                        search: user.login.uuid,
                    }}
                    key={user.login.uuid}
                >
                    {<Card nameClass="card" userInfo={user} />}
                </NavLink>
            ))}
        </div>
    );
};

export default PageUsers;
