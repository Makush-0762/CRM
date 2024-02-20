import { ReactComponent as KeySquare } from '../images/key-square.svg';
import { ReactComponent as ThreeDІquare } from '../images/3d-square 1.svg';
import { ReactComponent as UserSquare } from '../images/user-square 1.svg';
import { ReactComponent as WalletMoney } from '../images/wallet-money 2.svg';
import { ReactComponent as DiscountShape } from '../images/discount-shape 1.svg';
import { ReactComponent as MessageQuestion } from '../images/message-question 1.svg';

const menuItemsDB = [
    {
        id: 1,
        icon: { KeySquare },
        title: 'Dashboard',
        path: '/Dashboard',
        subItems: false,
        isOpen: false,
    },
    {
        id: 2,
        icon: { ThreeDІquare },
        title: 'Product',
        path: '/Product',
        subItems: [
            {
                subTitle: 'Product item1',
                path: '/Product/Product_item1',
            },
            {
                subTitle: 'Product item2',
                path: '/Product/Product_item2',
            },
            {
                subTitle: 'Product item3',
                path: '/Product/Product_item3',
            },
            {
                subTitle: 'Product item4',
                path: '/Product/Product_item4',
            },
        ],
        isOpen: false,
    },
    {
        id: 3,
        icon: { UserSquare },
        title: 'Customers',
        path: '/Customers',
        subItems: [
            {
                subTitle: 'Customers item1',
                path: '/Customers/Customers_item1',
            },
            {
                subTitle: 'Customers item2',
                path: '/Customers/Customers_item2',
            },
            {
                subTitle: 'Customers item3',
                path: '/Customers/Customers_item3',
            },
            {
                subTitle: 'Customers item4',
                path: '/Customers/Customers_item4',
            },
        ],
        isOpen: false,
    },
    {
        id: 4,
        icon: { WalletMoney },
        title: 'Income',
        path: '/Income',
        subItems: [
            {
                subTitle: 'Income item1',
                path: '/Income/Income_item1',
            },
            {
                subTitle: 'Income item2',
                path: '/Income/Income_item2',
            },
            {
                subTitle: 'Income item3',
                path: '/Income/Income_item3',
            },
            {
                subTitle: 'Income item4',
                path: '/Income/Income_item4',
            },
        ],
        isOpen: false,
    },
    {
        id: 5,
        icon: { DiscountShape },
        title: 'Promote',
        path: '/Promote',
        subItems: [
            {
                subTitle: 'Promote item1',
                path: '/Promote/Promote_item1',
            },
            {
                subTitle: 'Promote item2',
                path: '/Promote/Promote_item2',
            },
            {
                subTitle: 'Promote item3',
                path: '/Promote/Promote_item3',
            },
            {
                subTitle: 'Promote item4',
                path: '/Promote/Promote_item4',
            },
        ],
        isOpen: false,
    },
    {
        id: 6,
        icon: { MessageQuestion },
        title: 'Help',
        path: '/Help',
        subItems: [
            {
                subTitle: 'Help item1',
                path: '/Help/Help_item1',
            },
            {
                subTitle: 'Help item2',
                path: '/Help/Help_item2',
            },
            {
                subTitle: 'Help item3',
                path: '/Help/Help_item3',
            },
            {
                subTitle: 'Help item4',
                path: '/Help/Help_item4',
            },
        ],
        isOpen: false,
    },
];

export default menuItemsDB;
