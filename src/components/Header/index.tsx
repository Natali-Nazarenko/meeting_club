import styles from './Header.module.scss';
import logo from '../../images/logo.svg';

export const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <img src={logo} />
            <p>Meeting Club</p>
        </header>
    );
};
