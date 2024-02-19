import React from 'react';
import '../style_side-menu/SubMenu.css';
import link from '../../../images/link.svg';
import { NavLink } from 'react-router-dom';

export default function SubMenu({ items, title }) {
    return (
        <ul className="subMenu__menu">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="subMenu__item"
                >
                    <NavLink to={`/${title + '/' + item}`}>
                        <img
                            src={link}
                            alt="icon_SubItem"
                        />
                        {item}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}
