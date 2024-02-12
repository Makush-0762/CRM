import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import './style_side-menu/Side-menu.css';
import MenuLists from './Menu/MenuLists.js';
import ProVersion from './ProVersion.js';
import ProfileMenu from './profile-menu/ProfileMenu.js';

export default function SideMenu() {
    const [hightProVersion, setHightProVersion] = useState(null);
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [isOpenSideBar, setIsOpenSideBar] = useState(false);

    function handleOpenSideBar() {
        setIsOpenSideBar(!isOpenSideBar);
    }

    useEffect(() => {
        const handleResize = () => {
            const proVersionBlock = document.querySelector(
                '.sideMenu__profile-pro'
            );
            setHightProVersion(proVersionBlock.offsetHeight);
            console.log(hightProVersion);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [hightProVersion]);

    return (
        <div
            className={` sideMenu__body ${
                isOpenSideBar ? '' : 'sideMenu__body-active'
            }`}
        >
            <div className="sideMenu__Menu">
                <Logo
                    version="v.01"
                    handleOpenSideBar={handleOpenSideBar}
                    isOpenSideBar={isOpenSideBar}
                />
                <MenuLists
                    setIsOpenDropdown={setIsOpenDropdown}
                    isOpenSideBar={isOpenSideBar}
                />
            </div>
            <div className="sideMenu__profile-pro">
                <ProVersion
                    height={hightProVersion}
                    isOpenDropdown={isOpenDropdown}
                    isOpenSideBar={isOpenSideBar}
                />
                <ProfileMenu isOpenSideBar={isOpenSideBar} />
            </div>
        </div>
    );
}
