import React, { useState } from 'react';
import Search from '../../Search';
import Filter from './Filter';
import '../../style_main/Main.css';

export default function ActionCustomers() {
    const [selected, setSelected] = useState('');
    return (
        <div className="actionCustomers">
            <Search color={'#F9FBFF'} />
            <Filter
                customClass="filter__position"
                selected={selected}
                setSelected={setSelected}
            />
        </div>
    );
}
