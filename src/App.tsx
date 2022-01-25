import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Header, Spinner } from './components';
import store from './redux/store';
import { navigation } from './constans/navigation';
import { PageLogIn } from './pages/PageLogIn';
import { Menu } from './components/Menu';
import { PrivateRoute } from './components/PrivateRoute';

const PageUsers = lazy(() => import('./pages/PageUsers'));
const PageUserInfo = lazy(() => import('./pages/PageUserInfo'));
const PageLogOut = lazy(() => import('./pages/PageLogOut'));

function App() {
    const { login, users, userInfo, logout } = navigation;

    return (
        <>
            <Provider store={store}>
                <Header />
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
        </>
    );
}

export default App;
