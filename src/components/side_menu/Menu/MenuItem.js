import React, { useState } from 'react';
import SubMenu from './SubMenu.js';
import '../style_side-menu/MenuItem.css';
import arrow_default from '../../../images/arrow_defoult.png';
import arrow_active from '../../../images/arrow_active.png';
import { Link } from 'react-router-dom';

export default function MenuItem({
    id,
    icon,
    title,
    path,
    subItems,
    location,
    isOpen,
}) {
    const [isActive, setIsActve] = useState(isOpen);

    const [closeDrop, setCloseDrop] = useState(false);

    const [childSubItem, setChildSubItem] = useState(false);

    function handleClose() {
        setCloseDrop(!closeDrop);
    }

    function isActiveItem() {
        if (location == path) {
            setIsActve(!isOpen);
            setCloseDrop(true);
        }
    }
    // console.log(isActive);

    const IconComponent = Object.values(icon)[0];
    // console.log(path);
    // console.log('__ ' + location);
    return (
        <>
            <li className="menuItem__item">
                <Link
                    to={path}
                    className={`menuItem__link ${isActive ? 'active' : ''}`}
                    onClick={isActiveItem}
                >
                    <IconComponent fill={`${isActive ? '#fff' : '#9197B3'}`} />
                    <>
                        <span className="menuItem__title">{title}</span>
                    </>
                </Link>
                {subItems && (
                    <img
                        onLoad={isActiveItem}
                        onClick={handleClose}
                        className="menuItem__arrov"
                        src={isActive ? arrow_active : arrow_default}
                        alt="arrow"
                    />
                )}

                {subItems && closeDrop && (
                    <ul className="subMenu__menu">
                        {subItems.map((item, index) => {
                            return (
                                <SubMenu
                                    key={index}
                                    {...item}
                                    location={location}
                                    isActive={isActive}
                                    setChildSubItem={setChildSubItem}
                                    setOpenDropDown={handleClose}
                                    childSubItem={childSubItem}
                                />
                            );
                        })}
                    </ul>
                )}
            </li>
        </>
    );
}
