import React from 'react';
import '../../style_main/CustTitle.css';

export default function CustTitle({ title, subTitle}) {
    return (
        <div className="custTitle__body">
            <h2 className="cust__title">{title}</h2>
            <p className="cust__subtitle">{subTitle}</p>
        </div>
    );
}
