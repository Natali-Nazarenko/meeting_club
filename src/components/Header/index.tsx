import styles from './Header.module.scss';
import logo from '../../images/logo.svg';
import { SelectLanguage } from '../SelectLanguage';

export const Header = ({
    handleChange,
}: {
    handleChange: (data: React.FormEvent<HTMLInputElement>) => void;
}): JSX.Element => {
    return (
        <header className={styles.header}>
            <img src={logo} />
            <p>Meeting Club</p>
            <SelectLanguage handleChange={handleChange} />
        </header>
    );
};
