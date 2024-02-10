import React from 'react';
import './style_side-menu/ProVersion.css';

export default function ProVersion() {
    return (
        <>
            {false ? (
                <div className="proVersion__body">
                    <div className="proVersion__body-full">
                        <h3 children="proVersion__title">
                            Upgrade to PRO to get access all Features!
                        </h3>
                        <button className="proVersion__button">
                            Get Pro Now!
                        </button>
                    </div>
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
