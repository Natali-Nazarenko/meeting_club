import { useSelector } from 'react-redux';

import styles from './Header.module.scss';
import logo from '../../images/logo.svg';
import { SelectLanguage, Menu } from '../';
import { authorizationSelector } from '../../redux/users/selectors';

export const Header = ({
    handleChange,
}: {
    handleChange: (data: React.ChangeEvent<HTMLSelectElement>) => void;
}): JSX.Element => {
    const auth = useSelector(authorizationSelector);
    console.log('auth: ', auth);

    return (
        <header className={styles.header}>
            {auth && <Menu />}
            <img src={logo} />
            <p>Meeting Club</p>
            <SelectLanguage handleChange={handleChange} />
        </header>
    );
};
