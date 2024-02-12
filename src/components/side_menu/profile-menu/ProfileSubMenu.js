import React from 'react';
import '../style_side-menu/ProfileSubMenu.css';

export default function ProfileSubMenu({ id, text, icon, link }) {
    const IconComponent = Object.values(icon)[0];
    return (
        <li className="profile__list-item">
            <a
                href={link}
                className="profile_item-link"
            >
                <IconComponent />
                <span className="profile__text">{text}</span>
            </a>
        </li>
    );
}
