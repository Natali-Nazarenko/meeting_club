import { NavLink } from 'react-router-dom';
import { Button } from '../../components/Button';
import { navigation } from '../../constans/navigation';
import { PageUsers } from '../PageUsers';

export const PageLogIn = () => {
    const handleClick = () => {
        console.log(1);
        <NavLink to={navigation.login.path}>{<PageUsers />}</NavLink>;
        return true;
    };
    return <Button text="Log in" onClick={handleClick} />;
};
