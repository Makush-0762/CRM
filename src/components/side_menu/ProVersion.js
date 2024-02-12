import React from 'react';
import './style_side-menu/ProVersion.css';

export default function ProVersion({ height, isOpenDropdown, isOpenSideBar }) {
    const adjustedHeight = isOpenDropdown ? height - 200 : height;
    console.log(isOpenDropdown);
    console.log(adjustedHeight + '//..'); // Вирахувати висоту залежно від того, чи розкритий дропдаун
    return (
        <>
            {isOpenSideBar && adjustedHeight >= 275 ? (
                <div className="proVersion__body">
                    <h3 children="proVersion__title">
                        Upgrade to PRO to get access all Features!
                    </h3>
                    <button className="proVersion__button">Get Pro Now!</button>
                </div>
            ) : (
                <div className="proVersion__body-f">
                    <div className="proVersion__body-little">
                        <button className="proVersion__button-little">
                            Pro
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
