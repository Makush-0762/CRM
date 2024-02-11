import React, { useState } from 'react';
import SubMenu from './SubMenu.js';
import '../style_side-menu/MenuItem.css';
import arrow_default from '../../../images/arrow_defoult.png';
import arrow_active from '../../../images/arrow_active.png';

export default function MenuItem({
    id,
    icon,
    title,
    subItems,
    onMenuItemClick,
    activeItemId,
    // setIsOpenDropdown,
}) {
    const isActive = id === activeItemId; // Перевіркою перетворюємо id на бульове значення, для оперування класами

    const IconComponent = Object.values(icon)[0]; //Витягуємо коммпонент svg іконки для того, щоб була можливість керувати коьлором

    const [isOpen, setIsOpen] = useState(true);

    const handleClick = (event) => {
        onMenuItemClick(id, !isOpen);
        event.stopPropagation();
        setIsOpen(!isOpen);
    };
    return (
        <li
            onClick={handleClick} // передаємо id
            className={
                isActive // оперуэмо класами
                    ? 'menuItem__item menuItem__item-active'
                    : 'menuItem__item '
            }
        >
            <a
                href="#"
                className="menuItem__link"
            >
                <IconComponent fill={isActive ? '#fff' : '#9197B3'} />{' '}
                {/*Тут во керуєм кольором*/}
                <span>{title}</span>
                {subItems && (
                    <img
                        onClick={handleClick}
                        src={isActive ? arrow_active : arrow_default}
                        alt="arrow"
                    />
                )}
            </a>
            {subItems && id === activeItemId && isOpen && (
                <SubMenu items={subItems} />
            )}
        </li>
    );
}
