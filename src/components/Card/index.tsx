import styles from './Card.module.scss';

export const Card = ({
    src,
    fio,
    dateBth,
    gender,
}: {
    src: string;
    fio: string;
    dateBth: string;
    gender: string;
}) => {
    return (
        <div className={styles[gender]}>
            <img src={src} />
            <ul>
                <li>{fio}</li>
                <li>{dateBth}</li>
                <li>{gender}</li>
            </ul>
        </div>
    );
};
