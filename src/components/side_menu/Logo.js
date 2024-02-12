import React from 'react';
import setting from '../../images/setting.png';
import './style_side-menu/Logo.css';

export default function Logo({ version, handleOpenSideBar, isOpenSideBar }) {
    return (
        <div
            className={` ${isOpenSideBar ? 'logo__' : 'logo__active'}`}
            onClick={handleOpenSideBar}
        >
            <img
                src={setting}
                className="logo__logo"
                alt="Logo"
            />
            {isOpenSideBar && (
                <div className="logo__body-logo">
                    <h2 className="logo__title">Dashboard</h2>
                    <span className="versionDashboard">{version}</span>
                </div>
            )}
        </div>
    );
}
