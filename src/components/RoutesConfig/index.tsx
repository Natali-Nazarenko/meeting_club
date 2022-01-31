import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from '../PrivateRoute';
import { PageLogIn } from '../../pages/PageLogIn';
import { navigation } from '../../constans/navigation';

const PageUsers = lazy(() => import('../../pages/PageUsers'));
const PageUserInfo = lazy(() => import('../../pages/PageUserInfo'));
const PageLogOut = lazy(() => import('../../pages/PageLogOut'));

export const RoutesConfig = () => {
    const { login, users, userInfo, logout } = navigation;

    return (
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
    );
};
