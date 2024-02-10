import React, { useState } from 'react';
import Logo from './Logo';
import './style_side-menu/Side-menu.css';
import MenuLists from './Menu/MenuLists.js';
import ProVersion from './ProVersion.js';
import ProfileMenu from './ProfileMenu.js';

export default function SideMenu() {
    return (
        <div className="sideMenu__body">
            <div className="sideMenu__Menu">
                <Logo version="v.01" />
                <MenuLists />
            </div>
            <div className="sideMenu__profile-pro">
                <ProVersion />
                <ProfileMenu />
            </div>
        </div>
    );
}
