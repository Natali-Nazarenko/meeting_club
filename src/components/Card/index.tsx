import styles from './Card.module.scss';
import { User } from '../../constans/interfaces';

export const Card = ({
    userInfo,
    nameClass,
}: {
    userInfo: User;
    nameClass: string;
}) => {
    const { dob, gender, location, name, phone, picture, registered } =
        userInfo;

    if (nameClass === 'card') {
        return (
            <div className={`${styles[gender]} card`}>
                <img src={picture.large} alt="avatar" />
                <ul>
                    <li>{`${name.title} ${name.first} ${name.last}`}</li>
                    <li>{dob.date.slice(0, 10)}</li>
                    <li>{gender}</li>
                </ul>
            </div>
        );
    } else {
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
    }
};
