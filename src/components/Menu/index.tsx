import { Button } from '../../components/Button';
import { featchUsersRequest } from '';

export const Menu = () => {
    const loadUsers = () => {
        dispatch(featchUsersRequest());
    };
    return (
        <>
            <Button text="Users" onClick={loadUsers} />
            <Button text="User info" onClick={handleClick} />
            <Button text="Log out" onClick={handleClick} />
        </>
    );
};
