import styles from '../Card.module.scss';
import { User } from '../../../constans/interfaces';

export const GeneralCard = ({ userInfo }: { userInfo: User }) => {
    const { dob, gender, name, picture } = userInfo;

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
};
