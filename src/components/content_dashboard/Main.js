import React from 'react';
import './style_main/Main.css';
import TopLayer from './top-layer(serch hi)/TopLayer.js';
import Statistics from './statistics/Statistics.js';
import AllCustomers from './customers/AllCustomers.js';

export default function Main() {
    return (
        <div className="main__">
            <TopLayer />
            <Statistics />
            <AllCustomers />
        </div>
    );
}
