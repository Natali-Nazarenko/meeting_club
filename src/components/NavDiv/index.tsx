import styles from './NavDiv.module.scss';

export const NavDiv = ({ text }: { text: JSX.Element }): JSX.Element => {
    return <div className={styles.navDiv}>{text}</div>;
};
