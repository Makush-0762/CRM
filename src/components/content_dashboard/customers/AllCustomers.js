import React, { useEffect, useState } from 'react';
import CustTitle from './custom-component/CustTitle';
import ActionCustomers from './custom-component/ActionCustomers.js';
import '../style_main/Main.css';
import TableCust from './custom-component/TableCust.js';

export default function AllCustomers({dataLength}) {


    return (
        <div className="allCust__">
            <div className="allCust__top-layer">
                <CustTitle
                    title="All Customers"
                    subTitle="Active Members"
                />
                <ActionCustomers />
            </div>
            <TableCust dataLength={dataLength} />
        </div>
    );
}
