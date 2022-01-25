import styles from './UserInfo.module.scss';

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

export const UserInfo = ({ user }: { user: User }) => {
    return (
        <div className={styles[user.gender]}>
            <img src={user.picture.large} alt="avatar" />
            <ul>
                <li>{`${user.name.title} ${user.name.first} ${user.name.last}`}</li>
                <li>{user.dob.date.slice(0, 10)}</li>
                <li>{user.gender}</li>
                <li>{`${user.location.state}, ${user.location.city}, ${user.location.street}, ${user.location.postcode}`}</li>
                <li>{user.phone}</li>
                <li>{user.registered.date.slice(0, 10)}</li>
            </ul>
        </div>
    );
};
