import React from 'react';
import '../style_side-menu/SubMenu.css';
import link from '../../../images/link.svg'

export default function SubMenu({ items }) {
    
    return (
        <ul className="subMenu__menu">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="subMenu__item"
                >
                    <a href="#"><img src={link} alt="icon_SubItem"/>{item}</a>
                </li>
            ))}
        </ul>
    );
}
