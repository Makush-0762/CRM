import { ReactComponent as KeySquare } from '../../images/key-square.svg';
import { ReactComponent as ThreeDІquare } from '../../images/3d-square 1.svg';
import { ReactComponent as UserSquare } from '../../images/user-square 1.svg';
import { ReactComponent as WalletMoney } from '../../images/wallet-money 2.svg';
import { ReactComponent as DiscountShape } from '../../images/discount-shape 1.svg';
import { ReactComponent as MessageQuestion } from '../../images/message-question 1.svg';

const menuItemsDB = [
    {
        id: 1,
        icon: { KeySquare },
        title: 'Dashboard',
        subItems: false,
    },
    {
        id: 2,
        icon: { ThreeDІquare },
        title: 'Product',
        subItems: [
            'Product item1',
            'Product item2',
            'Product item3',
            'Product item4',
        ],
    },
    {
        id: 3,
        icon: { UserSquare },
        title: 'Customers',
        subItems: [
            'Customers item1',
            'Customers item2',
            'Customers item3',
            'Customers item4',
        ],
    },
    {
        id: 4,
        icon: { WalletMoney },
        title: 'Income',
        subItems: [
            'Income item1',
            'Income item2',
            'Income item3',
            'Income item4',
        ],
    },
    {
        id: 5,
        icon: { DiscountShape },
        title: 'Promote',
        subItems: [
            'Promote item1',
            'Promote item2',
            'Promote item3',
            'Promote item4',
        ],
    },
    {
        id: 6,
        icon: { MessageQuestion },
        title: 'Help',
        subItems: ['Help item1', 'Help item2', 'Help item3', 'Help item4'],
    },
];

export default menuItemsDB;
