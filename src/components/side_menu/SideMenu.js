import React, { useState } from 'react';
import Logo from './Logo';
import './style_side-menu/Side-menu.css';
import MenuLists from './Menu/MenuLists.js';

export default function SideMenu() {
    return (
        <div className="sideMenu__body">
            <Logo version="v.01" />
            <MenuLists />
            
        </div>
    );
}
