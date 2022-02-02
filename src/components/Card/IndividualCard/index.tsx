import styles from '../Card.module.scss';
import { User } from '../../../constans/interfaces';

export const IndividualCard = ({ userInfo }: { userInfo: User }) => {
    const { dob, gender, location, name, phone, picture, registered } =
        userInfo;

    return (
        <div className={styles.info}>
            <img src={picture.large} alt="avatar" />
            <ul>
                <li>{`${name.title} ${name.first} ${name.last}`}</li>
                <li>{dob.date.slice(0, 10)}</li>
                <li>{gender}</li>
                <li>{`${location.state} ${location.city} ${location.postcode}`}</li>
                <li>{phone}</li>
                <li>{registered.date.slice(0, 10)}</li>
            </ul>
        </div>
    );
};
