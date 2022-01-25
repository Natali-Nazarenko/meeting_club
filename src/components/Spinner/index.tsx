import { Hearts } from 'react-loader-spinner';
import styles from './Spinner.module.scss';

export function Spinner(): JSX.Element {
    return (
        <div className={styles.spinner}>
            <Hearts ariaLabel="loading-indicator" color="red" width={200} />
        </div>
    );
}
