import React from 'react';
import '../../style_main/CustTitle.css';

export default function CustTitle({ title, subTitle }) {
    return (
        <div className="custTitle__body">
            <h1 className="cust__title">{title}</h1>
            <h4 className="cust__subtitle">{subTitle}</h4>
        </div>
    );
}
    