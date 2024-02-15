import React from 'react';
import CustTitle from './custom-component/CustTitle';
import ActionCustomers from './custom-component/ActionCustomers.js';
import '../style_main/Main.css';

export default function AllCustomers() {
    return (
        <div className="allCust__">
            <div className="allCust__top-layer">
                <CustTitle
                    title="All Customers"
                    subTitle="Active Members"
                />
                <ActionCustomers />
            </div>
        </div>
    );
}
