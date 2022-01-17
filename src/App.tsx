import { Provider } from 'react-intl/src/components/injectIntl';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import store from './redux/store';
import { navigation } from './constans/navigation';
import { PageLogIn } from './pages/PageLogIn';
import { PageUserInfo } from './pages/PageUserInfo';
import { PageUsers } from './pages/PageUsers';
import { PageLogOut } from './pages/PageLogOut';

function App() {
    const { login, users, userInfo, logout } = navigation;

    return (
        <>
            <Provider store={store}>
                <Header />
                <Routes>
                    <Route path={login.path} element={<PageLogIn />} />
                    <Route path={users.path} element={<PageUsers />} />
                    <Route path={userInfo.path} element={<PageUserInfo />} />
                    <Route path={logout.path} element={<PageLogOut />} />
                </Routes>
            </Provider>
        </>
    );
}

export default App;
