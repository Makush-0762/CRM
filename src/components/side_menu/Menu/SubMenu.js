import React from 'react';
import '../style_side-menu/SubMenu.css';
import link from '../../../images/link.svg';
import { NavLink } from 'react-router-dom';

export default function SubMenu({ subTitle, path, isOpenSideBar }) {
    return (
        <li className="subMenu__item">
            <NavLink
                to={path}
                className={({ isActive }) =>
                    isActive ? 'subMenu__link subItem-active' : 'subMenu__link'
                }
            >
                <img
                    src={link}
                    alt="icon_SubItem"
                    title={subTitle}
                />
                {isOpenSideBar && subTitle}
            </NavLink>
        </li>
    );
}
