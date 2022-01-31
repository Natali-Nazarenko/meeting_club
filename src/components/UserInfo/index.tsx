import { User } from '../../constans/interfaces';
import { Card } from '../Card';

export const UserInfo = ({ user }: { user: User }): JSX.Element => {
    return <Card userInfo={user} nameClass="info" />;
};
