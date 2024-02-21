import React, { useState } from 'react';
import '../style_side-menu/ProfileMenu.css';
import evano from '../../../images/evano.png';
import arrow_down from '../../../images/arrow_defoult.png';
import profileItemDB from '../../../DB/profileItemDB.js';
import ProfileSubMenu from './ProfileSubMenu.js';

export default function ProfileMenu({ isOpenSideBar }) {
    const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

    function handleOpenSubProfile() {
        setIsOpenSubMenu(!isOpenSubMenu);
    }

    return (
        <>
            <div
                className="profileMenu__profile"
                onClick={handleOpenSubProfile}
            >
                <div className="profile__body-img">
                    <img
                        src={evano}
                        alt="Profile"
                        className="profile__img"
                    />
                </div>
                {isOpenSideBar && (
                    <div className="profile__body-name">
                        <p className="profile__name">Evano</p>
                        <p className="profile__position">Project Manager</p>
                    </div>
                )}
                {isOpenSideBar && (
                    <img
                        src={arrow_down}
                        alt="icon Arrow"
                        className={`${
                            isOpenSubMenu
                                ? 'profile__arrow-active'
                                : 'profile__arrow'
                        }`}
                        // onClick={handleOpenSubProfile}
                    />
                )}
            </div>
            {/* {isOpenSubMenu && isOpenSideBar && ( */}
            <div
                className={`${
                    isOpenSubMenu && isOpenSideBar
                        ? 'menuProfile-active'
                        : 'menuProfile'
                }`}
            >
                <ul className="profile__list">
                    {profileItemDB.map((LiItem) => {
                        return (
                            <ProfileSubMenu
                                key={LiItem.id}
                                {...LiItem}
                            />
                        );
                    })}
                </ul>
            </div>
            {/* )} */}
        </>
    );
}
