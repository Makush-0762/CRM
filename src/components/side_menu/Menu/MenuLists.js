import React, { useState } from 'react';
import '../style_side-menu/MenuLists.css';
import menuItemsDB from '../../../DB/menuItemsDB.js';
import MenuItem from './MenuItem.js';
import { useLocation } from 'react-router-dom';

export default function MenuLists({ setIsOpenDropdown, isOpenSideBar }) {
    const location = useLocation();
    // console.log(location.pathname);
    return (
        <div className="menuLists__body">
            <ul className="menuList__list">
                {menuItemsDB.map((item, index) => {
                    return (
                        <MenuItem
                            key={index}
                            {...item}
                            location={location.pathname}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
