import { lazy, Suspense, useState } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { Header, Spinner } from './components';
import store from './redux/store';
import { navigation } from './constans/navigation';
import { PageLogIn } from './pages/PageLogIn';
import { Menu } from './components/Menu';
import { PrivateRoute } from './components/PrivateRoute';
import { LOCALES } from './intl/locales';
import { messages } from './intl/messages';

const PageUsers = lazy(() => import('./pages/PageUsers'));
const PageUserInfo = lazy(() => import('./pages/PageUserInfo'));
const PageLogOut = lazy(() => import('./pages/PageLogOut'));

function App() {
    const { login, users, userInfo, logout } = navigation;
    const locale = LOCALES.ENGLISH;
    const [currentLocale, setCurrentLocale] = useState(locale);
    const changeLanguage = (event: React.FormEvent<HTMLInputElement>) => {
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
                    <Menu />
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path={login.path} element={<PageLogIn />} />
                            <Route
                                path={users.path}
                                element={
                                    <PrivateRoute>
                                        <PageUsers />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path={userInfo.path}
                                element={
                                    <PrivateRoute>
                                        <PageUserInfo />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path={logout.path}
                                element={
                                    <PrivateRoute>
                                        <PageLogOut />
                                    </PrivateRoute>
                                }
                            />
                        </Routes>
                    </Suspense>
                </Provider>
            </IntlProvider>
        </>
    );
}

export default App;
