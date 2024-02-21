import React, { useState, useEffect } from 'react';
import SubMenu from './SubMenu.js';
import '../style_side-menu/MenuItem.css';
import arrow_default from '../../../images/arrow_defoult.png';
import arrow_active from '../../../images/arrow_active.png';
import { NavLink, useLocation } from 'react-router-dom';

export default function MenuItem({
    id,
    icon,
    title,
    path,
    subItems,
    isOpen,
    isOpenSideBar,
}) {
    const location = useLocation();
    const [isActive, setIsActive] = useState(isOpen);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        setIsActive(location.pathname === path);
        setIsDropdownOpen(location.pathname.startsWith(path));
    }, [location.pathname, path]);

    const IconComponent = Object.values(icon)[0];

    return (
        <li className="menuItem__item">
            <NavLink
                to={path}
                className={`menuItem__link ${isActive ? 'active' : ''}`}
            >
                <IconComponent fill={isActive ? '#fff' : '#9197B3'} />
                {isOpenSideBar && (
                    <span className="menuItem__title">{title}</span>
                )}
            </NavLink>
            {isOpenSideBar && subItems && (
                <img
                    className="menuItem__arrov"
                    src={isActive ? arrow_active : arrow_default}
                    alt="arrow"
                />
            )}

            {subItems && isDropdownOpen && (
                <ul className={`${isOpenSideBar ? 'subMenu__menu' : 'subMenu__menu-little'}  `}>
                    {subItems.map((item, index) => (
                        <SubMenu
                            key={index}
                            {...item}
                            isOpenSideBar={isOpenSideBar}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
}
