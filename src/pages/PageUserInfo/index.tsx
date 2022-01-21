import { useLocation } from 'react-router-dom';
import { UserInfo } from '../../components';
import styles from './PageUserInfo.module.scss';

interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    dob: {
        date: string;
    };
    location: {
        postcode: string;
        state: string;
        city: string;
        street: string;
    };
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    registered: {
        date: string;
    };
}

const PageUserInfo = () => {
    const { state } = useLocation();
    const selectedUser = state as User;
    console.log('user: ', selectedUser);
    return selectedUser ? (
        <UserInfo user={state as User} />
    ) : (
        <p className={styles.notice}>Select user</p>
    );
};

export default PageUserInfo;
