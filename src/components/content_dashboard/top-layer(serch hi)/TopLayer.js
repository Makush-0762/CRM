import React from 'react';
import Hi from './Hi';
import Search from '../Search';

export default function TopLayer() {
    return (
        <div className="top-layer">
            <Hi name="Evano" />
            <Search />
        </div>
    );
}
