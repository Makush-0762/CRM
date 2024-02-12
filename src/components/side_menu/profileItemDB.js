import { ReactComponent as userProfile } from '../../images/Profile icon/user_profile.svg';
import { ReactComponent as settings } from '../../images/Profile icon/settings.svg';
import { ReactComponent as message } from '../../images/Profile icon/message.svg';
import { ReactComponent as exit } from '../../images/Profile icon/exit.svg';

const profileItemDB = [
    {
        id: 1,
        text: 'User profile',
        icon: { userProfile },
        alt: 'User profile',
        link: '/profile/user-profile',
    },
    {
        id: 2,
        text: 'Settings',
        icon: { settings },
        alt: 'Settings',
        link: '/profile/settings',
    },
    {
        id: 3,
        text: 'Message',
        icon: { message },
        alt: 'Message',
        link: '/profile/message',
    },
    {
        id: 4,
        text: 'Exit',
        icon: { exit },
        alt: 'Exit',
        link: '/profile/exit',
    },
];

export default profileItemDB;
