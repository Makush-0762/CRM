import section1Icon from '../images/profile-2user.svg';
import section2Icon from '../images/profile-tick.svg';
import section3Icon from '../images/monitor.svg';
import p1small from '../images/People_1-small.jpg';
import p2small from '../images/People_2-small.jpg';
import p3small from '../images/People_3-small.jpg';
import p4small from '../images/People_4-small.jpg';
import p5small from '../images/People_5-small.jpg';

const statistic_DB = [
    {
        id: 1,
        title: 'Total Customers',
        count: '5,423',
        icon: { section1Icon },
        percent: 16,
    },
    {
        id: 2,
        title: 'Members',
        count: '1,893',
        icon: { section2Icon },
        percent: 1,
    },
    {
        id: 3,
        title: 'Active Now',
        count: '189',
        icon: { section3Icon },
        activeNow: [p1small, p2small, p3small, p4small, p5small],
    },
];

export default statistic_DB;
