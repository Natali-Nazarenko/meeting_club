import { Button } from '../../components/Button';

export const PageUsers = () => {
    const handleClick = () => {
        return true;
    };
    return (
        <>
            <Button text="Users" onClick={handleClick} />
            <Button text="User info" onClick={handleClick} />
            <Button text="Log out" onClick={handleClick} />
            <div>USERS</div>
        </>
    );
};
