import React from 'react';
import './style_side-menu/ProfileMenu.css';
import evano from '../../images/evano.png';
import arrow_down from '../../images/arrow_defoult.png';

export default function ProfileMenu() {
    return (
        <div className="profileMenu__profile">
            <div className="profile__body-img">
                <img
                    src={evano}
                    alt="Profile"
                    className="profile__img"
                />
            </div>
            <div className="profile__body-name">
                <p className="profile__name">Evano</p>
                <p className="profile__position">Project Manager</p>
            </div>
            <img
                src={arrow_down}
                alt="icon Arrow"
                className="profile__arrow"
            />
        </div>
    );
}
