import React, { useState } from 'react';
import SubMenu from './SubMenu.js';
import '../style_side-menu/MenuItem.css';
import arrow_default from '../../../images/arrow_defoult.png';
import arrow_active from '../../../images/arrow_active.png';
import { NavLink } from 'react-router-dom';

export default function MenuItem({
    id,
    icon,
    title,
    subItems,
    onMenuItemClick,
    activeItemId,
    isOpenSideBar,
    // setIsOpenDropdown,
}) {
    const isActive = id === activeItemId;

    const IconComponent = Object.values(icon)[0];

    const [isOpen, setIsOpen] = useState(true);

    const handleClick = (event) => {
        onMenuItemClick(id, !isOpen);
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    return (
        <>
            <li
                onClick={handleClick}
                className={
                    isActive
                        ? 'menuItem__item menuItem__item-active'
                        : 'menuItem__item'
                }
            >
                <NavLink
                    to={`/${title}`}
                    className="menuItem__link"
                >
                    <IconComponent fill={isActive ? '#fff' : '#9197B3'} />
                    {isOpenSideBar && (
                        <>
                            <span>{title}</span>
                        </>
                    )}
                </NavLink>
                {isOpenSideBar && (
                    <>
                        {subItems && (
                            <span className="menuItem_body-arrov">
                                <img
                                    onClick={handleClick}
                                    src={
                                        isActive ? arrow_active : arrow_default
                                    }
                                    alt="arrow"
                                />
                            </span>
                        )}
                    </>
                )}
            </li>
            {subItems && id === activeItemId && isOpen && isOpenSideBar && (
                <SubMenu
                    items={subItems}
                    title={title}
                />
            )}
        </>
    );
}
