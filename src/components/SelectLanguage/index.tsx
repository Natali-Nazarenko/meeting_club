import styles from './SelectLanguage.module.scss';

export const SelectLanguage = () => {
    return (
        <select className={styles.blockChoiseLaguage}>
            <option value="en-US">English</option>
            <option value="ru-RU">Русский</option>
            <option value="de_DE">Deutsche</option>
        </select>
    );
};
