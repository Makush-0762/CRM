import React, { useState } from 'react';
import '../style_side-menu/MenuLists.css';
import menuItemsDB from '../menuItemsDB.js';
import MenuItem from './MenuItem.js';

export default function MenuLists({ setIsOpenDropdown, isOpenSideBar }) {
    const [activeItemId, setActiveItemId] = useState(1); //Стан для контролю активного лінка

    const handleMenuItemClick = (id, isOpen) => {
        // Ловимо id із дочірнього елементу
        setActiveItemId(id);
        setIsOpenDropdown(isOpen);
    };

    return (
        <div className="menuLists__body">
            <ul className="menuList__list">
                {menuItemsDB.map((item, index) => {
                    return (
                        <MenuItem
                            isOpenSideBar={isOpenSideBar}
                            key={index}
                            {...item}
                            activeItemId={activeItemId} // Передаємо саму id (відбувається перерендеринг)
                            onMenuItemClick={handleMenuItemClick} // Пропсами пердаємо функцію, і ловимо id
                            setIsOpenDropdown={setIsOpenDropdown}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
