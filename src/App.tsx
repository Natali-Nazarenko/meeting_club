import { Suspense, useState } from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { Header, Spinner } from './components';
import store from './redux/store';
import { LOCALES } from './intl/locales';
import { messages } from './intl/messages';
import { RoutesConfig } from './components/RoutesConfig';

function App() {
    const locale = LOCALES.ENGLISH;
    const [currentLocale, setCurrentLocale] = useState(locale);
    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.currentTarget.value;
        setCurrentLocale(value);
    };
    return (
        <>
            <IntlProvider
                messages={messages[currentLocale]}
                locale={currentLocale}
                defaultLocale={LOCALES.ENGLISH}
            >
                <Provider store={store}>
                    <Header handleChange={changeLanguage} />
                    <Suspense fallback={<Spinner />}>
                        <RoutesConfig />
                    </Suspense>
                </Provider>
            </IntlProvider>
        </>
    );
}

export default App;
