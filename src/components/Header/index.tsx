import { useSelector } from 'react-redux';

import styles from './Header.module.scss';
import logo from '../../images/logo.svg';
import { SelectLanguage, Menu } from '../';

export const Header = ({
    handleChange,
}: {
    handleChange: (data: React.ChangeEvent<HTMLSelectElement>) => void;
}): JSX.Element => {
    const auth = localStorage.getItem('auth');
    return (
        <header className={styles.header}>
            {auth && <Menu />}
            <img src={logo} />
            <p>Meeting Club</p>
            <SelectLanguage handleChange={handleChange} />
        </header>
    );
};
