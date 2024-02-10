import React from 'react';
import setting from '../../images/setting.png';
import './style_side-menu/Logo.css';

export default function Logo({ version }) {
    return (
        <div className="logo__">
            <img
                src={setting}
                className="logo__logo"
                alt="Logo"
            />
            <div className="logo__body-logo">
                <h2 className="logo__title">Dashboard</h2>
                <span className="versionDashboard">{version}</span>
            </div>
        </div>
    );
}
