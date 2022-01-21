import Loader from 'react-loader-spinner';
import styles from './Spinner.module.scss';

export const Spinner = () => {
    return (
        <div className={styles.spinner}>
            {/*             <Hearts
                arialLabel="loading-indicator"
                color="#e21d58"
                height={150}
                width={150}
            />
            <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
 */}
            Loading...{' '}
        </div>
    );
};
