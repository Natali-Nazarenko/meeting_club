import styles from './SelectLanguage.module.scss';
import { languages } from '../../constans/languages';

export const SelectLanguage = ({
    handleChange,
}: {
    handleChange: (data: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
    return (
        <select className={styles.blockChoiseLanguage} onChange={handleChange}>
            {languages.map(({ name, code }) => (
                <option key={code} value={code}>
                    {name}
                </option>
            ))}
        </select>
    );
};
