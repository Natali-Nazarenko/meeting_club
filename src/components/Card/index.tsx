import { User } from '../../constans/interfaces';
import { GeneralCard } from './GeneralCard';
import { IndividualCard } from './IndividualCard';

export const Card = ({
    userInfo,
    nameClass,
}: {
    userInfo: User;
    nameClass: string;
}) => {
    if (nameClass === 'card') {
        return <GeneralCard userInfo={userInfo} />;
    } else {
        return <IndividualCard userInfo={userInfo} />;
    }
};
