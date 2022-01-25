import styles from './Header.module.scss';
import logo from '../../images/logo.svg';
import { SelectLanguage } from '../SelectLanguage';

export const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <img src={logo} />
            <p>Meeting Club</p>
            <SelectLanguage />
        </header>
    );
};
