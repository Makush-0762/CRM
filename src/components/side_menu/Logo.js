import React from 'react';
import setting from '../../images/setting.png';

export default function Logo({ version }) {
    return (
        <div className="logo__body-logo  ">
            <img
                src={setting}
                class="logo__logo"
                alt="Logo"
            />
            <h2 className="logo__title">Dashboard</h2>
            <span className="versionDashboard">{version}</span>
        </div>
    );
}
