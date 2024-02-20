import React, { useState } from 'react';
import '../style_side-menu/SubMenu.css';
import link from '../../../images/link.svg';
import { Link, useLocation } from 'react-router-dom';

export default function SubMenu({
    subTitle,
    path,
    isActive,
    setChildSubItem,
    childSubItem,
}) {
    const location = useLocation();

    function handleOpenedDrop() {
        if (location.pathname != path) {
            setChildSubItem(!childSubItem);
        }
    }

    return (
        <>
            <li
                className={`subMenu__item ${childSubItem ? 'active' : ''}`}
                onLoad={handleOpenedDrop}
            >
                <Link to={path}>
                    <img
                        src={link}
                        alt="icon_SubItem"
                    />
                    {subTitle}
                </Link>
            </li>
        </>
    );
}
