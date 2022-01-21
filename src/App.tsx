import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Header, Spinner } from './components';
import store from './redux/store';
import { navigation } from './constans/navigation';
import { PageLogIn } from './pages/PageLogIn';
import { PageLogOut } from './pages/PageLogOut';
import { Menu } from './components/Menu';

const PageUsers = lazy(() => import('./pages/PageUsers'));
const PageUserInfo = lazy(() => import('./pages/PageUserInfo'));

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
                        <Route path={users.path} element={<PageUsers />} />
                        <Route
                            path={userInfo.path}
                            element={<PageUserInfo />}
                        />
                        <Route path={logout.path} element={<PageLogOut />} />
                    </Routes>
                </Suspense>
            </Provider>
        </>
    );
}

export default App;
